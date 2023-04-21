import { Spacer, Text, Input, Grid, Button, Checkbox } from "@nextui-org/react";
import "react-phone-input-2/lib/material.css";
import React, { useState } from "react";

export default function ContractData({ formData, setFormData, spacing, clickHandler, }: any) {
    return (
        <>

            <Grid.Container>
                <Grid xs={5}>

                    <Checkbox
                        name="Gas"
                        isSelected={formData["gas"]}
                        onChange={(event) => {
                            setFormData({ ...formData, gas: !formData["gas"]  });
                        }}
                    >
                        Gas
                    </Checkbox>

                </Grid>
                <Grid xs={2}></Grid>
                <Grid xs={5}>
                    <Checkbox
                        name="Electricity"
                        isSelected={formData["electricity"]}
                        onChange={(event) => {
                            setFormData({ ...formData, electricity: !formData["electricity"]  });

                        }}
                    >
                        Electricity
                    </Checkbox>

                </Grid>

                <Grid xs={12}>
                    <Spacer y={spacing || 1.7} />
                </Grid>





                <Grid xs={5}>

                    <Checkbox
                        name="commercial_use"
                        isSelected={formData["commercial_use"]}
                        onChange={(event) => {
                            setFormData({ ...formData, commercial_use: !formData["commercial_use"]  });
                        }}
                    >
                        Commercial use?
                    </Checkbox>

                </Grid>
                <Grid xs={2}></Grid>
                <Grid xs={5}>
                    <Checkbox
                        name="production_hot_sanitary_water"
                        isSelected={formData["production_hot_sanitary_water"]}
                        onChange={(event) => {
                            setFormData({ ...formData, production_hot_sanitary_water: !formData["production_hot_sanitary_water"]  });

                        }}
                    >
                        Produce hot sanitary water?
                    </Checkbox>

                </Grid>

                <Grid xs={12}>
                    <Spacer y={spacing || 1.7} />
                </Grid>


                <Grid xs={5}>

                    <Checkbox
                        name="individual_heating"
                        isSelected={formData["individual_heating"]}
                        onChange={(event) => {
                            setFormData({ ...formData, individual_heating: !formData["individual_heating"]  });
                        }}
                    >
                        Individual heating?
                    </Checkbox>

                </Grid>
                <Grid xs={2}></Grid>
                <Grid xs={5}>
                    <Checkbox
                        name="use_cooking_foods"
                        isSelected={formData["use_cooking_foods"]}
                        onChange={(event) => {
                            setFormData({ ...formData, use_cooking_foods: !formData["use_cooking_foods"]  });

                        }}
                    >
                        Cook food?
                    </Checkbox>

                </Grid>

                <Grid xs={12}>
                    <Spacer y={spacing || 1.7} />
                </Grid>

   
            </Grid.Container>
            <Grid.Container>
                <Grid xs={3}>

                </Grid>
                <Grid xs={9}>
                    <Button
                        type="submit"
                        css={{
                            width: "100%",
                        }}
                        onClick={(e) => {
                            clickHandler(e, "Address");
                        }}
                    >
                        Next
                    </Button>
                </Grid>
            </Grid.Container>
        </>
    );
}
