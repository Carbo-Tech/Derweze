import {
  Card,
  Image,
  Container,
} from "@nextui-org/react";
import "react-phone-input-2/lib/material.css";
import Footer from "../../components/Footer/footer";
import React, { useState } from "react";
import "dayjs/locale/it";
import StepMailPassword from "../../components/signupSteps/StepMailPassword"

import StepData from "../../components/signupSteps/StepData";
import StepAddress from "../../components/signupSteps/StepAddress";

export default function Signup() {
  const [step, setStep] = useState("MailPasswd");
  const [formData, setFormData] = React.useState({ birthday: "" })
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
  const handleSubmit = (event: any) => {
    event.preventDefault()
    console.log(formData)
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

          <form onSubmit={handleSubmit}>

            {
              step == "MailPasswd" ? (<StepMailPassword formData={formData} setFormData={setFormData} clickHandler={nextPage} spacing={1.5}></StepMailPassword>) :
                step == "Data" ? (<StepData formData={formData} setFormData={setFormData} spacing={1.5} clickHandler={nextPage}></StepData>) :
                  step == "Address" ? (<StepAddress formData={formData} setFormData={setFormData} spacing={1.5} clickHandler={nextPage}></StepAddress>) : <></>


            }
          </form>
        </Card>
      </Container>
      <Footer />
    </>
  );
}
