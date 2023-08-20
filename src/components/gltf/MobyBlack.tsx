import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Curve: THREE.Mesh;
    Curve001: THREE.Mesh;
    Curve002: THREE.Mesh;
    Curve003: THREE.Mesh;
    Curve004: THREE.Mesh;
  };
  materials: {
    ["SVGMat.001"]: THREE.MeshStandardMaterial;
  };
};

export function MobyBlack(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("assets/mobyBlack.gltf") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        material={materials["SVGMat.001"]}
        position={[-4.016, -2.101, -0.022]}
        rotation={[1.567, 0, 0]}
        scale={25.655}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve001.geometry}
        material={materials["SVGMat.001"]}
        position={[-4.016, -2.101, -0.022]}
        rotation={[1.567, 0, 0]}
        scale={25.655}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve002.geometry}
        material={materials["SVGMat.001"]}
        position={[-4.016, -2.101, -0.022]}
        rotation={[1.567, 0, 0]}
        scale={25.655}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve003.geometry}
        material={materials["SVGMat.001"]}
        position={[-4.016, -2.101, -0.022]}
        rotation={[1.567, 0, 0]}
        scale={25.655}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve004.geometry}
        material={materials["SVGMat.001"]}
        position={[-4.016, -2.101, -0.022]}
        rotation={[1.567, 0, 0]}
        scale={25.655}
      />
    </group>
  );
}

useGLTF.preload("assets/mobyBlack.gltf");
