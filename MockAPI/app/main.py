from fastapi import FastAPI
from typing import List,Dict,Any
import random

app = FastAPI()


@app.get("/")
def hello_world():
    return {"message": "mockapi"}

################################################################################################################################

@app.get("/getElectricityPlans")
def get_plans(address: str) -> List[dict]:
    random.seed(address)
    plans = [
        {
            "id": 1,
            "company": "Green Energy Co.",
            "image": "https://example.com/green-energy.jpg",
            "basePrice": round(random.gauss(100, 100), 2),
            "pricePerKW": round(random.gauss(10, 5), 2),
            "priceOscillation": round(random.gauss(5, 5), 2),
            "estimatedCo2Emittions": round(random.gauss(100, 100), 2),
            "estimatedGreenEnergy": round(random.gauss(25, 10), 2),
            "description": "Our standard green energy plan"
        },
        {
            "id": 2,
            "company": "Cheap Energy Co.",
            "image": "https://example.com/cheap-energy.jpg",
            "basePrice": round(random.gauss(100, 100), 2),
            "pricePerKW": round(random.gauss(10, 5), 2),
            "priceOscillation": round(random.gauss(5, 5), 2),
            "estimatedCo2Emittions": round(random.gauss(100, 100), 2),
            "estimatedGreenEnergy": round(random.gauss(25, 10), 2),
            "description": "Our cheapest plan"
        },
        {
            "id": 3,
            "company": "Eco-Friendly Power",
            "image": "https://example.com/eco-friendly-power.jpg",
            "basePrice": round(random.gauss(100, 100), 2),
            "pricePerKW": round(random.gauss(10, 5), 2),
            "priceOscillation": round(random.gauss(5, 5), 2),
            "estimatedCo2Emittions": round(random.gauss(100, 100), 2),
            "estimatedGreenEnergy": round(random.gauss(25, 10), 2),
            "description": "Our eco-friendly power plan"
        }
    ]
    return {"plans": plans}

################################################################################################################################

@app.get("/getUserElectricity")
def get_user_electricity(idContract: int, startTime: int, endTime: int) -> Dict[str, Dict[str, List[Dict[str, int]]]]:
    # Here, we would query a database or API to get the electricity usage data for the specified contract and time range
    # For the sake of this example, we will hard-code some sample data
    electricity_usage = {
        "co2": 20, # in g/kWh
        "records": [
            {"dateTime": "01/01/00/00", "value": 100},
            {"dateTime": "01/01/00/15", "value": 110},
            {"dateTime": "01/01/00/30", "value": 105},
            {"dateTime": "01/01/00/45", "value": 95},
            {"dateTime": "01/01/01/00", "value": 90},
            {"dateTime": "01/01/01/15", "value": 85},
            {"dateTime": "01/01/01/30", "value": 80},
            {"dateTime": "01/01/01/45", "value": 75}
        ]
    }
    return {"electricityUsage": electricity_usage}

################################################################################################################################

# Simulated database of user electricity bills
user_bills = {
    1: {
        "2022/01": {
            "total": 100,
            "paid": False,
            "itemized": [
                {"description": "Electricity", "value": 80},
                {"description": "Transport", "value": 20}
            ]
        },
        "2021/12": {
            "total": 90,
            "paid": True,
            "itemized": [
                {"description": "Electricity", "value": 70},
                {"description": "Transport", "value": 20}
            ]
        }
    },
    2: {
        "2022/01": {
            "total": 150,
            "paid": False,
            "itemized": [
                {"description": "Electricity", "value": 120},
                {"description": "Transport", "value": 30}
            ]
        },
        "2021/12": {
            "total": 120,
            "paid": True,
            "itemized": [
                {"description": "Electricity", "value": 100},
                {"description": "Transport", "value": 20}
            ]
        }
    }
}

@app.get("/getUserElectricityBill")
def get_user_electricity_bill(idContract: int, date: str) -> Dict[str, Any]:
    if idContract not in user_bills:
        return {"message": "User not found"}
    if date not in user_bills[idContract]:
        return {"message": "Electricity bill not found"}
    return {"electricityBill": user_bills[idContract][date]}

################################################################################################################################

