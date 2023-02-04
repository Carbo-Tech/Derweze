
import { Modal, useModal, Button, Text } from "@nextui-org/react";
export default function Policy({ children }:any) {
    const { setVisible, bindings } = useModal();
    return (
        <>
            <Button light onClick={() => setVisible(true)}>
                {children}
            </Button>
            <Modal
                scroll
                blur
                width="600px"
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                {...bindings}
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        Privacy Policy
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Text id="modal-description">
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                        ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                        magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                        purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                        egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                        vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                        nisl consectetur et. Cras mattis consectetur purus sit amet
                        fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                        quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                        ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                        magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                        purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                        egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                        vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                        nisl consectetur et. Cras mattis consectetur purus sit amet
                        fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                        quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                        ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                        magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                        purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                        egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                        vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                        nisl consectetur et. Cras mattis consectetur purus sit amet
                        fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                        quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                        ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                        magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                        purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                        egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                        vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                        nisl consectetur et. Cras mattis consectetur purus sit amet
                        fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                        quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                        ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                        magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                        purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                        egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                        vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                        nisl consectetur et. Cras mattis consectetur purus sit amet
                        fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                        quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                        ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                        magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                        purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                        egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                        vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                        nisl consectetur et. Cras mattis consectetur purus sit amet
                        fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                        quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                        ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                        magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                        purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                        egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                        vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                        nisl consectetur et. Cras mattis consectetur purus sit amet
                        fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                        quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                        ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                        magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                        purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                        egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                        vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                        nisl consectetur et. Cras mattis consectetur purus sit amet
                        fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                        quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                        ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                        magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                        purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                        egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                        vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                        nisl consectetur et. Cras mattis consectetur purus sit amet
                        fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                        quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                        ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                        magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                        purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                        egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                        vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                        nisl consectetur et. Cras mattis consectetur purus sit amet
                        fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                        quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                        ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                        magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                        purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                        egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                        vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                        nisl consectetur et. Cras mattis consectetur purus sit amet
                        fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                        quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                        ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                        magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                        purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                        egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                        vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                        nisl consectetur et. Cras mattis consectetur purus sit amet
                        fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                        quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                        ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                        magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                        purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                        egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                        vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                        nisl consectetur et. Cras mattis consectetur purus sit amet
                        fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                        quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                        ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                        magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                        purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                        egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                        vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                        nisl consectetur et. Cras mattis consectetur purus sit amet
                        fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                        quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                        ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                        magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                        purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                        egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                        vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                        nisl consectetur et. Cras mattis consectetur purus sit amet
                        fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                        quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                        ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                        magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                        purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                        egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                        vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                        nisl consectetur et. Cras mattis consectetur purus sit amet
                        fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                        quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                        ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                        magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                        purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                        egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                        vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                        nisl consectetur et.
                    </Text>
                </Modal.Body>
                <Modal.Footer>          
                    <Button auto flat color="error" onPress={() => setVisible(false)}>
                    Close
                </Button>
                    <Button auto onPress={() => setVisible(false)}>
                        Agree
                    </Button>
                </Modal.Footer>
            </Modal></>)
}