
import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Curve: THREE.Mesh;
    Curve001: THREE.Mesh;
    Curve002: THREE.Mesh;
  };
  materials: {
    ["SVGMat.001"]: THREE.MeshStandardMaterial;
  };
};

export function YoyBlack(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("assets/yoyBlack.gltf") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        material={materials["SVGMat.001"]}
        position={[-5.193, -3.535, -0.026]}
        rotation={[1.59, 0, -0.001]}
        scale={35.199}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve001.geometry}
        material={materials["SVGMat.001"]}
        position={[-5.193, -3.535, -0.026]}
        rotation={[1.59, 0, -0.001]}
        scale={35.199}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve002.geometry}
        material={materials["SVGMat.001"]}
        position={[-5.193, -3.535, -0.026]}
        rotation={[1.59, 0, -0.001]}
        scale={35.199}
      />
    </group>
  );
}

useGLTF.preload("assets/yoyBlack.gltf");