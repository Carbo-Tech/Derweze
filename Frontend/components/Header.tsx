import React from "react";
import {
  Navbar,
  Button,
  Link,
  Text,
  Card,
  Radio,
  Avatar,
} from "@nextui-org/react";

export default function App() {
  const [variant, setVariant] = React.useState<"static" | "floating" | "sticky">("static");

  const variants = ["static", "floating", "sticky"];

  return (
    <Navbar isBordered variant={variant}>
      <Navbar.Brand>
        <img src="logo_derweze.png" height="50px" alt="logo derweze"/>
      </Navbar.Brand>
      <Navbar.Content />

      <Navbar.Content>
        <Navbar.Link color="inherit" href="/login">
          Logout
        </Navbar.Link>
        <Navbar.Item>
          <Avatar
            squared
            src="https://i.pravatar.cc/150?u=a042981ffe290260243"
          />
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
}
