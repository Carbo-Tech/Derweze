import { Flex, Box, Text } from '@chakra-ui/react';
import "chart.js/auto";
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/footer';
import Chart from '../../components/Charts/chart';
import Content from '../../components/pageContent';
import { Spacer } from '@nextui-org/react';
import { useState, useEffect } from 'react';
import UsageChart from '../../components/Charts/usageChart';
import { borderRadius } from '@mui/system';
import { signOut, useSession } from 'next-auth/react';
import ContractCharts from '../../components/Charts/ContractChart';
import LineSeparator from '../../components/lineSeparator';
import {getContractsUser} from "../../components/functions"
import {parseContractData} from "../../components/functions"
import {parseContractsCost} from "../../components/functions"
import {getDataContracts} from "../../components/functions"
import {mergeContracts} from "../../components/functions"
import {contractsCost} from "../../components/functions"



export default function Dashboard() {
  const session = useSession();
  const [contracts, setContracts] = useState({});
  const [contractsElectricityCost, setContractsElectricityCost] = useState({ "total": 0, "unit": "KWh", "records": [{ "name": "", "value": 0 }] });
  const [contractsGasCost, setContractsGasCost] = useState({ "total": 0, "unit": "Smc", "records": [{ "name": "", "value": 0 }] });
  const [contractsTotalGasUsage, setContractsTotalGasUsage] = useState({ total: 0, records: [{ dateTime: "", value: 0 }] });
  const [contractsTotalElectricityUsage, setContractsTotalElectricityUsage] = useState({ total: 0, records: [{ dateTime: "", value: 0 }] });

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
        console.log("contrcost", mergeContracts(data["Electricity"]))
        setContractsElectricityCost(contractsCost(data["ElectricityCost"]))
        setContractsGasCost(contractsCost(data["GasCost"]))
        setContractsTotalElectricityUsage(mergeContracts(data["Electricity"]));
        setContractsTotalGasUsage(mergeContracts(data["Gas"]));

      };
    };
    fetchData();
  }, [contracts]);

  return (
    <>
      <Header />
      <Content>
        <LineSeparator text="Last month data" />
        <Flex direction="row" justifyContent="space-between">
          <Flex direction="column" marginLeft="10%" justifyContent="space-between">
            <Box marginLeft="10%">
              <Chart data={parseContractsCost(contractsElectricityCost)} total={contractsTotalElectricityUsage.total} unit="KWh" radius={120} thicknessP={20} text="Electricity" />

            </Box>
            <Spacer y={1}></Spacer>

            <Box marginLeft="10%">
              <UsageChart data={parseContractData(contractsTotalElectricityUsage.records, "KWh", 50)} />
            </Box>

          </Flex>
          <Flex direction="column" marginRight="10%" justifyContent="space-between">
            <Box marginRight="10%">
              <Chart data={parseContractsCost(contractsGasCost)} total={contractsTotalGasUsage.total} unit="SMC" radius={120} thicknessP={20} text="Gas" />

            </Box>
            <Spacer y={1}></Spacer>

            <Box marginRight="10%">
              <UsageChart data={parseContractData(contractsTotalGasUsage.records, "M3", 50)} />
            </Box>

          </Flex>
        </Flex>


      </Content>
      <Footer />
    </>
  );
};