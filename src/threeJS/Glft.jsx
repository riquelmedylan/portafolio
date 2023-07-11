import { useEffect, useRef } from "react";
import * as THREE from "three";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

export default function Glft({ glft }) {
  let model;
  const container = useRef(null);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(20, 0.8, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  const controls = new OrbitControls(camera, renderer.domElement);
  const loader = new GLTFLoader();

  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("jsm/libs/draco/gltf/");

  camera.position.set(0, 0, 10);
  camera.zoom = false;
  console.log(camera.zoom);

  renderer.setSize(256, 225);

  const ligth = new THREE.AmbientLight(0xffffff, 0.85, 100);
  ligth.position.set(0, 1, 1);
  ligth.castShadow = true;

  scene.add(ligth);

  const handlerControlsOrbits = () => {
    controls.target.set(0, 0.3, 0);
    controls.update();
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.minDistance = 10;
    controls.maxDistance = 10;
  };

  const handlerLoader = () => {
    loader.setDRACOLoader(dracoLoader);

    loader.load(glft, function (gltf) {
      model = gltf.scene;
      scene.add(gltf.scene);
    });
  };

  handlerControlsOrbits();
  handlerLoader();

  function animate() {
    requestAnimationFrame(animate);
    if (model) {
      model.rotation.y += 0.005;
    }
    controls.minPolarAngle = Math.PI / 2;
    controls.maxPolarAngle = Math.PI / 2;
    renderer.render(scene, camera);
  }

  useEffect(() => {
    animate();

    container.current.appendChild(renderer.domElement);
    return () => container.current?.removeChild(renderer.domElement);
  }, []);

  return <div ref={container}></div>;
}