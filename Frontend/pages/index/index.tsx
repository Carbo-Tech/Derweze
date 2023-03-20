import { Flex, Box, Text } from '@chakra-ui/react';
import "chart.js/auto";
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Chart from './chart';
import { Spacer } from '@nextui-org/react';
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
      data: [90, 59, 40, 81, 56, 55, 10],

      borderWidth: 1,
    },
  ],
};



export default function Index() {
  return (
    <>
      <Header />
      <Spacer y={1}></Spacer>
      <Text fontSize="2xl" fontWeight="bold" textAlign="center" marginBottom="20px">Bentornata Roberta</Text>
      <Flex direction="row" marginLeft="200px" marginRight="200px"  padding="20px" justifyContent="space-between">
        <Box marginLeft="10%">
          <Chart data={lineData} radius={130} thicknessP={20} text="Electricity"></Chart>
        </Box>
        <Box marginRight="10%">
        <Chart data={barData} radius={130} thicknessP={20} text="Gas"></Chart>

        </Box>
      </Flex>
      <Footer />
    </>
  );
}
