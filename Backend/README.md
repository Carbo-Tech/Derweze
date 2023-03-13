# API

## Login

`/login/`

| **Input** | **Output** |
| :-------: | :--------: |
|   email   |  JWT  |
| password  |

## Signup

`/register/`

| **Input** | **Output** |
| :-------: | :--------: |
| registry  |  boolean   |
|   user    |


## Update JWT

`/updateJWT/`

| **Input** | **Output** |
| :-------: | :--------: |
| JWT  |  JWT (updated)   |
## Get User Data

`/getUserData/`

| **Input** | **Output** |
| :-------: | :--------: |
| JWT  |  registry   |

## Get user contracts

`/getUserContracts/`

| **Input** | **Output** |
| :-------: | :--------: |
| JWT  |  contracts IDs  |


## Get contracts details


`/getContractDetails/`

| **Input** | **Output** |
| :-------: | :--------: |
| JWT  |  contractDetails   |
| idContract  |     |



## Set user permission to contract

`/setContractPermission/`

| **Input** | **Output** |
| :-------: | :--------: |
| JWT (of the owner of the contract |  boolean   |
| phoneNumber/email (of the client that need permissions) |     |
| contract ID |     |
| permission (V/E) |     |



## Change User Data

`/changeUserData/`

| **Input** | **Output** |
| :-------: | :--------: |
| JWT  |  boolean   |
| currentEmail  |     |
| currentPassword  |     |
| updatedRegistry  |     |



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
#### note
`/getElectricityPlans/` will make a call to mockapi

## New contract electricity

`/newElectricityContract/`

| **Input** | **Output** |
| :-------: | :--------: |
| JWT  |  boolean   |
|  idPlan (get from getElectricityPlans) |     |
| currentPassword  |     |

#### note
`/newElectricityContract/` will make a call to mockapi

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
#### note
`/getUserElectricity/` will make a call to mockapi


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
#### note
`/getUserElectricityBill/` will make a call to mockapi






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
#### note
`/getGasPlans/` will make a call to mockapi

## New contract Electricity

`/newGasContract/`

| **Input** | **Output** |
| :-------: | :--------: |
| JWT  |  boolean   |
|  idPlan (get from getGasPlans) |     |
| currentPassword  |     |

#### note
`/newGasContract/` will make a call to mockapi

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
#### note
`/getUserGas/` will make a call to mockapi


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
#### note
`/getUserGasBill/` will make a call to mockapi


```



## Get all  bills

`/getUserGeneralBill/`

| **Input** | **Output** |
| :-------: | :--------: |
| JWT  |  bill   |
| month (YYYY/MM) ||

```
"generalBill":{
  "paid":int,
  "notPaid":int
 }
```
#### note
`/getUserGeneralBill/` will sum the bill from `getUserGasBill` and  `/getUserElectricityBill/` for every contract of the user
if the contract bill is paid off, its bill total will be added to paid. Otherwise it will be added to notPaid




