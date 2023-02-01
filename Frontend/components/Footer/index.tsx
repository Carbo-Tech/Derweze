import  "@nextui-org/react";
import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";

const variants = ["static", "floating", "sticky"];
export default function Footer(){
    return(<>
        <Navbar isBordered maxWidth="fluid" variant={variants[0]}>
        <Navbar.Brand>

          <Text b color="inherit" hideIn="xs">
            Footer che devo fare
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link isActive href="#">Customers</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>    
    
    
    </>)
}
