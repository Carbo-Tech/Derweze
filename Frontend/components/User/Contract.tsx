import { Box, Flex } from "@chakra-ui/react";
import "chart.js/auto";
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import LineSeparator from "../lineSeparator";
import { parseContractData, parseContractsCost } from "../functions";
import UsageChart from "../Charts/usageChart";
import Chart from "../Charts/chart";
import { Spacer, Text } from "@nextui-org/react";

export default function Contract({ contractCost, contractUsage, unit, contractData, total,topText }: any) {
    console.log("dataPassedtoContrac",contractData)
    const keysToExclude = ["idContract", "idDomicile", "utility"];


    const filteredData = Object.keys(contractData)
        .filter((key) => !keysToExclude.includes(key))
        .reduce((obj, key) => {
            if (contractData[key] !== "" && contractData[key] !== null && contractData[key] !== undefined) {
                obj[key] = contractData[key];
            }
            return obj;
        }, {});


    return (<>
        <LineSeparator text={`${contractData["address"]} ${contractData["civicNumber"]}`} />

        <Spacer y={1}></Spacer>
        <Flex direction="row" justifyContent="">
            <Flex direction="column" marginLeft="10%" justifyContent="space-between">
                <Box marginLeft="10%">
                    <Chart data={parseContractsCost(contractCost)} total={total} unit={unit} radius={120} thicknessP={20} text={topText} />

                </Box>
                <Spacer y={1}></Spacer>
                <Box marginLeft="10%">
                    <UsageChart data={parseContractData(contractUsage.records, unit, 50)} />
                </Box>

            </Flex>
            <Box marginLeft="15%">
                {Object.entries(filteredData).map(([key, value]) => (
                    <Text key={key} marginBottom="1" color="white">
                        {key.replace(/_/g, " ")}: {value}
                    </Text>
                ))}
            </Box>

        </Flex></>

    )
}

