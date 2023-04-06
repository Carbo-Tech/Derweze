import {
    Spacer,
    Text,
    Input,
    Grid,
    Button,
} from "@nextui-org/react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import React, { useState } from "react";
import "dayjs/locale/it";

import "../../components/phoneInput.module.scss";
export default function StepMailPassword({ formData, setFormData, spacing, clickHandler }: any) {



    return (
        <>
            <Text
                size={24}
                weight="bold"
                css={{
                    textAlign: "center",
                    as: "center",
                    mb: "20px",
                }}
            >
                Derweze register
            </Text>
            <Input
                labelPlaceholder="Email"
                name="email"
                value={formData.email || ""}
                onChange={(event) => { setFormData({ ...formData, email: event.target.value }); }}
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Email"
                aria-label="Email"
            />
            <Spacer y={spacing || 1.} />
            <Input.Password
                name="password"
                labelPlaceholder="Password"

                value={formData.password || ""}
                onChange={(event) => { setFormData({ ...formData, password: event.target.value }); }}
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Password"
                aria-label="Password"
            />
            <Spacer y={spacing || 1.7} />

            <Input.Password
                name="rpassword"
                labelPlaceholder="Repeat password"

                value={formData.rpassword || ""}
                onChange={(event) => { setFormData({ ...formData, rpassword: event.target.value }); }}
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Repeat password"
                aria-label="Repeat password"
            />

            <Spacer y={spacing || 1.7} />
            <PhoneInput
                aria-label="Phone input"
                value={formData.phone}
                inputStyle={{
                    color: "black",
                    height: "3em",
                    borderRadius: "15px",
                    width: "100%",
                    borderWidth: "2px",
                }}
                disableDropdown


                dropdownStyle={{ transform: "translate(0%, -100%)" }}
                country={"it"}
                onChange={(phone) => setFormData({ ...formData, phone: phone })}
            ></PhoneInput>

            <Spacer y={spacing || 1.7} />
            <Grid.Container>
                <Grid xs={5}></Grid>
                <Grid xs={7}>
                    <Button
                        css={{
                            width: "100%",
                        }}
                        onClick={(e) => { clickHandler(e, "Data"); }}
                    >
                        Next
                    </Button>
                </Grid>
            </Grid.Container>
        </>
    );
}