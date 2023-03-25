import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Input,Button } from "@nextui-org/react";
import PhoneInput from "react-phone-input-2";
import SignupSteps from './test';

function SignupSteps2({onSubmit}) {
    const [form, setForm] = useState({email:"",password:"",address:""});

  return (
    <SignupSteps form={form} setForm={setForm}></SignupSteps>
  );
}


export default SignupSteps2