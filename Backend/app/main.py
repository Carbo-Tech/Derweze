import datetime
from typing import Dict, List, Optional, Tuple

import requests
import jwt
import mysql.connector
from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from mysql.connector.connection import MySQLConnection
from pydantic import BaseModel

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
    telephone_number: str = None
    vat_number: str = None
    is_admin: str = "0"
    social_security_number: str = None
    address: str = None
    civic_number: int = None
    cap: str = None
    city: str = None
    province: str = None
    nation: str = None


class Contract(BaseModel):
    """
    Registry model with properties for a business registry.
    """
    idContract: str = None
    idDomicile: str = None
    service_request_date: datetime.datetime = None
    validity_start_date: datetime.datetime = None
    validity_end_date: datetime.datetime = None
    offert_description: str = None
    utility: str = None
    contract_status: str = None
    payment_type: str = None
    taxable_power: str = None
    available_power: str = None
    annual_energy: str = None
    annual_gas: str = None
    use_cooking_foods: str = None
    production_hot_sanitary_water: str = None
    individual_heating: str = None
    commercial_use: str = None
    description: str = None
    address: str = None
    civicNumber: str = None
    zipCode: str = None
    locality: str = None
    province: str = None
    nation: str = None
    permission: str = None


class Record(BaseModel):
    dateTime: str
    value: int


class Usage(BaseModel):
    co2: int
    records: List[Record]


def fetchall(cursor):
    columns = [column[0] for column in cursor.description]
    ret = []
    all = cursor.fetchall()
    if not all:
        return None
    for row in all:
        ret.append(dict(zip(columns, row)))
    return ret


def fetchone(cursor):
    one = cursor.fetchone()
    if not one:
        return None
    columns = [column[0] for column in cursor.description]
    return dict(zip(columns, one))


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


def get_usage_by_contract(idContract: int,type:str,startTime:datetime,endTime:datetime) -> Usage:
    if(type=="Gas"):
        response = requests.get('http://mockapi:443/getUserGas',params={"idContract":idContract,"startTime":startTime,"endTime":endTime})
    elif(type=="Electricity"):
        response = requests.get('http://mockapi:443/getUserElectricity',params={"idContract":idContract,"startTime":startTime,"endTime":endTime})
    if response:
        print(response.json())
        return response
    return None


def get_current_user(token: str = Depends(oauth2_scheme)) -> User:
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email: str = payload.get("sub")
        if email is None:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Token non valido",
                headers={"WWW-Authenticate": "Bearer"},
            )
    except jwt.exceptions.ExpiredSignatureError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token scaduto",
            headers={"WWW-Authenticate": "Bearer"},
        )
    except jwt.exceptions.DecodeError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token non valido",
            headers={"WWW-Authenticate": "Bearer"},
        )

    user: User = get_user_by_email(email=email)

    if user is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token non valido",
            headers={"WWW-Authenticate": "Bearer"},
        )

    return user


def add_user(conn: MySQLConnection, user: User) -> None:
    """
    Adds a user to the database
    """
    registry_error_exception = HTTPException(
        status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
        detail="Could not insert registry",
        headers={"WWW-Authenticate": "Bearer"},
    )
    cursor = conn.cursor()
    insert_query = 'SELECT RegisterUser(%s,%s)'
    cursor.execute(insert_query, (user.email, user.password))
    if cursor.fetchone():
        conn.commit()
        cursor.close()
    else:
        raise registry_error_exception


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


def get_salt_by_email(conn: MySQLConnection, email: str) -> Optional[str]:
    """
    Returns the salt with the given email address
    """
    cursor = conn.cursor()
    select_query = 'SELECT salt FROM user WHERE email = %s'
    cursor.execute(select_query, (email,))
    result = fetchone(cursor)
    cursor.close()
    if result is not None:
        return result["salt"]
    raise HTTPException(
        status_code=status.HTTP_400_BAD_REQUEST,
        detail="Incorrect email or password"
    )


def get_user_by_email(email: str, conn: MySQLConnection = get_conn()) -> Optional[User]:
    """
    Returns the user with the given email address
    """
    cursor = conn.cursor()
    select_query = 'SELECT * FROM user WHERE email = %s;'
    cursor.execute(select_query, (email,))
    result = fetchone(cursor)
    cursor.close()
    if result is not None:
        return User(email=result["email"], salt=result["salt"], password=result["password"])
    raise HTTPException(
        status_code=status.HTTP_400_BAD_REQUEST,
        detail="Incorrect email or password"
    )


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


