from datetime import datetime, timedelta

from fastapi import FastAPI
from typing import List, Dict, Any
import random

app = FastAPI()


def gaussian_random(seed, median, standardDeviation=None):
    if not standardDeviation:
        standardDeviation = median/3
    random.seed(seed)
    mu, sigma = median, standardDeviation
    ret = -1
    while ret <= 0:
        ret = random.gauss(mu, sigma)
    return ret


def get_datetimes(start_time, end_time, minutes_interval):
    """Return a list of every datetime between start_time and end_time
    every minutes_interval minutes, normalized to X:00 or X:30 minutes.

    start_time: Unix time in seconds of the start datetime.
    end_time: Unix time in seconds of the end datetime.
    minutes_interval: Interval in minutes between datetimes.

    Returns: List of datetime objects.
    """
    datetimes = []
    current_time = datetime.utcfromtimestamp(start_time)
    while current_time.timestamp() < end_time:
        current_minute = current_time.minute
        if current_minute % minutes_interval != 0:
            current_time -= timedelta(minutes=current_minute %
                                      minutes_interval)
        if current_time.second != 0:
            current_time -= timedelta(seconds=current_time.second)
        datetimes.append(current_time)
        current_time += timedelta(minutes=minutes_interval)
        current_time = current_time.replace(second=0, microsecond=0)
    return datetimes


def get_Records(idContract: int, startTime: datetime, endTime: datetime, medianValue: float, medianCo2: float, standardDeviationCo2=None, minutesSteps: int = 30):
    times = get_datetimes(startTime.timestamp(),
                          endTime.timestamp(), minutesSteps)
    records = []
    for i in times:
        records.append({"dateTime": i, "value": gaussian_random(
            str(i.timestamp())+str(idContract), medianValue)})  # average m3 natural gas usage per family
    print(len(records))
    # 1800 average emissions in grams
    co2Val = gaussian_random(str(idContract), medianCo2, standardDeviationCo2)
    total=sum(record["value"] for record in records)
    return {
        "id": idContract,
        "co2": int(total*co2Val),
        "total":int(total),
        "records": records
    }


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
def get_user_electricity(idContract: int, startTime: datetime, endTime: datetime) -> Dict[str, Dict[str, List[Dict[str, int]]]]:
    # Here, we would query a database or API to get the electricity usage data for the specified contract and time range
    # For the sake of this example, we will hard-code some sample data

    electricity_usage = get_Records(
        idContract=idContract, startTime=startTime, endTime=endTime, medianValue=0.1541095890, medianCo2=650)
    return {"electricityUsage": electricity_usage}

################################################################################################################################


# Simulated database of user electricity bills
user_billsE = {
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
    if idContract not in user_billsE:
        return {"message": "User not found"}
    if date not in user_billsE[idContract]:
        return {"message": "Electricity bill not found"}
    return {"electricityBill": user_billsE[idContract][date]}

################################################################################################################################


@app.get("/getGasPlans")
async def get_gas_plans(address: str, type: str):
    # TODO: Implement logic to get gas plans based on the address and type provided
    plans = [
        {
            "id": 1,
            "company": "Eco-Gas",
            "image": "https://combustiblesecogas.com/wp-content/uploads/2020/09/logo-ecogas.png",
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
            "image": "https://cdn.autoconnectedcar.com/wp-content/uploads/2017/08/GB-Blue-Horizontal-RGB.png",
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
async def get_user_gas(idContract: int, startTime: datetime, endTime: datetime):
    # In a real-world scenario, you would query a database or API to get the gas usage data

    gas_usage = get_Records(idContract, startTime=startTime, endTime=endTime,
                            medianValue=0.073, medianCo2=1800, standardDeviationCo2=200)
    return {"gasUsage": gas_usage}

################################################################################################################################

# Simulated database of user gas bills
user_billsG = {
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
    if idContract not in user_billsG:
        return {"message": "User not found"}
    if date not in user_billsG[idContract]:
        return {"message": "Gas bill not found"}
    return {"gasBill": user_billsG[idContract][date]}

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
