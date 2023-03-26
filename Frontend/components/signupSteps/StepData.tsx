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
import "../../components/phoneInput.module.scss";
export default function StepData({ formData, setFormData, spacing, clickHandler }: any) {
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
                    <Button auto onClick={(e) => { clickHandler(e, "MailPasswd"); }}>
                        &lt;
                    </Button>
                </Grid>

                <Grid xs={9}>
                    <Button
                        css={{
                            width: "100%",
                        }}
                        onClick={(e) => { clickHandler(e, "Address"); }}
                    >
                        Next
                    </Button>
                </Grid>
            </Grid.Container>
        </>
    );
}