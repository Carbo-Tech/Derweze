
import {
  Card,
  Spacer,
  Text,
  Link,
  Input,
  Image,
  Row,
  Button,
  Container,
  PressEvent,
} from '@nextui-org/react';
import Footer from '../components/Footer';
import React, { useState } from 'react';



export default function Login() {
  const [step, setStep] = useState("MailPasswd")
  function clickHandler(event: any,step:string) {

    setStep(step)

  }
  function StepMailPasswd() {
    return (<>
      <Text
        size={24}
        weight="bold"
        css={{
          as: 'center',
          mb: '20px',
        }}
      >

        Derweze register
      </Text>
      <Input
        clearable
        bordered
        fullWidth
        color="primary"
        size="lg"
        placeholder="Email"
      />
      <Spacer y={1} />
      <Input
        clearable
        bordered
        fullWidth
        color="primary"
        size="lg"
        placeholder="Password"
      />


      <Spacer y={1} />
      <Button  onClick={(e)=>clickHandler(e,"Data")}>Sign up</Button>
      <Spacer y={1} />
    </>)
  }
  function StepData() {
    return (<>
      <Text
        size={24}
        weight="bold"
        css={{
          as: 'center',
          mb: '20px',
        }}
      >

        Derweze data
      </Text>
      <Input
        clearable
        bordered
        fullWidth
        color="primary"
        size="lg"
        placeholder="Email"
      />
      <Spacer y={1} />
      <Input
        clearable
        bordered
        fullWidth
        color="primary"
        size="lg"
        placeholder="Password"
      />


      <Spacer y={1} />
      <Button onClick={(e)=>clickHandler(e,"Address")}>Avanti</Button>

      <Spacer y={1} />
    </>)

  }
  function StepAddress() {
    return (<>
      <Text
        size={24}
        weight="bold"
        css={{
          as: 'center',
          mb: '20px',
        }}
      >

        Derweze address
      </Text>
      <Input
        clearable
        bordered
        fullWidth
        color="primary"
        size="lg"
        placeholder="Email"
      />
      <Spacer y={1} />
      <Input
        clearable
        bordered
        fullWidth
        color="primary"
        size="lg"
        placeholder="Password"
      />


      <Spacer y={1} />
      <Button >Complete</Button>
      <Spacer y={1} />
    </>)

  }


  function getContainer(step: string) {
    console.log("he")
    if (step == "MailPasswd") {
      return (<><StepMailPasswd /></>)

    }

    else if (step == "Address") {
      return (<><StepAddress /></>)

    }
    else if (step == "Data") {
      return (<><StepData /></>)


    }
  }
  console.log(step)

  return (
    <>
      <Container 

        display="flex"
        alignItems="center"
        justify="center"
        css={{ minHeight: '100vh' }}
      >
        <Card css={{ mw: '450px', p: '40px' }}>
          <Image
            src="logo_derweze.png"
            alt="Default Image"
            width={80}
            height={80}
          />

          {
            getContainer(step)
          }



        </Card>
      </Container>
      <Footer />

    </>
  );
}