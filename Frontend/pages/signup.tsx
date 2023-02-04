
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
} from '@nextui-org/react';
import * as CodiceFiscaleUtils from '@marketto/codice-fiscale-utils';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'
import Footer from '../components/Footer';
import React, { useState } from 'react';
import 'dayjs/locale/it';
import Box from '@mui/material/Box';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import "../components/phoneInput.module.scss"



export default function Signup() {
  const [step, setStep] = useState("MailPasswd")
  function clickHandler(event: any, step: string) {

    setStep(step)

  }
  function StepMailPasswd() {
    const [phone, setPhone] = useState("")

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
      <Input.Password
        clearable
        bordered
        fullWidth
        color="primary"
        size="lg"
        placeholder="Password"
      />
      <Spacer y={1} />

      <Input.Password
        clearable
        bordered
        fullWidth
        color="primary"
        size="lg"
        placeholder="Repeat password"
      />


      <Spacer y={1} />
      <PhoneInput
        inputStyle={{ color: "black", height: '3em', borderRadius: "15px", width: "100%", borderWidth: "2px" }} country={'it'}
        value={phone} onChange={phone => setPhone(phone)}
      ></PhoneInput>

      <Spacer y={1} />
      <Grid.Container >
        <Grid xs={5}>

        </Grid>
        <Grid xs={7}>
          <Button css={{
            width: "100%",
          }} onClick={(e) => clickHandler(e, "Data")}>Next</Button>
        </Grid>
      </Grid.Container>
    </>)
  }

  function StepData() {
    const [value, setValue] = useState()

    return (<>
      <Text
        size={24}
        weight="bold"
        css={{
          as: 'center',
          mb: '20px',
        }}
      >

        Insert data
      </Text>

      <Input
        clearable
        bordered
        fullWidth
        color="primary"
        size="lg"
        placeholder="Name"
      />

      <Spacer y={1} />
      <Input
        clearable
        bordered
        fullWidth
        color="primary"
        size="lg"
        placeholder="Surname"
      />


      <Spacer y={1} />

      <Grid.Container >
        <Grid xs={8}>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Birth place"
          />

        </Grid>
        <Grid xs={1} />

        <Grid xs={2} >
          <Dropdown>
            <Dropdown.Button light>M/F</Dropdown.Button>
            <Dropdown.Menu aria-label="Gender">
              <Dropdown.Item key="M">Male</Dropdown.Item>
              <Dropdown.Item key="F">
                Female
              </Dropdown.Item>
              <Dropdown.Item key="NB">
                Non binary
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Grid>
      </Grid.Container>
      <Spacer y={1} />

      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="it">
        <DatePicker

          mask="__/__/____"
          label="Custom input"
          value={value}
          onChange={(newValue) => {
            setValue(newValue)
          }}
          renderInput={({ inputRef, inputProps, InputProps }) => (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Input ref={inputRef} {...inputProps}
                clearable
                bordered
                fullWidth
                helperText="dd/mm/YYYY"
                color="primary"
                size="lg"
                placeholder="Birth day">

              </Input>
              {InputProps?.endAdornment}
            </Box>
          )}
        />
      </LocalizationProvider>

      <Spacer y={2} />
      <Input
        clearable
        bordered
        fullWidth
        color="primary"
        size="lg"
        placeholder="Fiscal Code"
      />

      <Spacer y={1} />
      <Grid.Container >
        <Grid xs={3}>
          <Button auto onClick={(e) => clickHandler(e, "MailPasswd")}>	&lt;</Button>
        </Grid>

        <Grid xs={9}>
          <Button css={{
            width: "100%",
          }} onClick={(e) => clickHandler(e, "Address")}>Next</Button>
        </Grid>
      </Grid.Container>

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
      <Grid.Container >
        <Grid xs={7}>
        <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="City"
          />

        </Grid>
        <Grid xs={1}></Grid>
        <Grid xs={4}>
        <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Zip"
          />

        </Grid>
        
<Grid xs={12}>
<Spacer y={1} />

</Grid>




        <Grid xs={9}>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Street"
          />

        </Grid>
        <Grid xs={1} ></Grid>
        <Grid xs={2} >      <Input
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="N."
        /></Grid>
        

      </Grid.Container>
      <Spacer y={1} />





      <Grid.Container >
        <Grid xs={3}>
          <Button auto onClick={(e) => clickHandler(e, "Data")}>	&lt;</Button>
        </Grid>
        <Grid xs={9}>
          <Button css={{
            width: "100%",
          }} onClick={(e) => alert("Congratulazioni")}>Complete</Button>
        </Grid>
      </Grid.Container>

    </>)

  }


  function getContainer(step: string) {
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
        <Card css={{ mw: '40%', p: '40px' }}>
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