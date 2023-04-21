import { Spacer, Text, Input, Grid, Button } from "@nextui-org/react";
import "react-phone-input-2/lib/material.css";
import React, { useState } from "react";
import "dayjs/locale/it";
import "../../components/phoneInput.module.scss";

export default function StepAddress({ formData, setFormData, spacing, clickHandler,showText=false }: any) {
    return (
        <>
        {showText &&
            <Text
                size={24}
                weight="bold"
                css={{
                    textAlign: "center",

                    as: "center",
                    mb: "20px",
                }}
            >
                
                Derweze address
            </Text>}
            <Grid.Container>
                <Grid xs={6}>
                    <Input
                        clearable
                        bordered
                        name="Nation"
                        value={formData["nation"]}
                        onChange={(event) => {
                            setFormData({ ...formData, nation: event.target.value });
                        }}
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
                        onChange={(event) => {
                            setFormData({ ...formData, province: event.target.value });
                        }}
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Province"
                        aria-label="province"
                    />
                </Grid>

                <Grid xs={12}>
                    <Spacer y={spacing || 1.7} />
                </Grid>

                <Grid xs={7}>
                    <Input
                        clearable
                        bordered
                        name="city"
                        value={formData["city"]}
                        onChange={(event) => {
                            setFormData({ ...formData, city: event.target.value });
                        }}
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
                        onChange={(event) => {
                            setFormData({ ...formData, zipCode: event.target.value });
                        }}
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Zip"
                        aria-label="Zip"
                    />
                </Grid>

                <Grid xs={12}>
                    <Spacer y={spacing || 1.7} />
                </Grid>

                <Grid xs={9}>
                    <Input
                        clearable
                        bordered
                        name="street"
                        value={formData["street"]}
                        onChange={(event) => {
                            setFormData({ ...formData, street: event.target.value });
                        }}
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
                        onChange={(event) => {
                            setFormData({ ...formData, streetNumber: event.target.value });
                        }}
                        color="primary"
                        size="lg"
                        placeholder="N."
                        aria-label="Street number"
                    />
                </Grid>
            </Grid.Container>
            <Spacer y={spacing || 1.7} />

            <Grid.Container>
                <Grid xs={3}>
                    <Button
                        auto
                        onClick={(e) => {
                            clickHandler(e, "Data");
                        }}
                    >
                        &lt;
                    </Button>
                </Grid>
                <Grid xs={9}>
                    <Button
                        type="submit"
                        css={{
                            width: "100%",
                        }}
                    >
                        Complete
                    </Button>
                </Grid>
            </Grid.Container>
        </>
    );
}
