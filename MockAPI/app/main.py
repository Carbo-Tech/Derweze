from fastapi import FastAPI
from typing import List
import random

app = FastAPI()


@app.get("/")
def hello_world():
    return {"message": "mockapi"}

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
