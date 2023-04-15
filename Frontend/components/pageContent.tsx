
import { Spacer } from '@nextui-org/react';

export default function Content(props) {
    return (
        <>
            <div style={{ minHeight: "90vh" }}>

                <div style={{ backgroundColor: "#333333", margin: "10vh", display: "flex", flexDirection: "column", minHeight: "80vh", borderRadius: "10px" , padding:"5%"}}>
                    {props.children}
                </div>
            </div>
        </>
    )
}
