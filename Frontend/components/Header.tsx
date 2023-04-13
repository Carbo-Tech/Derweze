import React from "react";
import { Navbar, Button, Link, Text, Card, Radio, Avatar,Image } from "@nextui-org/react";
import { signOut, useSession } from 'next-auth/react'
import md5 from 'md5';
export default function App() {
  const session = useSession();
  const [variant, setVariant] = React.useState("static");
console.log(session.data?.user?.business_name)
console.log(session)
  const variants = ["static", "floating", "sticky"];

  return (
    <Navbar maxWidth="fluid" isBordered variant={variant}>
      <Navbar.Brand>
        <Image src="logo_derweze.png" height="50px" />

      </Navbar.Brand>
      <Navbar.Content />
      <Navbar.Content>
        {session.status=="authenticated" ? (<>
          <Navbar.Link color="inherit" href="/bills">
            Bills
          </Navbar.Link>
          <Navbar.Link color="inherit" href="/contracts">
            Contracts
          </Navbar.Link>
          <Navbar.Link color="inherit" href="/usage">
            Usage
          </Navbar.Link></>)
          : (<></>)}


        <Navbar.Link color="inherit" href="/home">
          Home
        </Navbar.Link>

        {session.status=="authenticated" ? (<>
          <Navbar.Item onClick={signOut}>
            Logout
          </Navbar.Item>
          <Navbar.Item>
          <Avatar
            squared
            src={ "https://i.pravatar.cc/150?u="+md5(session.data?.user?.business_name)} />
        </Navbar.Item></>) : (<>
            <Navbar.Item >
              <Link href="/auth/login">Login</Link>
              
            </Navbar.Item>
          </>)}

      </Navbar.Content>
    </Navbar>

  )
}