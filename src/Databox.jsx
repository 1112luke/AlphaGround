import { useState } from "react";
import Datachart from "./Datachart";

export default function Databox({ title, data, chartdata = [] }) {
    const [hovered, sethovered] = useState([]);

    return (
        <div
            style={{
                width: "100%",
                backgroundColor: "var(--dark-blue)",
                overflow: "hidden",
                marginTop: "10px",
                flex: 1,
                fontFamily: "Space Mono",
                fontWeight: "400",
                fontStyle: "normal",
            }}
            className="glow"
        >
            <div
                style={{
                    textAlign: "center",
                    color: "var(--dark-yellow)",
                    margin: "10px",
                    fontSize: "20px",
                }}
            >
                <b>
                    <i>{title}</i>
                </b>
            </div>
            <ul
                style={{
                    listStyleType: "none",
                    margin: "0px",
                    marginBottom: "20px",
                    padding: "0px",
                    textAlign: "Center",
                }}
            >
                {data.map((item, index) => {
                    return (
                        <li
                            onMouseEnter={() => {
                                sethovered((prev) => {
                                    var newd = prev;
                                    newd[index] = 1;

                                    return newd;
                                });
                            }}
                            onMouseLeave={() => {
                                sethovered((prev) => {
                                    var newd = prev;
                                    newd[index] = 0;

                                    return newd;
                                });
                            }}
                            className="lihover"
                        >
                            <p style={{ margin: "2px" }}>
                                {index}: {item ? item.toFixed(2) : "--"}
                            </p>
                            {hovered[index] ? (
                                <Datachart data={chartdata[index]}></Datachart>
                            ) : (
                                <></>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
