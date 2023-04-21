import React from "react";
import { Navbar, Button, Link, Text, Card, Radio, Avatar, Image } from "@nextui-org/react";
import { signOut, useSession } from 'next-auth/react'
import md5 from 'md5';
export default function App({ activeItemId }: any) {
  const session = useSession();
  const [variant, setVariant] = React.useState("static");
  console.log(session.data?.user?.business_name)
  console.log(session)
  const variants = ["static", "floating", "sticky"];

  return (
    <Navbar maxWidth="fluid" isBordered variant={variant} style={{ height: "10vh" }}>
      <Navbar.Brand>
        <Image src="/logo_derweze.png" height="50px" />

      </Navbar.Brand>
      <Navbar.Content />
      <Navbar.Content>
        {session.status == "authenticated" ? (<>
          <Navbar.Link color="inherit" href="/user/bills" isActive={activeItemId == "/user/bills" ? true : false}>
            Bills
          </Navbar.Link>
          <Navbar.Link color="inherit" href="/user/contracts" isActive={activeItemId == "/user/contracts" ? true : false}>
            Contracts
          </Navbar.Link></>)
          : (<></>)}


        <Navbar.Link color="inherit" href="/user/dashboard" isActive={activeItemId == "/user/dashboard" ? true : false}>
          Home
        </Navbar.Link>

        {session.status == "authenticated" ? (<>
          <Navbar.Item >
            <Button onPress={signOut} bordered color="error" size={"xs"}>
              Logout
            </Button>
          </Navbar.Item>
          <Navbar.Item>
            <Avatar
              squared
              src={"https://i.pravatar.cc/150?u=" + md5(session.data?.user?.business_name)} />
          </Navbar.Item></>) : (<>
            <Navbar.Item >
              <Link href="/auth/login">Login</Link>

            </Navbar.Item>
          </>)}

      </Navbar.Content>
    </Navbar>

  )
}