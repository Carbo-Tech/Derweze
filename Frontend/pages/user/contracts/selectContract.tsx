import { Flex, Box, Text } from '@chakra-ui/react';
import "chart.js/auto";
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import Header from '../../../components/Header';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer/footer';
import Chart from '../../../components/Charts/chart';
import Content from '../../../components/pageContent';
import { Button, Spacer, Input, Card, Container } from '@nextui-org/react';
import { useState, useEffect } from 'react';
import UsageChart from '../../../components/Charts/usageChart';
import { borderRadius } from '@mui/system';
import { signOut, useSession } from 'next-auth/react';
import ContractCharts from '../../../components/Charts/ContractChart';
import LineSeparator from '../../../components/lineSeparator';
import { getContractsUser, singleContractCost } from "../../../components/functions"
import { parseContractData } from "../../../components/functions"
import { parseContractsCost } from "../../../components/functions"
import { getDataContracts } from "../../../components/functions"
import { mergeContracts } from "../../../components/functions"
import { getInfoContract } from '../../../components/functions';
import Contract from '../../../components/User/Contract';

import StepAddress from '../../../components/signupSteps/StepAddress';
import ContractData from '../../../components/contractData';
import GasPlanSelector from '../../../components/PlansSelector';



export default function selectContract() {
    const session = useSession();
    const plans = [
        {
            "id": 1,
            "company": "Eco-Gas",
            "image": "https://combustiblesecogas.com/wp-content/uploads/2020/09/logo-ecogas.png",
            "basePrice": 60,
            "pricePerMQ": 0.8,
            "priceOscillation": 5,
            "estimatedCo2Emittions": 200,
            "estimatedGreenGas": 30,
            "description": "Our eco-friendly gas plan"
        },
        {
            "id": 2,
            "company": "Budget Gas",
            "image": "https://cdn.autoconnectedcar.com/wp-content/uploads/2017/08/GB-Blue-Horizontal-RGB.png",
            "basePrice": 50,
            "pricePerMQ": 0.5,
            "priceOscillation": 10,
            "estimatedCo2Emittions": 250,
            "estimatedGreenGas": 10,
            "description": "Our low-cost gas plan"
        },
        {
            "id": 3,
            "company": "inE Gas Co.",
            "image": "https://i.imgur.com/ooSIBC5.png",
            "basePrice": 80,
            "pricePerMQ": 1.0,
            "priceOscillation": 3,
            "estimatedCo2Emittions": 100,
            "estimatedGreenGas": 80,
            "description": "Our renewable gas plan"
        }
    ]
    return (
        <>
            <Header activeItemId="/user/contracts" />
            <Content>
                <GasPlanSelector plans={plans}></GasPlanSelector>


            </Content >
            <Footer />
        </>
    );
};