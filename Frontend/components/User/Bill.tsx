import { Box, Flex } from "@chakra-ui/react";
import "chart.js/auto";
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { FaTrash } from 'react-icons/fa';
import LineSeparator from "../lineSeparator";
import { parseContractData, parseContractsCost } from "../functions";
import UsageChart from "../Charts/usageChart";
import Chart from "../Charts/chart";
import { Spacer, Text, Button, useModal, Modal } from "@nextui-org/react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from "react";

export default function Bill({ contractCost, contractUsage, unit, contractData, total, co2, topText, onDelete, deleteB }: any) {
    console.log("dataPassedtoContrac", contractData)
    const keysToExclude = ["idContract", "idDomicile", "utility"];
    const [textModal, setTextModal] = useState("Are you sure you want to delete this contract?")

    const filteredData = Object.keys(contractData)
        .filter((key) => !keysToExclude.includes(key))
        .reduce((obj, key) => {
            if (contractData[key] !== "" && contractData[key] !== null && contractData[key] !== undefined) {
                obj[key] = contractData[key];
            }
            return obj;
        }, {});

    const { setVisible, bindings } = useModal();

    const handleDelete = () => {
        setTextModal("The contract will be terminated")
        /*onDelete(contractData.idContract);*/

    }
console.log("contactcost",contractCost)
    return (<>
        <TableCell style={{ color: 'white' }}  align="right">{`${contractData["address"]} ${contractData["civicNumber"]}`}</TableCell>
        <TableCell style={{ color: 'white' }} align="right">{`${total} KWh`}</TableCell>
        <TableCell style={{ color: 'white' }} align="right">{contractCost["records"].reduce((acc, item) => acc + item.value, 0)}</TableCell>
        <TableCell style={{ color: 'white' }} align="right">{(new Date((new Date()).getTime()- (15 * 24 * 60 * 60 * 1000))).toDateString()}</TableCell>
        <TableCell style={{ color: 'white' }} align="right">Yes</TableCell>
    </>

    )
}
