
import {
    Card,
    Spacer,
    Button,
    Text,
    Link,
    Image,
    Input,
    Row,
    Checkbox,
    Container,
} from '@nextui-org/react';
import Footer from '../components/Footer';
import { useState } from 'react';
export default function Login() {
    function Login() {
        fetch("/api/login", {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(formData) // body data type must match "Content-Type" header

        })
            .then(response => response.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))

    };
    function clickHandler(e:any) {
        Login()
        console.log(formData);
    }
    const [formData, setFormData] = useState({email:"",pww:""})
    return (
        <>
            <Container

                display="flex"
                alignItems="center"
                justify="center"
                css={{ minHeight: '100vh' }}
            >
                <Card css={{ mw: '450px', p: '40px' }}>
                    <Image
                        src="logo_derweze.png"
                        alt="Default Image"
                        width={80}
                        height={80}
                    />
                    <Text
                        size={24}
                        weight="bold"
                        css={{
                            as: 'center',
                            mb: '20px',
                        }}
                    >
                        Derweze Login
                    </Text>
                    <Input
                        value={formData["email"]}
                        onChange={(event) => { setFormData({ ...formData, email: event.target.value }); console.log(formData) }}
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Email"
                    />
                    <Spacer y={1} />
                    <Input
                        value={formData["pww"]}
                        onChange={(event) => { setFormData({ ...formData, pww: event.target.value }); console.log(formData) }}
                        clearable
                        bordered
                        fullWidth
                        type="password"

                        color="primary"
                        size="lg"
                        placeholder="Password"
                    />
                    <Spacer y={1} />

                    <Row justify="space-between">
                        <Checkbox>
                            <Text size={14}>Remember me</Text>
                        </Checkbox>
                        <Text size={14}>Forgot password?</Text>
                    </Row>
                    <Spacer y={1} />
                    <Button
                        css={{
                            width: "100%",
                        }}
                        onClick={(e) => { clickHandler(e); }}
                    >
                        Sign in
                    </Button>
                    <Spacer y={1} />
                    <Text size={14}>No account? <Link href="signup">Create one</Link></Text>

                </Card>
            </Container>
            <Footer />

        </>
    );
}