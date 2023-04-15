
import { Flex, Box, Text } from '@chakra-ui/react';
import "chart.js/auto";
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import Header from '../../../components/Header';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer/footer';
import Chart from '../../../components/chart';
import Content from '../../../components/pageContent';
import { Spacer } from '@nextui-org/react';
import { useState, useEffect } from 'react'

import { borderRadius } from '@mui/system';
import { signOut, useSession } from 'next-auth/react'

const getContractsUser = async (jwt: string) => {
  const response = await fetch("/api/contracts/getContractsUser/", {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify({ "access_token": jwt })
  });
  const data = await response.json();
  return data;
}


const getContractData = async (idContract: string) => {
  const session = useSession()
  const response = await fetch("/api/contracts/getContractUsage", {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(session.data)

  })
  const data = await response.json()
  return data
}

const lineData = {
  labels: ['Electricity ', 'Delivery', 'Regulatory charges', 'Other charges', 'Taxes'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [150, 59, 40, 81, 56],

      borderWidth: 1,
    },
  ],
}


const barData = {
  labels: ['Methane ', 'Delivery', 'Regulatory charges', 'Other charges', 'Taxes'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [90, 59, 40, 81, 56],

      borderWidth: 1,
    },
  ],
};



export default function Index() {
  const session = useSession();

  const [contracts, setContracts] = useState({})
  useEffect(() => {
    const fetchData = async () => {
      if (session.status == "authenticated") {
        console.log("sai")
        const jwt = session.data?.user["access_token"]
        console.log(contracts)

        const data = await getContractsUser(jwt);
        setContracts(data);
      }
    };
    fetchData();
  }, [session])
  useEffect(() => {
    console.log(contracts)
  }, [contracts])

  return (<>

    <Header />
    <Content>

      <Flex direction="row" marginLeft="200px" marginRight="200px" padding="20px" justifyContent="space-between">

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
                <p>{contracts[key]["address"]}</p>
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
