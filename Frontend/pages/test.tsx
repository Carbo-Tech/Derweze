import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Input,Button } from "@nextui-org/react";
import PhoneInput from "react-phone-input-2";


function SignupSteps({form,setForm}) {
  const [step, setStep] = useState("MailPasswd");

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const handleSubmit=(value)=>{
    value.preventDefault();
    console.log(form);
  }


  return (
    <form onSubmit={handleSubmit} action="">
      {step=="MailPasswd" ? (
        <>
          <label>
            Email:
            <Input type="email" value={form.email} onChange={(e) => setForm({...form,email: e.target.value})} />
          </label>
          <br />
          <label>
            Password:
            <Input type="password" value={form.password} onChange={(e) => setForm({...form,password: e.target.value})} />
          </label>
          <br />
          <Button onPress={(e)=>{setStep("Address")}}>Next</Button>
        </>
      ) : (
        <>
          <label>
            Address:
            <Input type="text" value={form.address} onChange={(e) => setForm({...form,address: e.target.value})} />
          </label>
          <br />
          <button onClick={(e)=>console.log()}>Submit</button>
        </>
      )}
    </form>
  );
}


export default SignupSteps