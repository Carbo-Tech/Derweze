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
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Signup from ".";
import "../../components/phoneInput.module.scss";


export function SignupSteps({ onSubmit }) {
    const [step, setStep] = useState("MailPasswd");
    const [formData, setFormData]=useState({
        email :"",
        password:"",
        rpassword:"",
        phone :"",
        name :"",
        surname :"",
        birthPlace:"",
        birthday:"",
        fCode:"",
        nation:"",
        province:"",
        city:"",
        zipCode:"",
        street:"",
        streetNumber:""

        

    });
    function clickHandler(event: any, step: string) {
        setStep(step);
    }



    function GetContainer() {
        if (step == "MailPasswd") {
            return (
                <StepMailPasswd  />
            );
        } else if (step == "Address") {
            return (
                <StepAddress  />
            );
        } else {
            return (
                <StepData  />

            );
        }
    }



    function StepData({ }: any) {
        const [value, setValue] = useState(null);
        const [selected, setSelected] = React.useState(new Set(["text"]));
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
                    Insert data
                </Text>

                <Input
                    clearable
                    bordered
                    fullWidth

                    name="name"
                    value={formData["name"]}
                    onChange={(event) => { setFormData({ ...formData, name: event.target.value });}}

                    color="primary"
                    size="lg"
                    placeholder="Name"
                    aria-label="Name"
                />

                <Spacer y={1} />
                <Input
                    clearable
                    bordered
                    fullWidth

                    name="surname"
                    value={formData["surname"]}
                    onChange={(event) => { setFormData({ ...formData, surname: event.target.value });  }}
                    color="primary"
                    size="lg"
                    placeholder="Surname"
                    aria-label="Surname"
                />

                <Spacer y={1} />

                <Grid.Container>
                    <Grid xs={8}>
                        <Input
                            clearable
                            bordered
                            fullWidth

                            name="birthPlace"
                            value={formData["birthPlace"]}
                            onChange={(event) => { setFormData({ ...formData, birthPlace: event.target.value });  }}

                            color="primary"
                            size="lg"
                            placeholder="Birth place"
                            aria-label="Birth place"
                        />
                    </Grid>
                    <Grid xs={1} />

                    <Grid xs={2}>
                        <Dropdown >
                            <Dropdown.Button light>M/F</Dropdown.Button>
                            <Dropdown.Menu onSelectionChange={setSelected} aria-label="Gender">
                                <Dropdown.Item key="M">Male</Dropdown.Item>
                                <Dropdown.Item key="F">Female</Dropdown.Item>
                                <Dropdown.Item key="NB">Non binary</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Grid>
                </Grid.Container>
                <Spacer y={1} />

                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="it">
                    <DatePicker
                        mask="__/__/____"
                        label="Birthday"
                        value={formData["birthday"]}
                        onChange={(newValue) => {
                            setFormData({ ...formData, birthday: newValue });
                            
                        }}
                        renderInput={({ inputRef, inputProps, InputProps }) => (
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <Input
                                    ref={inputRef}
                                    {...inputProps}
                                    clearable
                                    bordered
                                    fullWidth
                                    helperText="dd/mm/YYYY"
                                    color="primary"
                                    size="lg"
                                    placeholder="Birth day"
                                    aria-label="Birth day"
                                ></Input>
                                {InputProps?.endAdornment}
                            </Box>
                        )}
                    />
                </LocalizationProvider>

                <Spacer y={2} />
                <Input
                    name="fCode"
                    value={formData["fCode"]}
                    onChange={(event) => { setFormData({ ...formData, fCode: event.target.value }) }}
                    clearable
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder="Fiscal Code"
                    aria-label="Fiscal Code"
                />

                <Spacer y={1} />
                <Grid.Container>
                    <Grid xs={3}>
                        <Button auto onClick={(e) => { clickHandler(e, "MailPasswd");  }}>
                            &lt;
                        </Button>
                    </Grid>

                    <Grid xs={9}>
                        <Button
                            css={{
                                width: "100%",
                            }}
                            onClick={(e) => { clickHandler(e, "Address");  }}
                        >
                            Next
                        </Button>
                    </Grid>
                </Grid.Container>
            </>
        );
    }
    function StepAddress({  }: any) {
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
                    Derweze address
                </Text>
                <Grid.Container>

                    <Grid xs={6}>
                        <Input
                            clearable
                            bordered
                            name="Nation"
                            value={formData["nation"]}
                            onChange={(event) => { setFormData({ ...formData, nation: event.target.value }) }}
                            fullWidth
                            color="primary"
                            size="lg"
                            placeholder="Nation"
                            aria-label="Nation"
                        />
                    </Grid>
                    <Grid xs={1}></Grid>
                    <Grid xs={5}>
                        <Input
                            clearable
                            bordered
                            name="province"
                            value={formData["province"]}
                            onChange={(event) => { setFormData({ ...formData, province: event.target.value }) }}
                            fullWidth
                            color="primary"
                            size="lg"
                            placeholder="Province"
                            aria-label="province"
                        />
                    </Grid>

                    <Grid xs={12}>
                        <Spacer y={1} />
                    </Grid>

                    <Grid xs={7}>
                        <Input
                            clearable
                            bordered
                            name="city"
                            value={formData["city"]}
                            onChange={(event) => { setFormData({ ...formData, city: event.target.value }) }}
                            fullWidth
                            color="primary"
                            size="lg"
                            placeholder="City"
                            aria-label="City"
                        />
                    </Grid>
                    <Grid xs={1}></Grid>
                    <Grid xs={4}>
                        <Input
                            clearable
                            bordered
                            name="zipCode"
                            type="number"
                            value={formData["zipCode"]}
                            onChange={(event) => { setFormData({ ...formData, zipCode: event.target.value }) }}
                            fullWidth
                            color="primary"
                            size="lg"
                            placeholder="Zip"
                            aria-label="Zip"
                        />
                    </Grid>

                    <Grid xs={12}>
                        <Spacer y={1} />
                    </Grid>

                    <Grid xs={9}>
                        <Input
                            clearable
                            bordered
                            name="street"
                            value={formData["street"]}
                            onChange={(event) => { setFormData({ ...formData, street: event.target.value }) }}
                            fullWidth
                            color="primary"
                            size="lg"
                            placeholder="Street"
                            aria-label="Street"
                        />
                    </Grid>
                    <Grid xs={1}></Grid>
                    <Grid xs={2}>
                        <Input
                            clearable
                            bordered
                            fullWidth

                            name="streetNumber"
                            value={formData["streetNumber"]}
                            onChange={(event) => { setFormData({ ...formData, streetNumber: event.target.value }) }}
                            color="primary"
                            size="lg"
                            placeholder="N."
                            aria-label="Street number"
                        />
                    </Grid>
                </Grid.Container>
                <Spacer y={1} />

                <Grid.Container>
                    <Grid xs={3}>
                        <Button auto onClick={(e) => { clickHandler(e, "Data");  }}>
                            &lt;
                        </Button>
                    </Grid>
                    <Grid xs={9}>
                        <Button
                            type="submit"
                            css={{
                                width: "100%",
                            }}
                            onClick ={onSubmit(formData)}
                        >
                            Complete
                        </Button>
                    </Grid>
                </Grid.Container>
            </>
        );
    }

    return (
        <>
            <StepMailPasswd></StepMailPasswd>
        </>
    )
}