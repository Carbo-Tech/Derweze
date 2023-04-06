import { Flex, Box, Text } from '@chakra-ui/react';
import "chart.js/auto";
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/footer';
import Chart from './chart';
import { Spacer } from '@nextui-org/react';
import { borderRadius } from '@mui/system';
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
  return (
    <div style={{minHeight: "105vh"}}>
      <Header />
      <Spacer y={1}></Spacer>
      
      <div style={{ backgroundColor: "#333333" , margin:"50px",display: "flex", flexDirection: "column", minHeight: "70vh", borderRadius: "10px" }}>
      <Flex direction="row" marginLeft="200px" marginRight="200px"  padding="20px" justifyContent="space-between">

        <Box marginLeft="10%">
          <Chart data={lineData} radius={120} thicknessP={20} text="Electricity"></Chart>
        </Box>
        <Box marginRight="10%">
        <Chart data={barData} radius={120} thicknessP={20} text="Gas"></Chart>

        </Box>
      </Flex>
        </div>
      <Footer />
    </div >
  );
}
