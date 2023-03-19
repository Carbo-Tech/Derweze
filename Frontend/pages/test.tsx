import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Input } from "@nextui-org/react";
import PhoneInput from "react-phone-input-2";


function SignupSteps({onSubmit}) {
  const [step, setStep] = useState("MailPasswd");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (showFirstForm) {
      setShowFirstForm(false);
    } else {
      onSubmit({ email, password, address });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {showFirstForm ? (
        <>
          <label>
            Email:
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <br />
          <label>
            Password:
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />
          <button type="submit">Next</button>
        </>
      ) : (
        <>
          <label>
            Address:
            <Input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </>
      )}
    </form>
  );
}


export default MyForm