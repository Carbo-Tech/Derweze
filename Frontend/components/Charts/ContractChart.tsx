import React from "react";
import { Navbar, Button, Link, Text, Card, Radio, Avatar, Image } from "@nextui-org/react";
import { signOut, useSession } from 'next-auth/react'
import Chart from "./chart";
import { Line } from "react-chartjs-2";
import { Flex, Box } from "@chakra-ui/react";
import UsageChart from "./usageChart";
export default function ContractCharts() {
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

    return (
        <div style={{width:"100%"}}>
        <Flex direction="row" alignItems="center" justifyContent="space-between">
            <Box>
                <Chart data={lineData} radius={120} thicknessP={20} text="Electricity" />
            </Box>
            <Box alignSelf="center">
                <Line data={barData}  style={{ top: "50%",bottom: "50%", width:"100vh",height:"50vh"}} options={{ maintainAspectRatio: false }}
/>

            </Box>
        </Flex>
        </div>
    )
}