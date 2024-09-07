import { ReactElement } from "react";
import { PerspectiveCamera } from "@react-three/drei";

type CameraT = {
  position: [x: number, y: number, z: number];
};
const Camera = ({ position }: CameraT): ReactElement => {
  return <PerspectiveCamera makeDefault fov={5} position={position} />;
};

export default Camera;
