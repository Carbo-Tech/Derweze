import "@nextui-org/react";
import { Navbar, Text } from "@nextui-org/react";
import Policy from "../privacyPolicy";
import Eula from "../eula";

export default function Footer() {

  return (
    <div style={{ marginTop: "auto" }}>
      <footer style={{ marginTop: "auto" }}>
        <Navbar isBordered maxWidth="fluid" variant="sticky">
          <Navbar.Brand>

            <span>
              <Text b small>
                Carbotech S.r.l

              </Text><br />
              <Text small>
                Copyright © 2022, Carbotech, Inc.
              </Text>
            </span>
          </Navbar.Brand>
          <Navbar.Content hideIn="xs">
            <Navbar.Item hideIn="xs">

              <>
                <Policy>Privacy Policy</Policy>
                <Eula>EULA</Eula>

              </>

            </Navbar.Item>


            <Navbar.Item hideIn="xs">

              <span>
                <Text>
                  Contacts

                </Text>
                <Text>
                  +39 420 069 1337
                </Text>
                <Text>
                  info@carbotech.it

                </Text>
              </span>
            </Navbar.Item>

            <Navbar.Item hideIn="xs">
              <span>
                <Text>
                  Piazzale Guardini, 1

                </Text>
                <Text >
                  Verona, Veneto

                </Text>
                <Text >
                  Italy

                </Text>

              </span>
            </Navbar.Item>
          </Navbar.Content>

        </Navbar>

      </footer>
    </div>)
}
