import { Box, Flex } from "@chakra-ui/react";
import "chart.js/auto";
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { FaTrash } from 'react-icons/fa';
import LineSeparator from "../lineSeparator";
import { parseContractData, parseContractsCost } from "../functions";
import UsageChart from "../Charts/usageChart";
import Chart from "../Charts/chart";
import { Spacer, Text, Button, useModal, Modal } from "@nextui-org/react";
import { useState } from "react";

export default function Contract({ contractCost, contractUsage, unit, contractData, total, co2, topText, onDelete, deleteB }: any) {
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

    return (<>
        <LineSeparator text={`${contractData["address"]} ${contractData["civicNumber"]}`} />

        <Spacer y={1}></Spacer>
        <Flex direction="row" justifyContent="">
            <Flex direction="column" marginLeft="10%" justifyContent="space-between">
                <Box marginLeft="10%">
                    <Chart data={parseContractsCost(contractCost)} total={total} unit={unit} co2={co2} radius={120} thicknessP={20} text={topText} />

                </Box>
                <Spacer y={2}></Spacer>
                <Box marginLeft="10%">
                    <UsageChart data={parseContractData(contractUsage.records, unit, 50)} />
                </Box>

            </Flex>
            <Box marginLeft="15%" position="relative">
                {Object.entries(filteredData).map(([key, value]) => (
                    <Text key={key} marginBottom="1" color="white">
                        {key.replace(/_/g, " ")}: {value}
                    </Text>
                ))}
                {deleteB && (
                    <Box position="absolute" bottom="0">
                        <Button bordered onPress={() => setVisible(true)} color="error"  icon={<FaTrash />}>Delete</Button>
                    </Box>
                )}
            </Box>


            <Modal {...bindings} blur >
                <Modal.Header>Delete Contract</Modal.Header>
                <Modal.Body>
                    {textModal}
                </Modal.Body>
                <Modal.Footer>
                    <Button onPress={() => setVisible(false)} auto>
                        Cancel
                    </Button>
                    <Button onPress={() => { handleDelete() }} color="error" auto>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </Flex></>

    )
}
