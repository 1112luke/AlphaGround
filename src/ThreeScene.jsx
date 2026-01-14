import { Canvas } from "@react-three/fiber";
import { Rocketship } from "./Rocketship";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeScene({ orientation }) {
    const rocketRef = useRef();

    useEffect(() => {
        if (!rocketRef.current || !orientation) return;

        const yaw = (orientation[0] * Math.PI) / 180;
        const pitch = (orientation[1] * Math.PI) / 180;
        const roll = (orientation[2] * Math.PI) / 180;

        // BNO055 → Three.js axis mapping
        const euler = new THREE.Euler(-pitch, -yaw, -roll, "ZYX");

        rocketRef.current.quaternion.setFromEuler(euler);
    }, [orientation]);

    return (
        <Canvas style={{ width: "100%", height: "30%" }} camera={{ fov: 10 }}>
            <Rocketship ref={rocketRef} />

            <ambientLight intensity={5} />
            <directionalLight position={[0, 0, 5]} />
        </Canvas>
    );
}
