export const getContractsUser = async (jwt: string) => {
    const response = await fetch("/api/contracts/getContractsUser/", {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({ "access_token": jwt })
    });
    const data = await response.json();
    return data;
};

export const parseContractData = (data: Array<any>, unit: string, nElements: number = 100) => {
    var labels: string[] = [];
    var values: number[] = [];
    var total = 0;
    if (data != undefined) {
        data.map((record) => {
            labels.push(record["dateTime"]);
            values.push(total + record["value"]);
        });
        return {
            labels: getNElementsFromArray(labels, nElements),
            datasets: [
                {
                    label: unit,
                    data: getNElementsFromArray(values, nElements),
                    borderWidth: 1
                }
            ]
        };
    };
};

export const parseContractsCost = (data: Array<any>) => {
    var labels: string[] = [];
    var values: number[] = [];
    var total = 0;
    console.log("data", data)
    if (data["records"] != undefined) {
        data["records"].map((record) => {
            labels.push(record["name"]);
            values.push(total + record["value"]);
        });
        return {
            labels: labels,
            datasets: [
                {
                    label: "€",
                    data: values[0] != undefined ? values : [0],
                    borderWidth: 1,
                    backgroundColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(255, 206, 86, 1)'
                    ]

                }
            ]
        };
    };
};

export const getDataContracts = async (jwt: string, contracts: any) => {
    const dataContractsElectricity = [];
    const dataContractsElectricityCost = [];
    await Promise.all(Object.keys(contracts).map(async (key) => {
        if (contracts[key]["utility"] == "EE" || contracts[key]["utility"] == "EE/GAS") {
            const temp = await getContractUsage(jwt, contracts[key]["idContract"], "Electricity");
            dataContractsElectricity.push(temp)
            dataContractsElectricityCost.push({ ...(await getContractProjectedPrice(jwt, contracts[key]["idContract"])), "total": temp["total"] });
        };
    }));
    const dataContractsGas = [];
    const dataContractsGasCost = [];
    await Promise.all(Object.keys(contracts).map(async (key) => {
        if (contracts[key]["utility"] == "GAS" || contracts[key]["utility"] == "EE/GAS") {
            const temp = await getContractUsage(jwt, contracts[key]["idContract"], "Gas")
            dataContractsGas.push(temp);
            dataContractsGasCost.push({ ...(await getContractProjectedPrice(jwt, contracts[key]["idContract"])), "total": temp["total"] });
        };
    }));
    const data = {
        "Electricity": dataContractsElectricity,
        "Gas": dataContractsGas,
        "ElectricityCost": dataContractsElectricityCost,
        "GasCost": dataContractsGasCost
    };
    return data;
};

export const getInfoContract = async (jwt: string, idContract: string) => {
    const response = await fetch("/api/contracts/getInfoContract", {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({ "access_token": jwt, "idContract": idContract })
    });
    const data = await response.json();
    return data;
};


export const mergeContracts = (contracts: Array<any>) => {
    const merged = contracts.reduce(
        (result, contract) => {
            // Sum co2 and total
            result.co2 += contract.co2;
            result.total += contract.total;

            // Merge records by dateTime and sum values
            contract.records.forEach((record) => {
                const existingRecord = result.records.find((r) => r.dateTime === record.dateTime);
                if (existingRecord) {
                    existingRecord.value += record.value;
                } else {
                    result.records.push({ dateTime: record.dateTime, value: record.value });
                }
            });

            return result;
        },
        { co2: 0, records: [], total: 0 }
    );

    return merged
};

export const singleContractCost = (contract: any) => {
    const merged = contract.records.reduce((acc, record) => {
        acc.records.push({
            name: record.name,
            value: Math.floor((record.value / 100) * contract.total)
        });
        return acc;
    }, { records: [] });

    return merged;
};


export const contractsCost = (contracts: Array<any>) => {
    const merged = contracts.reduce((acc, curr) => {
        curr.records.forEach((record, index) => {
            if (acc.records[index]) {
                acc.records[index].value += Math.floor(((record.value / 100) * curr.total));
            } else {
                acc.records.push({
                    name: record.name,
                    value: Math.floor((record.value / 100) * curr.total)
                });
            }
        });
        return acc;
    }, { records: [] });


    return merged
};

export const getNElementsFromArray = (array: Array<any>, n: number) => {
    const step = Math.floor(array.length / n);
    const result = [];
    for (let i = 0; i < array.length && result.length < n; i += step) {
        result.push(array[i]);
    };
    return result;
};



export const getContractUsage = async (jwt: string, idContract: string, utility: string) => {
    const response = await fetch("/api/contracts/getContractUsage", {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({ "access_token": jwt, "idContract": idContract, "utility": utility })
    });
    const data = await response.json();
    return data;
};



export const getContractProjectedPrice = async (jwt: string, idContract: string) => {
    const response = await fetch("/api/contracts/getContractProjectedPrice", {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({ "access_token": jwt, "idContract": idContract })
    });
    const data = await response.json();
    return data;
};
