from typing import Dict
from fastapi import FastAPI, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from database import *
from auth import *

app = FastAPI()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")


@app.post("/login", response_model=Dict[str, str])
async def login(user: User) -> Dict[str, str]:
    """
    Login endpoint for the user.

    Parameters:
    user (User): A user object containing email and password.

    Returns:
    A dictionary containing the access token and token type.

    Raises:
    HTTPException: If the password is incorrect.
    """
    # Compare the hashed password with the one in the database
    if not validate_user(user):
        # Raise an exception if the password is incorrect
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Incorrect email or password"
        )

    # Create an access token for the user
    access_token = create_access_token({"sub": user.email})

    # Return the access token and token type as a dictionary
    return {"access_token": access_token, "token_type": "bearer"}


@app.post("/signup")
async def signup(user: User, registry: Registry):
    """
    Endpoint to create a new user and registry.

    Parameters:
    user (User): A user object containing email and password.
    registry (Registry): A registry object containing registry data for the user.

    Returns:
    A dictionary containing the access token for the new user.

    Raises:
    HTTPException: If a user with the same email already exists.
    """
    if get_user_by_email(user.email) is not None:
        raise HTTPException(
            status_code=400, detail="User with this email already exists")

    add_registry(registry)
    add_user(user)

    # Return access token for the new user
    access_token = create_access_token(user.email)
    return {"access_token": access_token}


@app.post("/updateJWT")
async def update_JWT(token: Dict[str, str]) ->  Dict[str, str]:
    """
    Endpoint to get an updated toker for a user.

    Parameters:
    token (Dict[str,str]): A dictionary containing the access token.

    Returns:
    A dictionary containing the updated access token.

    Raises:
    HTTPException: If registry data is not found.
    """
    current_user: User = get_current_user(token)

    






@app.post("/getUserData")
async def get_user_data(token: Dict[str, str]) -> Registry:
    """
    Endpoint to get registry data for a user.

    Parameters:
    token (Dict[str,str]): A dictionary containing the access token.

    Returns:
    A Registry object containing the registry data for the user.

    Raises:
    HTTPException: If registry data is not found.
    """
    current_user: User = get_current_user(token)

    # Get registry data for the user
    registry: Registry = get_registry_by_user(current_user)

    if not registry:
        raise HTTPException(status_code=500, detail="Registry data not found")

    # Return registry data
    return registry


@app.post("/getUserContracts")
async def get_user_contracts(token: Dict[str, str]) -> list[int]:
    """
    Endpoint per restituire l'elenco dei contratti associati ad un utente.

    Parameters:
    token (Dict[str, str]): Un dizionario contenente il token di accesso dell'utente.

    Returns:
    Un elenco di identificatori (int) dei contratti associati all'utente.

    Raises:
    HTTPException: se i dati del contratto non sono stati trovati.
    """
    # Estrae l'oggetto User corrispondente al token di accesso
    current_user: User = get_current_user(token)

    # Recupera l'elenco dei contratti associati all'utente corrente
    contracts: list[int] = get_contracts_by_user(current_user)

    # Se non sono stati trovati contratti, solleva un'eccezione
    if contracts is None:
        raise HTTPException(
            status_code=500, detail="Dati contratto non trovati")

    # Restituisce l'elenco di identificatori dei contratti
    return contracts
