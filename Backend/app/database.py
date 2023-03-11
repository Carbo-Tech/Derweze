from typing import Optional
import mysql.connector
from mysql.connector.connection import MySQLConnection
from pydantic import BaseModel
import hashlib


class Database:
    def __init__(self) -> None:
        self.conn = mysql.connector.connect(
            host='mysql',
            user='root',
            password='passwordsicura',
            database='derweze'
        )

    def __enter__(self) -> MySQLConnection:
        return self.conn

    def __exit__(self, exc_type, exc_val, exc_tb) -> None:
        self.conn.commit()
        self.conn.close()


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
    name: Optional[str] = None
    surname: Optional[str] = None
    business_name: str
    vat_number: Optional[str] = None
    telephone_number: Optional[str] = None
    social_security_number: Optional[str] = None
    is_admin: int = 0
    address: str
    civic_number: int
    cap: str
    city: str
    province: str
    nation: str


def add_user(user: User) -> None:
    """
    Adds a user to the database
    """
    with Database() as db:
        cursor = db.cursor()
        insert_query = 'INSERT INTO user (id, email, password) VALUES (LAST_INSERT_ID(), %(email)s, SHA2(CONCAT(%(email)s,%(password)s) 256))'
        values = {'email': user.email, 'password': user.password}
        cursor.execute(insert_query, values)


def add_registry(registry: Registry) -> None:
    """
    Adds a registry to the database.
    """
    with Database() as db:
        cursor = db.cursor()
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
        VALUES (%(name)s, %(surname)s, %(business_name)s, %(vat_number)s, %(telephone_number)s, %(social_security_number)s, %(is_admin)s, %(address)s, %(civic_number)s, %(cap)s, %(city)s, %(province)s, %(nation)s)
        '''
        values = {
            'name': registry.name,
            'surname': registry.surname,
            'business_name': registry.business_name,
            'vat_number': registry.vat_number,
            'telephone_number': registry.telephone_number,
            'social_security_number': registry.social_security_number,
            'is_admin': registry.is_admin,
            'address': registry.address,
            'civic_number': registry.civic_number,
            'cap': registry.cap,
            'city': registry.city,
            'province': registry.province,
            'nation': registry.nation
        }
        cursor.execute(insert_query, values)


def validate_user(user: User) -> bool:
    """
    Validates the user's credentials by comparing the hashed password
    stored in the database with the password entered by the user.
    """
    # Create a database connection
    with Database() as db:
        cursor = db.cursor()

        # Define the SELECT query
        select_query = "SELECT SHA2(CONCAT(%(email)s,%(password)s),256) as password FROM users WHERE email=%(email)s"

        # Execute the query with the user's email and password
        cursor.execute(
            select_query, {'email': user.email, 'password': user.password})

        # Fetch the password hash from the result
        result = cursor.fetchone()

    # Compare the password hash with the one entered by the user
    if result is not None and result['password'] == user.password:
        return True
    else:
        return False


def get_user_by_email(email: str) -> Optional[User]:
    """
    Returns the user with the given email address
    """
    with Database() as db:
        cursor = db.cursor()
        select_query = 'SELECT * FROM user WHERE email = %(email)s'
        cursor.execute(select_query, {'email': email})
        result = cursor.fetchone()
        if result is not None:
            return User(email=result[1], password=result[2])
        else:
            return None


def get_registry_by_user(user: User) -> Optional[Registry]:
    """
    Returns the registry with the given id
    """
    with Database() as db:
        cursor = db.cursor()
        select_query = """
        SELECT * FROM registry 
        WHERE id=(SELECT id FROM user WHERE email=%(email)s and password=SHA2(CONCAT(%(email)s,%(password)s), 256))
        """
        cursor.execute(
            select_query, {'email': user.email, 'password': user.password})
        result = cursor.fetchone()
        if result:
            registry = Registry(**result)
            return registry
        return None
