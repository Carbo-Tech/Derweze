
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
export default function Login() {
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
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Email"
                    />
                    <Spacer y={1} />
                    <Input
                        clearable
                        bordered
                        fullWidth
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
                    <Button>Sign in</Button>
                    <Spacer y={1} />
                    <Text size={14}>No account? <Link href="signup">Create one</Link></Text>

                </Card>
            </Container>
            <Footer />

        </>
    );
}