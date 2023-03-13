# Mockapi

## Get possible electricity contracts (for new contracts)

`/getElectricityPlans/`

| **Input** | **Output** |
| :-------: | :--------: |
| JWT  |  list of contracts   |
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


## New contract electricity

`/newElectricityContract/`

| **Input** | **Output** |
| :-------: | :--------: |
| JWT  |  boolean   |
|  idPlan (get from getElectricityPlans) |     |
| currentPassword  |     |



## Get user electricity usage

`/getUserElectricity/`

| **Input** | **Output** |
| :-------: | :--------: |
| JWT  |  records of usage   |
|  idContract |   co2 emitted (kg)  |
|  startTime (in seconds, default 2628000 (one month, which means last month)) |     |
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
| JWT  |  bill   |
| idContract |  |
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
| JWT  |  list of plans   |
```
{
  "Plans":[
  {"id":int,"company": string (name of provider),"image":UrlOfTheImage,"basePrice":int,"pricePerMQ":int, "priceOscillation": int (in percentage), "estimatedCo2Emittions":int (in g per MQ),"estimatedGreenGas":int (percentage gas produced by green sources), "description": string (brief description of the plan)}
  ]
}
```

## New contract Electricity

`/newGasContract/`

| **Input** | **Output** |
| :-------: | :--------: |
| JWT  |  boolean   |
|  idPlan (get from getGasPlans) |     |
| currentPassword  |     |


## Get user gas usage

`/getUserGas/`

| **Input** | **Output** |
| :-------: | :--------: |
| JWT  |  records of usage   |
|  idContract |   co2 emitted (kg)  |
|  startTime (in seconds, default 2628000 (one month, which means last month records)) |     |
|  endTime (in seconds, default 0 (which means till now)) |     |


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
| JWT  |  bill   |
| idContract |  |
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
