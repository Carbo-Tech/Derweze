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
import React, { useState, useEffect } from "react";
import "dayjs/locale/it";
import Box from "@mui/material/Box";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "../../components/phoneInput.module.scss";

export default function StepMailPassword({ formData, setFormData,clickHandler1 }: any) {
    const [iFormData,setIFormData] = useState({
        email: "",
        password: "",
        rpassword: "",
        phone: "",
      });
      function clickHandler(){
        console.log(formData)
      }


    return (
        <>
            <Text
                size={24}
                weight="bold"
                css={{
                    as: "center",
                    mb: "20px",
                }}
            >
                Derweze register
            </Text>
            <Input
                name="email"
                value={formData["email"]}
                onChange={(event) => { setFormData({ ...formData, email: event.target.value }); }}
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Email"
                aria-label="Email"
            />
            <Spacer y={1} />
            <Input.Password
                name="password"

                value={formData["password"]}
                onChange={(event) => { setFormData({ ...formData, password: event.target.value }); }}
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Password"
                aria-label="Password"
            />
            <Spacer y={1} />

            <Input.Password
                name="rpassword"

                value={formData["rpassword"]}
                onChange={(event) => { setFormData({ ...formData, rpassword: event.target.value });  }}
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Repeat password"
                aria-label="Repeat password"
            />

            <Spacer y={1} />
            <PhoneInput
                aria-label="Phone input"

                inputStyle={{
                    color: "black",
                    height: "3em",
                    borderRadius: "15px",
                    width: "100%",
                    borderWidth: "2px",
                }}


                dropdownStyle={{ transform: "translate(0%, -100%)" }}
                country={"it"}
                value={formData["phone"]}
                onChange={(phone) => setFormData({ ...formData, phone: phone })}
            ></PhoneInput>

            <Spacer y={1} />
            <Grid.Container>
                <Grid xs={5}></Grid>
                <Grid xs={7}>
                    <Button
                        css={{
                            width: "100%",
                        }}
                        onClick={(e) => { clickHandler(e, "Data");  }}
                    >
                        Next
                    </Button>
                </Grid>
            </Grid.Container>
        </>
    );
}