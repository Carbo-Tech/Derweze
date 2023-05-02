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



export default function Form() {
    const session = useSession();
    const [step, setStep] = useState("Checks");

    const [formData, setFormData] = useState({
        commercial_use: false,
        production_hot_sanitary_water: '',
        individual_heating: '',
        use_cooking_foods: '',
        gas: false,
        electricity: false,

        address: '',
        civicNumber: '',
        description: '',
        locality: '',
        nation: '',
        province: '',
        zipCode: '',

        offert_description: '',
        payment_type: '',
    });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (typeof window !== "undefined") {
            window.location.href = "/user/contracts/selectContract"
        }
        // Submit form data to backend API or handle it in some other way
    };

    const nextPage = (event: any, value: string) => {
        if (value == "Data") {
            setStep("Checks")
            return
        }

        setStep(value);
    }
    return (
        <>
            <Header activeItemId="/user/contracts" />
            <Content>

                <Container
                    display="flex"
                    alignItems="center"
                    justify="center"
                    css={{ minHeight: "100vh" }}
                >
                    <Card css={{ mw: "40%", p: "40px" }}>

                        <form onSubmit={handleSubmit}>

                            {
                                step == "Address" ? (<StepAddress formData={formData} setFormData={setFormData} spacing={1.5} clickHandler={nextPage}></StepAddress>) :
                                    <ContractData formData={formData} setFormData={setFormData} spacing={1.5} clickHandler={nextPage} />

                            }
                        </form>
                    </Card>
                </Container>



            </Content >
            <Footer />
        </>
    );
};