import {
  Card,
  Spacer,
  Text,
  Link,
  Input,
  Image,
  Row,
  Grid,
  Button,
  Container,
  PressEvent,
  Dropdown,
} from "@nextui-org/react";
import * as CodiceFiscaleUtils from "@marketto/codice-fiscale-utils";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import Footer from "../../components/Footer";
import React, { useState } from "react";
import "dayjs/locale/it";
import Box from "@mui/material/Box";
import { SignupSteps } from "./steps";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import StepMailPassword from "../../components/signupSteps/StepMailPassword"

import "../../components/phoneInput.module.scss";
import StepData from "../../components/signupSteps/StepData";

export default function Signup() {
  const [step, setStep] = useState("MailPasswd");
  const [formData, setFormData] = React.useState({ birthday: "", email: "prova" })
  const nextPage = (event: any, value: string) => {
    setStep(value);
  }

  function Signup() {
    fetch("/api/signup", {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(formData)

    })
      .then(response => response.json())
      .then(res => { alert(res["message"]); console.log(res) })
      .catch(err => console.log(err))
  };
  const handleSubmit = (state) => {

    console.log(state)
  };
  return (
    <>
      <Container
        display="flex"
        alignItems="center"
        justify="center"
        css={{ minHeight: "100vh" }}
      >
        <Card css={{ mw: "40%", p: "40px" }}>
          <Image
            src="logo_derweze.png"
            alt="Default Image"
            width={80}
            height={80}
          />

            {
              step == "MailPasswd" ? (<StepMailPassword formData={formData} setFormData={setFormData} clickHandler={nextPage} spacing={1.5}></StepMailPassword>
              ) :
                step == "Data" ? (<StepData formData={formData} setFormData={setFormData} spacing={1.5} clickHandler={nextPage}></StepData>

                ) : <></>
            }
        </Card>
      </Container>
      <Footer />
    </>
  );
}
