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
import { getContractsUser, singleContractCost } from "../../components/functions"
import { parseContractData } from "../../components/functions"
import { parseContractsCost } from "../../components/functions"
import { getDataContracts } from "../../components/functions"
import { mergeContracts } from "../../components/functions"
import { getInfoContract } from '../../components/functions';
import Contract from '../../components/User/Contract';

import HashLoader from "react-spinners/HashLoader";



export default function Dashboard() {
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
      <Header />
      <Content>
        {contractsInfoElectricity.sort().map((contract) => {
          if (contract !== undefined && contract.idContract !== 0) {
            console.log(contractsElectricityUsage, contract);
            const contractCost = contractsElectricityCost.find((item) => item.idContract === contract.idContract);
            const contractUsage = contractsElectricityUsage.find((item) => item.idContract === contract.idContract);

            if (contractCost !== undefined && contractUsage !== undefined) {
              return (
                <Contract
                  contractCost={singleContractCost(contractCost)}
                  contractUsage={contractUsage}
                  contractData={contract}
                  unit={"KWh"}
                  total={contractUsage?.total}
                  topText={"Electricity"}

                />
              );
            } else {
              return (
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                  <HashLoader color="#FFFFFF" />
                </div>
              );
            }
          }
        })}
        {contractsInfoGas.sort().map((contract) => {
          if (contract !== undefined && contract.idContract !== 0) {
            console.log(contractsInfoGas, contract);
            const contractCost = contractsGasCost.find((item) => item.idContract === contract.idContract);
            const contractUsage = contractsGasUsage.find((item) => item.idContract === contract.idContract);

            if (contractCost !== undefined && contractUsage !== undefined) {
              return (
                <Contract
                  contractCost={singleContractCost(contractCost)}
                  contractUsage={contractUsage}
                  contractData={contract}
                  unit={"SMC"}
                  total={contractUsage?.total}
                  topText={"Gas"}
                />
              );
            } else {
              return (
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                  <HashLoader color="#FFFFFF" />
                </div>
              );
            }
          }
        })}

      </Content >
      <Footer />
    </>
  );
};