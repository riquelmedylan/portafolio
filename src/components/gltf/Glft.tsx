import Camera from "./Camera";
import Lights from "./Lights";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ReactElement } from "react";
import { BaseLayoutProps } from "../../types/ThemeContext";

export default function Glft({ children }: BaseLayoutProps): ReactElement {
  return (
    <>
      <Canvas style={{ maxWidth: "300px" }}>
        <Lights />
        <Camera position={[-10, 0, 80]} />
        {children}
        <OrbitControls
          autoRotate={true}
          autoRotateSpeed={10}
          enableZoom={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </>
  );
}