def get_registry_by_user(user: User, conn: MySQLConnection = Depends(get_conn)) -> Optional[Registry]:
    """
    Returns the registry with the given id
    """

    cursor = conn.cursor()
    select_query = """
    SELECT * FROM registry 
    WHERE id=(SELECT id FROM user WHERE email=%(email)s AND password=%(password)s);
    """
    cursor.execute(
        select_query, {'email': user.email, 'password': user.password})
    print(cursor.statement)
    result = fetchone(cursor=cursor)
    print(result)
    if result:
        registry = Registry(**result)
        return registry
    return None


def get_contracts_by_user(user: User, conn: MySQLConnection = Depends(get_conn)) -> Optional[Registry]:
    """
    Returns the registry with the given id
    """

    cursor = conn.cursor()
    select_query = """
    SELECT contract_domicile_v.*, permissions.permission 
    FROM  contract_domicile_v 
    JOIN permissions
    ON permissions.idContract=contract_domicile_v.idContract 
    WHERE permissions.idRegistry IN (

        
            SELECT user_registry_v.id 
            FROM user_registry_v
            WHERE user_registry_v.email=%(email)s
            
        
        );
    """
    cursor.execute(
        select_query, {'email': user.email})
    result = fetchall(cursor=cursor)
    print(result)
    contracts = list()
    if result:
        for i in result:
            contracts.append(Contract(**i))
        return contracts
    return None


@app.post("/login")
async def login(user: User, conn: MySQLConnection = Depends(get_conn)):
    """
    Login endpoint for the user. 
    It receives a User object containing email and password.
    It returns a JSON response containing the access token and token type.
    """
    # Check if the user exists in the database
    db_user = get_user_by_email(conn=conn, email=user.email)
    if not db_user:
        # Raise an exception if the user is not found
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Incorrect email or password"
        )

    # Hash the password using the SHA2 function
    password = user.password.encode()
    cursor = conn.cursor()

    cursor.execute("SELECT SHA2(CONCAT(%s,CONCAT(%s,%s)),256);",
                   (user.email, get_salt_by_email(conn, user.email), password))
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
    access_token = create_access_token(
        {"sub": user.email}, datetime.timedelta(hours=5))  # 😑😑

    # Close the database connection
    conn.close()

    # Return the access token and token type
    return {"access_token": access_token, "token_type": "bearer"}


@app.post("/getUserData")
async def get_user_data(user: User, conn: MySQLConnection = Depends(get_conn)):

    cursor = conn.cursor()
    query = """SELECT * FROM registry WHERE id=(SELECT id FROM user WHERE email=%s AND password=SHA2(CONCAT(%s,CONCAT(salt,%s)), 256));"""

    cursor.execute(query, (user.email, user.email, user.password))
    return str(cursor.fetchall())


@app.post("/getUserDataToken")
async def get_user_dataT(token: Dict[str, str], conn: MySQLConnection = Depends(get_conn)) -> Registry:
    """
    Endpoint to get registry data for a user.
    Parameters:
    token (Dict[str,str]): A dictionary containing the access token.
    Returns:
    A Registry object containing the registry data for the user.
    Raises:
    HTTPException: If registry data is not found.
    """
    current_user: User = get_current_user(token=token.get("access_token"))

    # Get registry data for the user
    registry: Registry = get_registry_by_user(current_user, conn=conn)

    if not registry:
        raise HTTPException(status_code=500, detail="Registry data not found")

    # Return registry data
    return registry


@app.post("/getContractsUser")
async def get_user_dataT(token: Dict[str, str], conn: MySQLConnection = Depends(get_conn)) -> Registry:

    current_user: User = get_current_user(token=token.get("access_token"))

    # Get registry data for the user
    contracts: List[Contract] = get_contracts_by_user(current_user, conn=conn)

    if not contracts:
        raise HTTPException(status_code=500, detail="Registry data not found")

    # Return registry data
    return contracts


@app.post("/getContractUsage")
async def get_user_dataT(data: Dict[str, str], conn: MySQLConnection = Depends(get_conn)) -> Registry:

    current_user: User = get_current_user(token=data["token"])
    print(data["token"],data["idContract"])
    if not data["startTime"]:
        data["startTime"]=datetime.datetime.utcnow() - datetime.timedelta(month=1)
    if not data["endTime"]:
        data["endTime"]=datetime.datetime.utcnow() 
        
    # Get registry data for the user
    contracts: Usage=get_usage_by_contract(data["idContract"],"Electricity",data["startTime"],data["endTime"])

    if not contracts:
        raise HTTPException(status_code=500, detail="Registry data not found")

    # Return registry data
    return contracts


@app.post("/signup")
async def signup(user: User, registry: Registry, conn: MySQLConnection = Depends(get_conn)):
    # Check if email already exists in the database
    db_user = get_user_by_email(conn=conn, email=user.email)
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
