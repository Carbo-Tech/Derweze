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


export function SignupSteps({ handleChange, formData, signup }) {
    const [step, setStep] = useState("MailPasswd");

    function clickHandler(event: any, step: string) {
        setStep(step);
    }



    function GetContainer() {
        if (step == "MailPasswd") {
            return (
                <StepMailPasswd handleChange={handleChange} />
            );
        } else if (step == "Address") {
            return (
                <StepAddress handleChange={handleChange} />
            );
        } else {
            return (
                <StepData handleChange={handleChange} formData={formData} />

            );
        }
    }
    function test(event: any) {

        console.log(event)
        handleChange((event))
    }

    function StepMailPasswd({ handleChange, stateMailPasswd }: any) {

        const [phone, setPhone] = useState("");
        const [state, setState] = useState({ ...formData })

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
                    value={state["email"]}
                    onChange={(event) => { setState({ ...state, email: event.target.value }); console.log(state) }}
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

                    value={state["password"]}
                    onChange={(event) => { setState({ ...state, password: event.target.value }); console.log(state) }}
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

                    value={state["rpassword"]}
                    onChange={(event) => { setState({ ...state, rpassword: event.target.value }); console.log(state) }}
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
 
           
                    dropdownStyle={{transform: "translate(0%, -100%)"}}
                    country={"it"}
                    value={state["phone"]}
                    onChange={(phone) => setState({ ...state, phone: phone })}
                ></PhoneInput>

                <Spacer y={1} />
                <Grid.Container>
                    <Grid xs={5}></Grid>
                    <Grid xs={7}>
                        <Button
                            css={{
                                width: "100%",
                            }}
                            onClick={(e) => { clickHandler(e, "Data"); handleChange(state) }}
                        >
                            Next
                        </Button>
                    </Grid>
                </Grid.Container>
            </>
        );
    }

    function StepData({ handleChange }: any) {
        const [value, setValue] = useState(null);
        const [state, setState] = useState({ ...formData });
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
                    value={state["name"]}
                    onChange={(event) => { setState({ ...state, name: event.target.value }); console.log(state) }}

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
                    value={state["surname"]}
                    onChange={(event) => { setState({ ...state, surname: event.target.value }); console.log(state) }}
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
                            value={state["birthPlace"]}
                            onChange={(event) => { setState({ ...state, birthPlace: event.target.value }); console.log(state) }}

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
                        value={state["birthday"]}
                        onChange={(newValue) => {
                            setState({ ...state, birthday: newValue });
                            console.log(state);
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
                    value={state["fCode"]}
                    onChange={(event) => { setState({ ...state, fCode: event.target.value }) }}
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
                        <Button auto onClick={(e) => { clickHandler(e, "MailPasswd"); handleChange(state); console.log(state) }}>
                            &lt;
                        </Button>
                    </Grid>

                    <Grid xs={9}>
                        <Button
                            css={{
                                width: "100%",
                            }}
                            onClick={(e) => { clickHandler(e, "Address"); handleChange(state) }}
                        >
                            Next
                        </Button>
                    </Grid>
                </Grid.Container>
            </>
        );
    }
    function StepAddress({ handleChange }: any) {
        const [state, setState] = useState({ ...formData });
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
                            value={state["nation"]}
                            onChange={(event) => { setState({ ...state, nation: event.target.value }) }}
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
                            value={state["province"]}
                            onChange={(event) => { setState({ ...state, province: event.target.value }) }}
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
                            value={state["city"]}
                            onChange={(event) => { setState({ ...state, city: event.target.value }) }}
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
                            value={state["zipCode"]}
                            onChange={(event) => { setState({ ...state, zipCode: event.target.value }) }}
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
                            value={state["street"]}
                            onChange={(event) => { setState({ ...state, street: event.target.value }) }}
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
                            value={state["streetNumber"]}
                            onChange={(event) => { setState({ ...state, streetNumber: event.target.value }) }}
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
                        <Button auto onClick={(e) => { clickHandler(e, "Data"); handleChange(state) }}>
                            &lt;
                        </Button>
                    </Grid>
                    <Grid xs={9}>
                        <Button
                            css={{
                                width: "100%",
                            }}
                            onClick={(e) => { signup(); handleChange(state) }}
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
            <GetContainer></GetContainer>
        </>
    )
}