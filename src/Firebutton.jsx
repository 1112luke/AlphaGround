import { useState } from "react";

export default function Firebutton({ commands, sendCommand }) {
    const [firelocked, setfirelocked] = useState(1);

    return (
        <div
            style={{
                width: "90%",
                height: "100px",
                margin: "auto",
                marginTop: "80px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderColor: "red",
                fontFamily: "Space Mono",
                fontSize: "30px",
                position: "relative",
                overflow: "hidden",
                backgroundColor: "red",
            }}
            className={"fire glow"}
            onClick={() => {
                setfirelocked(0);
            }}
        >
            {firelocked ? (
                <div
                    style={{
                        position: "absolute",
                        opacity: "80%",
                        top: "0px",
                        left: "0px",
                        backgroundColor: "green",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "20px",
                    }}
                >
                    Click to UNLOCK
                </div>
            ) : (
                <div
                    style={{
                        position: "absolute",
                        opacity: "0%",
                        top: "0px",
                        left: "0px",
                        backgroundColor: "green",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "20px",
                    }}
                    onClick={() => {
                        sendCommand(commands.FIRE);
                    }}
                >
                    &nbsp;
                </div>
            )}
            FIRE
        </div>
    );
}
