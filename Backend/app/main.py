from typing import Optional, Tuple
import datetime
import jwt
from fastapi import FastAPI, HTTPException, Depends, status
from fastapi.security import OAuth2PasswordBearer
from pydantic import BaseModel
import mysql.connector
from mysql.connector.connection import MySQLConnection

app = FastAPI()

ALGORITHM = "HS256"
SECRET_KEY = "secret"  # TODO cambiare chiave

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/login")


class User(BaseModel):
    """
    User model with email and password properties.
    """
    email: str
    password: str


class Registry(BaseModel):
    """
    Registry model with properties for a business registry.
    """
    name: str = None
    surname: str = None
    business_name: str
    vat_number: str = None
    telephone_number: str = None
    social_security_number: str = None
    is_admin: int = 0
    address: str
    civic_number: int
    cap: str
    city: str
    province: str
    nation: str


def get_conn() -> MySQLConnection:
    """
    Returns a connection to the MySQL database.
    """
    conn = mysql.connector.connect(
        host='mysql',
        user='root',
        password='passwordsicura',
        database='derweze'
    )
    return conn


def add_user(conn: MySQLConnection, user: User) -> None:
    """
    Adds a user to the database
    """
    cursor = conn.cursor()
    insert_query = 'INSERT INTO user (email, password) VALUES (%s, SHA1(%s))'
    cursor.execute(insert_query, (user.email, user.password))
    conn.commit()
    cursor.close()


def add_registry(conn: MySQLConnection, registry: Registry) -> None:
    """
    Adds a registry to the database.
    """
    cursor = conn.cursor()
    insert_query = '''INSERT INTO registry (
        name,
        surname,
        business_name,
        vat_number,
        telephone_number,
        social_security_number,
        is_admin,
        Indirizzo,
        Civico,
        CAP,
        Localita,
        Provincia,
        Nazione
    )
    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
    '''

    cursor.execute(insert_query, (
        registry.name,
        registry.surname,
        registry.business_name,
        registry.vat_number,
        registry.telephone_number,
        registry.social_security_number,
        registry.is_admin,
        registry.address,
        registry.civic_number,
        registry.cap,
        registry.city,
        registry.province,
        registry.nation
    ))
    conn.commit()
    cursor.close()


def get_user_by_email(conn: MySQLConnection, email: str) -> Optional[User]:
    """
    Returns the user with the given email address
    """
    cursor = conn.cursor()
    select_query = 'SELECT * FROM user WHERE email = %s'
    cursor.execute(select_query, (email,))
    result = cursor.fetchone()
    cursor.close()
    if result is not None:
        return User(email=result[1], password=result[2])



def create_access_token(data: dict, expires_delta: Optional[datetime.timedelta] = None) -> bytes:
    """
    Creates a JSON Web Token with the given data
    """
    to_encode = data.copy()

    # Set the token's expiration time
    if expires_delta:
        expire = datetime.datetime.utcnow() + expires_delta
    else:
        expire = datetime.datetime.utcnow() + datetime.timedelta(minutes=15)

    # Add the expiration time to the data to be encoded
    to_encode.update({"exp": expire})

    # Encode the token using the given algorithm and secret key
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

    return encoded_jwt


def get_current_user(conn: MySQLConnection, token: str = Depends(oauth2_scheme)) -> Tuple:
    """
    Returns the current user based on the given token
    """
    # Raise an exception if the credentials are invalid
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )

    # Decode the JSON Web Token
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
    except jwt.PyJWTError:
        raise credentials_exception

    # Get the email from the payload
    email: str = payload.get("sub")
    if email is None:
        raise credentials_exception

    # Get the user information from the database
    token_data = get_user_by_email(conn, email)
    if token_data is None:
        raise credentials_exception

    return token_data


@app.post("/login")
async def login(user: User, conn: MySQLConnection = Depends(get_conn)):
    """
    Login endpoint for the user. 
    It receives a User object containing email and password.
    It returns a JSON response containing the access token and token type.
    """
    # Check if the user exists in the database
    db_user = get_user_by_email(conn, user.email)
    if not db_user:
        # Raise an exception if the user is not found
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Incorrect email or password"
        )

    # Hash the password using the SHA1 function
    password = user.password.encode()
    cursor = conn.cursor()
    cursor.execute("SELECT SHA1(%s)", (password,))
    hashed_password = cursor.fetchone()[0]
    cursor.close()

    # Compare the hashed password with the one in the database
    if db_user.password != hashed_password:
        # Raise an exception if the password is incorrect
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Incorrect email or password"
        )

    # Create an access token for the user
    access_token = create_access_token({"sub": user.email})

    # Close the database connection
    conn.close()

    # Return the access token and token type
    return {"access_token": access_token, "token_type": "bearer"}


@app.post("/signup")
async def signup(user: User, registry: Registry, conn: MySQLConnection = Depends(get_conn)):
    # Check if email already exists in the database
    db_user = get_user_by_email(conn, user.email)
    if db_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already exists"
        )

    # Insert registry data into database
    add_registry(conn, registry)
    # Insert user data into database
    add_user(conn, user)

    # Commit changes and close connection
    conn.commit()
    conn.close()

    return {"message": "User registered successfully"}
