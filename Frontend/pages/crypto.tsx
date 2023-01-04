import React, { useEffect } from 'react';
import { faker } from '@faker-js/faker';
import { useState } from "react";
import Chart from "./chart"
import { Dropdown } from "@nextui-org/react";
import getIcon from './getIcon';


const App: React.FunctionComponent = () => {
    const [state, setState] = useState({ crypto: "bitcoin", data: [[]] })
    const [selected, setSelected] = useState(new Set(["bitcoin"]));
    const selectedValue = React.useMemo(
        () => Array.from(selected).join(", ").replaceAll("_", " "),
        [selected]
    );
    function getCoinsApi(cryptoI: string) {
        fetch("https://api.coingecko.com/api/v3/coins/" + cryptoI + "/market_chart?vs_currency=eur&days=1")
            .then(response => response.json())
            .then(res => setState({ crypto: cryptoI, data: res["prices"] }))
            .catch(err => console.log(err))

    };

    const setSelectedCrypto = (event: any) => {
        console.log(event)
        setSelected(event);
        getCoinsApi(Array.from(event).join(", ").replaceAll("_", " "))
    }
    useEffect(() => {
        getCoinsApi(state["crypto"]);
    }, [])
    console.log(state)

    return (
        <div>
            <div className="dropdown">
                <Dropdown >
                    <Dropdown.Button shadow>{selectedValue}</Dropdown.Button>
                    <Dropdown.Menu aria-label="Single selection actions"
                        color="secondary"
                        disallowEmptySelection
                        selectionMode="single"
                        selectedKeys={selected}
                        onSelectionChange={setSelectedCrypto}>
                        <Dropdown.Item key="bitcoin" icon={getIcon("bitcoin")}>bitcoin</Dropdown.Item>
                        <Dropdown.Item key="ethereum" icon={getIcon("ethereum")}>ethereum</Dropdown.Item>
                        <Dropdown.Item key="dogecoin" icon={getIcon("dogecoin")}>dogecoin</Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className='graph'>
            <Chart crypto={state["crypto"]} data={state["data"]}></Chart>
            </div>

        </div>)
}

export default App;