import { Flex, Box, Text } from '@chakra-ui/react';
import "chart.js/auto";
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/footer';
import Chart from '../../components/Charts/chart';
import Content from '../../components/pageContent';
import { Button, Spacer } from '@nextui-org/react';
import { useState, useEffect } from 'react';
import UsageChart from '../../components/Charts/usageChart';
import { borderRadius } from '@mui/system';
import { signOut, useSession } from 'next-auth/react';
import ContractCharts from '../../components/Charts/ContractChart';
import LineSeparator from '../../components/lineSeparator';
import { getContractsUser, singleContractCost } from "../../components/functions"
import { parseContractData } from "../../components/functions"
import { parseContractsCost } from "../../components/functions"
import { getDataContracts } from "../../components/functions"
import { mergeContracts } from "../../components/functions"
import { getInfoContract } from '../../components/functions';
import Contract from '../../components/User/Contract';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Bill from '../../components/User/Bill';
import HashLoader from "react-spinners/HashLoader";



export default function Bills() {
    const session = useSession();
    const [contracts, setContracts] = useState({});
    const [contractsElectricityCost, setContractsElectricityCost] = useState([{ idContract: 0, "total": 0, "unit": "KWh", "records": [{ "name": "", "value": 0 }] }]);
    const [contractsGasCost, setContractsGasCost] = useState([{ idContract: 0, "total": 0, "unit": "Smc", "records": [{ "name": "", "value": 0 }] }]);
    const [contractsGasUsage, setContractsGasUsage] = useState([{ idContract: 0, total: 0, records: [{ dateTime: "", value: 0 }] }]);
    const [contractsElectricityUsage, setContractsElectricityUsage] = useState([{ idContract: 0, total: 0, records: [{ dateTime: "", value: 0 }] }]);
    const [contractsInfoElectricity, setContractsInfoElectricity] = useState([{ idContract: 0, address: "" }]);
    const [contractsInfoGas, setContractsInfoGas] = useState([{ idContract: 0, address: "" }]);

    const [view, setView] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            if (session.status == "authenticated") {
                const jwt = session.data?.user["access_token"];
                const data = await getContractsUser(jwt);
                setContracts(data);
            };
        };
        fetchData();
    }, [session]);

    useEffect(() => {
        const fetchData = async () => {
            if (session.status == "authenticated") {
                const jwt = session.data?.user["access_token"];
                const data = await getDataContracts(jwt, contracts);
                const contractsInfoElectricityF = await Promise.all(data.Electricity.map(async (contract) => {
                    return await getInfoContract(jwt, contract["idContract"]);
                }));
                setContractsInfoElectricity(contractsInfoElectricityF)
                const contractsInfoGasF = await Promise.all(data.Gas.map(async (contract) => {
                    return await getInfoContract(jwt, contract["idContract"]);
                }));
                setContractsInfoGas(contractsInfoGasF)
                setContractsElectricityCost(data["ElectricityCost"])
                setContractsGasCost(data["GasCost"])
                setContractsElectricityUsage(data["Electricity"])
                setContractsGasUsage(data["Gas"])



            };
        };
        fetchData();
    }, [contracts]);
    return (
        <>
            <Header activeItemId="/user/bills" />
            <Content>
                <TableContainer>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ color: 'white' }} align="right">Address</TableCell>
                                <TableCell style={{ color: 'white' }} align="right">Used Electricity</TableCell>
                                <TableCell style={{ color: 'white' }} align="right">Cost</TableCell>
                                <TableCell style={{ color: 'white' }} align="right">Date</TableCell>
                                <TableCell style={{ color: 'white' }} align="right">Paid</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {contractsInfoElectricity
                                .sort()
                                .map((contract) => {
                                    if (contract !== undefined && contract.idContract !== 0) {
                                        console.log(
                                            contractsElectricityUsage,
                                            contract
                                        );
                                        const contractCost = contractsElectricityCost.find(
                                            (item) => item.idContract === contract.idContract
                                        );
                                        const contractUsage = contractsElectricityUsage.find(
                                            (item) => item.idContract === contract.idContract
                                        );

                                        if (
                                            contractCost !== undefined &&
                                            contractUsage !== undefined
                                        ) {
                                            return (
                                                <TableRow key={contract.idContract}>
                                                    <Bill
                                                        contractCost={singleContractCost(contractCost)}
                                                        contractUsage={contractUsage}
                                                        contractData={contract}
                                                        unit={"KWh"}
                                                        total={contractUsage?.total}
                                                        topText={"Electricity"}
                                                        co2={contractUsage?.co2}

                                                    />
                                                </TableRow>
                                            );
                                        } else {
                                            return (
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                        height: "100vh",
                                                    }}
                                                >
                                                    <HashLoader color="#FFFFFF" />
                                                </div>
                                            );
                                        }
                                    }
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Spacer y={5}></Spacer>
                <TableContainer>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ color: 'white' }} align="right">Address</TableCell>
                                <TableCell style={{ color: 'white' }} align="right">Used Electricity</TableCell>
                                <TableCell style={{ color: 'white' }} align="right">Cost</TableCell>
                                <TableCell style={{ color: 'white' }} align="right">Date</TableCell>
                                <TableCell style={{ color: 'white' }} align="right">Paid</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {contractsInfoGas
                                .sort()
                                .map((contract) => {
                                    if (contract !== undefined && contract.idContract !== 0) {

                                        const contractCost = contractsGasCost.find(
                                            (item) => item.idContract === contract.idContract
                                        );
                                        const contractUsage = contractsGasUsage.find(
                                            (item) => item.idContract === contract.idContract
                                        );

                                        if (
                                            contractCost !== undefined &&
                                            contractUsage !== undefined
                                        ) {
                                            return (
                                                <TableRow key={contract.idContract}>
                                                    <Bill
                                                        contractCost={singleContractCost(contractCost)}
                                                        contractUsage={contractUsage}
                                                        contractData={contract}
                                                        unit={"KWh"}
                                                        total={contractUsage?.total}
                                                        topText={"Electricity"}
                                                        co2={contractUsage?.co2}

                                                    />
                                                </TableRow>
                                            );
                                        } else {
                                            return (
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                        height: "100vh",
                                                    }}
                                                >
                                                    <HashLoader color="#FFFFFF" />
                                                </div>
                                            );
                                        }
                                    }
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Content>
            <Footer />
        </>)

};