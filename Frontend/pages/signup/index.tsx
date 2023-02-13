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
import {SignupSteps} from "./steps";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import "../../components/phoneInput.module.scss";

export default function Signup() {
  const [step, setStep] = useState("MailPasswd");
  const [formData, setFormData] = React.useState({birthday:null})

   const handleChange=(state: any)=> {
     
     setFormData({
       ...formData,
       ...state
      })
      console.log(formData)
  }
  function Signup() {
    fetch("/api/signup", {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(formData)

    })
        .then(response => response.json())
        .then(res => {alert(res["message"]); console.log(res) })
        .catch(err => console.log(err))
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

          <SignupSteps handleChange={handleChange} signup={Signup} formData={formData} />
        </Card>
      </Container>
      <Footer />
    </>
  );
}
