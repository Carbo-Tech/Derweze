# Mockapi

## Get possible electricity contracts (for new contracts)

`/getElectricityPlans/`

| **Input** | **Output** |
| :-------: | :--------: |
| address  |  list of contracts   |
| type (home/business)  |     |

```
{
  "plans":[
    {
      "id":int,
      "company": string (name of provider),
      "image":UrlOfTheImage,
      "basePrice":int,
      "pricePerKW":int, 
      "priceOscillation": int (in percentage), 
      "estimatedCo2Emittions":int (in g per kw),
      "estimatedGreenEnergy":int (percentage electricity produced by green energy), 
      "description": string (brief description of the plan)}
  ]
}
```

### note
the id of the contract will be generated using address as seed and it will be used as seed to generate all the values in the following API calls


## Get user electricity usage

`/getUserElectricity/`

| **Input** | **Output** |
| :-------: | :--------: |
|  idContract |   co2 emitted (kg)  |
|  startTime (in seconds, default 2628000 (one month, which means last month)) | records of usage   |
|  endTime (in seconds, default 0 (which means till now)) |     |


```
"electricityUsage":{
  "co2": int,
  "records":[
      {"dateTime": string (MM/dd/hh/mm), "value": int (watts)},
      {"dateTime": string (MM/dd/hh/mm), "value": int (watts)}
   ]

}
```



## Get user electricity bill 

`/getUserElectricityBill/`

| **Input** | **Output** |
| :-------: | :--------: |
| idContract  |  bill   |
| month (YYYY/MM) ||

```
"electricityBill":{
  "total":int,
  "paid": boolean,
  "itemized":[
      {"description": string (like "electricity"), "value": int (cost)},
      {"description": string (like "cost of transport"), "value": int (cost)}
    ]
}
```



## Get possible gas contracts (for new contracts)

`/getGasPlans/`

| **Input** | **Output** |
| :-------: | :--------: |
| address  |  list of plans   |
| type (home/business) |     |

```
{
  "Plans":[
  {"id":int,"company": string (name of provider),"image":UrlOfTheImage,"basePrice":int,"pricePerMQ":int, "priceOscillation": int (in percentage), "estimatedCo2Emittions":int (in g per MQ),"estimatedGreenGas":int (percentage gas produced by green sources), "description": string (brief description of the plan)}
  ]
}
```



## Get user gas usage

`/getUserGas/`

| **Input** | **Output** |
| :-------: | :--------: |
|  idContract|  records of usage   |
|  startTime (in seconds, default 2628000 (one month, which means last month records))|   co2 emitted (kg)  |
|  endTime (in seconds, default 0 (which means till now)) |     |
|    |     |


```
"gasUsage":{
  "co2": int,
  "records":[
      {"dateTime": string (MM/dd/hh/mm), "value": int (MQ)},
      {"dateTime": string (MM/dd/hh/mm), "value": int (MQ)}
   ]

}
```



## Get user gas bill 

`/getUserGasBill/`

| **Input** | **Output** |
| :-------: | :--------: |
| idContract | bill |
| month (YYYY/MM) ||

```
"gasBill":{
  "total":int,
  "paid": boolean,
  "itemized":[
      {"description": string (like "gas"), "value": int (cost)},
      {"description": string (like "cost of transport"), "value": int (cost)}
    ]
}
```

```
"electricityUsage":{
  "co2": int,
  "records":[
      {"dateTime": string (MM/dd/hh/mm), "value": int (MQ)},
      {"dateTime": string (MM/dd/hh/mm), "value": int (MQ)}
   ]

}
```
