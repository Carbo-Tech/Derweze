from typing import Union

from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


class User(BaseModel):
    email: str
    pww: str
    
class Registry(BaseModel):
    name: str
    surname: str
    


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/login/")
def login(user: User):
    
    
    
    
    return user 

@app.post("/login/")
def login(user: User):
    
    
    
    
    return user 