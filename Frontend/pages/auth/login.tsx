import {
    Card,
    Spacer,
    Button,
    Text,
    Link,
    Modal,
    Image,
    Input,
    Row,
    Checkbox,
    Container,
} from '@nextui-org/react';
import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { getProviders, signIn } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { getCsrfToken } from "next-auth/react"

import { authOptions } from "../api/auth/[...nextauth]"
import { useRouter } from 'next/router';
import Footer from '../../components/Footer/footer';
import { FormEventHandler, useState } from 'react';

export default function Login() {
    const [userData, setUserData] = useState([]);
    const router = useRouter();

    function Login() {
        fetch("/api/login", {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(formData)

        })
            .then(response => response.json())
            .then(res => { setUserData(res["message"]["reso"].replace("(", "").replace(")", "").replace("[", "").replace("]", "").split(",")); console.log(res) })
            .catch(err => console.log(err))
    };

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault()
        const res = await signIn("credentials", { email: formData["email"], password: formData["password"], redirect: false })
        console.log(res)
    }

    const [visible, setVisible] = useState(false);
    const handler = () => setVisible(true);

    const closeHandler = () => setVisible(false);
    const [formData, setFormData] = useState({ email: "", password: "" })

    return (
        <>
            <Container
                aria-label="login-content"
                display="flex"
                alignItems="center"
                justify="center"
                css={{ minHeight: '100vh' }}
            >
                <Modal
                    closeButton
                    aria-labelledby="modal-title"
                    open={visible}
                    onClose={closeHandler}
                >
                    <Modal.Body>
                        <Text id="modal-body" size={18}>
                            Welcome
                            <br />
                            <Text b size={18}>
                                {userData.map(user => <><span>{user}</span><br></br></>)}
                            </Text>
                        </Text>
                    </Modal.Body>
                </Modal>
                <Card
                    aria-label="login-card"
                    css={{ mw: '450px', p: '40px' }}
                >
                    <Image
                        src="/logo_derweze.png"
                        alt="Default Image"
                        width={80}
                        height={80}
                    />
                    <Text
                        aria-label="login-title"
                        size={24}
                        weight="bold"
                        css={{
                            as: 'center',
                            mb: '20px',
                        }}
                    >
                        Derweze Login
                    </Text>
                    <form onSubmit={handleSubmit}>

                        <Input
                            aria-label="login-email-input"
                            name="email"
                            value={formData["email"]}
                            onChange={(event) => { setFormData({ ...formData, email: event.target.value });  }}
                            clearable
                            bordered
                            fullWidth
                            color="primary"
                            size="lg"
                            placeholder="Email"
                        />
                        <Spacer y={1} />
                        <Input
                            aria-label="login-password-input"
                            name="password"
                            value={formData["password"]}
                            onChange={(event) => { setFormData({ ...formData, password: event.target.value });  }}
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
                            aria-label="login-submit-button"
                            css={{
                                width: "100%",
                            }}
                            type="submit"
                        >
                            Sign in
                        </Button>
                        <Spacer y={1} />
                        <Text size={14}>No account? <Link href="signup">Create one</Link></Text>
                    </form>
                </Card>
            </Container>
            <Footer />
        </>
    );
}