@app.get("/getGasPlans")
async def get_gas_plans(address: str, type: str):
    # TODO: Implement logic to get gas plans based on the address and type provided
    plans = [
        {
            "id": 1,
            "company": "Eco-Gas",
            "image": "https://example.com/eco-gas.jpg",
            "basePrice": 60,
            "pricePerMQ": 0.8,
            "priceOscillation": 5,
            "estimatedCo2Emittions": 200,
            "estimatedGreenGas": 30,
            "description": "Our eco-friendly gas plan"
        },
        {
            "id": 2,
            "company": "Budget Gas",
            "image": "https://example.com/budget-gas.jpg",
            "basePrice": 50,
            "pricePerMQ": 0.5,
            "priceOscillation": 10,
            "estimatedCo2Emittions": 250,
            "estimatedGreenGas": 10,
            "description": "Our low-cost gas plan"
        },
        {
            "id": 3,
            "company": "Renewable Gas Co.",
            "image": "https://example.com/renewable-gas.jpg",
            "basePrice": 80,
            "pricePerMQ": 1.0,
            "priceOscillation": 3,
            "estimatedCo2Emittions": 100,
            "estimatedGreenGas": 80,
            "description": "Our renewable gas plan"
        }
    ]
    return {"Plans": plans}

################################################################################################################################

@app.get("/getUserGas")
async def get_user_gas(idContract: int, startTime: int, endTime: int):
    # In a real-world scenario, you would query a database or API to get the gas usage data
    gas_usage = {
        "id": idContract,
        "co2": 200,  # total CO2 emissions
        "records": [
            {"dateTime": "05/01/12:30", "value": 100},
            {"dateTime": "05/01/13:30", "value": 150},
            {"dateTime": "05/01/14:30", "value": 120},
            {"dateTime": "05/01/15:30", "value": 90},
            {"dateTime": "05/01/16:30", "value": 80},
            {"dateTime": "05/01/17:30", "value": 110}
        ]
    }
    return {"gasUsage": gas_usage}

################################################################################################################################

# Simulated database of user gas bills
user_bills = {
    1: {
        "2022/01": {
            "total": 50,
            "paid": False,
            "itemized": [
                {"description": "Gas", "value": 40},
                {"description": "Transport", "value": 10}
            ]
        },
        "2021/12": {
            "total": 45,
            "paid": True,
            "itemized": [
                {"description": "Gas", "value": 35},
                {"description": "Transport", "value": 10}
            ]
        }
    },
    2: {
        "2022/01": {
            "total": 75,
            "paid": False,
            "itemized": [
                {"description": "Gas", "value": 60},
                {"description": "Transport", "value": 15}
            ]
        },
        "2021/12": {
            "total": 60,
            "paid": True,
            "itemized": [
                {"description": "Gas", "value": 50},
                {"description": "Transport", "value": 10}
            ]
        }
    }
}

@app.get("/getUserGasBill")
def get_user_gas_bill(idContract: int, date: str) -> Dict[str, Any]:
    if idContract not in user_bills:
        return {"message": "User not found"}
    if date not in user_bills[idContract]:
        return {"message": "Gas bill not found"}
    return {"gasBill": user_bills[idContract][date]}

################################################################################################################################

# Simulated database of user electricity usage
user_electricity = {
    1: {
        "2022/01": [
            {"dateTime": "01/01/00/00", "value": 100},
            {"dateTime": "01/01/01/00", "value": 120},
            {"dateTime": "01/01/02/00", "value": 110},
            {"dateTime": "01/01/03/00", "value": 90},
            {"dateTime": "01/01/04/00", "value": 80},
        ],
        "2021/12": [
            {"dateTime": "12/01/00/00", "value": 90},
            {"dateTime": "12/01/01/00", "value": 100},
            {"dateTime": "12/01/02/00", "value": 95},
            {"dateTime": "12/01/03/00", "value": 85},
            {"dateTime": "12/01/04/00", "value": 75},
        ]
    },
    2: {
        "2022/01": [
            {"dateTime": "01/01/00/00", "value": 120},
            {"dateTime": "01/01/01/00", "value": 130},
            {"dateTime": "01/01/02/00", "value": 140},
            {"dateTime": "01/01/03/00", "value": 115},
            {"dateTime": "01/01/04/00", "value": 105},
        ],
        "2021/12": [
            {"dateTime": "12/01/00/00", "value": 100},
            {"dateTime": "12/01/01/00", "value": 110},
            {"dateTime": "12/01/02/00", "value": 105},
            {"dateTime": "12/01/03/00", "value": 95},
            {"dateTime": "12/01/04/00", "value": 85},
        ]
    }
}

@app.get("/getUserElectricity")
def get_user_electricity(idContract: int, startTime: str, endTime: str) -> Dict[str, Any]:
    if idContract not in user_electricity:
        return {"message": "User not found"}
    records = []
    for bill in user_electricity[idContract]:
        if bill >= startTime and bill <= endTime:
            records += user_electricity[idContract][bill]
    if not records:
        return {"message": "No electricity usage found"}
    total_usage = sum(record["value"] for record in records)
    co2_emissions = total_usage * 400  # 400g of CO2 per kWh
    return {"ElectricityUsage": {
        "co2": co2_emissions,
        "records": records
    }}