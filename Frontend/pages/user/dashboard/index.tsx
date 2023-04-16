
import { Flex, Box, Text } from '@chakra-ui/react';
import "chart.js/auto";
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import Header from '../../../components/Header';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer/footer';
import Chart from '../../../components/Charts/chart';
import Content from '../../../components/pageContent';
import { Spacer } from '@nextui-org/react';
import { useState, useEffect } from 'react'
import UsageChart from '../../../components/Charts/usageChart';
import { borderRadius } from '@mui/system';
import { signOut, useSession } from 'next-auth/react'
import ContractCharts from '../../../components/Charts/ContractChart';
import LineSeparator from '../../../components/lineSeparator';


const getContractsUser = async (jwt: string) => {
  const response = await fetch("/api/contracts/getContractsUser/", {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify({ "access_token": jwt })
  });
  const data = await response.json();
  return data;
}

function extractDateTimeValue(json) {
  const records = json.electricityUsage.records;
  const dateTimeValuePairs = records.map(record => {
    return {
      dateTime: record.dateTime,
      value: record.value
    };
  });
  return dateTimeValuePairs;
}

const getContractUsage = async (jwt: string, idContract: string) => {
  const response = await fetch("/api/contracts/getContractUsage", {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify({ "access_token": jwt, "idContract": idContract })

  })
  const data = await response.json()
  return data
}

const lineData = {
  labels: ['Electricity ', 'Delivery', 'Regulatory charges', 'Other charges', 'Taxes'],
  datasets: [
    {
      label: '€',
      data: [150, 59, 40, 81, 56],

      borderWidth: 1,
    },
  ],
}


const barData = {
  labels: ['Methane ', 'Delivery', 'Regulatory charges', 'Other charges', 'Taxes'],
  datasets: [
    {
      label: '€',
      data: [90, 59, 40, 81, 56],

      borderWidth: 1,
    },
  ],
};



export default function Index() {
  const session = useSession();

  const [contracts, setContracts] = useState({})
  const [contractsElectricityUsage, setContractsElectricityUsage] = useState({})
  useEffect(() => {
    const fetchData = async () => {
      if (session.status == "authenticated") {
        const jwt = session.data?.user["access_token"]

        const data = await getContractsUser(jwt);
        setContracts(data);
      }
    };
    fetchData();
    console.log()
  }, [session])



  useEffect(() => {
    const fetchData = async () => {
      if (session.status == "authenticated") {
        const jwt = session.data?.user["access_token"]

        const dataContracts = await Promise.all(Object.keys(contracts).map(async (key) => {
          return await getContractUsage(jwt, contracts[key]["idContract"]);
        }));//returns an arrya of JSONs
console.log(dataContracts )
        const data=dataContracts.map((record)=>{return extractDateTimeValue(record)})
        
        setContractsElectricityUsage(data);
      }
    };
    console.log(contractsElectricityUsage)
    fetchData();
  }, [contracts])


  return (<>

    <Header />
    <Content>
      <LineSeparator text="Last moth data"></LineSeparator>

      <Flex direction="row" justifyContent="space-between">
        <Box marginLeft="10%">
          <Chart data={lineData} radius={120} thicknessP={20} text="Electricity"></Chart>

        </Box>

        <Box marginRight="10%">
          <Chart data={barData} radius={120} thicknessP={20} text="Gas"></Chart>
        </Box>

      </Flex>
      <div>
        {
          Object.keys(contracts).map(key => {
            return (
              <div key={key}>
                <p>Key: {key}</p>
                <p>{JSON.stringify(contracts[key])}</p>
              </div>
            )
          })
        }
      </div>

    </Content>
    <Footer />
  </>

  );
}
