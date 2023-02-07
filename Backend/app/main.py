from typing import Union
import mysql.connector
from mysql.connector import Error
import os
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()
conn=None
def connect():
    """ Connect to MySQL database """
    global conn
    try:
        conn = mysql.connector.connect(host='mysql',
                                       database=os.environ['DATABASE'],
                                       user=os.environ['USER_DB'],
                                       password=os.environ['PASSWORD_DB'])
        if conn.is_connected():
            print('Connected to MySQL database')
    except Error as e:
        print(e)


class User(BaseModel):
    email: str
    pww: str

class Registry(BaseModel):
    name: str
    surname: str


@app.get("/")
def read_root():
    return {"Hello": "World4"}


@app.post("/login/")
def login(user: User):
    global conn
    cursor = conn.cursor()
    query = """SELECT * FROM registry WHERE id=(SELECT id FROM user WHERE email=%s and password=SHA1(%s))"""

    
    cursor.execute(query)
    return str(cursor.fetchall())


    
    return user



connect()