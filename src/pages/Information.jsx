import "../styles/pages/information.css";
import { motion } from "framer-motion";
import { lazy } from "react";

const Glft = lazy(() => import("../threeJS/Glft"));
const Skills = lazy(() => import("../components/Skills"));

export default function Information() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "linear",
        duration: 1,
      }}
      exit={{ opacity: 0 }}
      className="container"
    >
      <p className="title">Experiencia</p>
      <div className="containerThree">
        <div className="container__info">
          <Glft glft="./src/assets/yoy.gltf" />
          <div className="information">
            <p className="name__job">ICBC - YOY</p>
            <p className="date">2022 - Actualidad</p>
            <p className="position">Angular Developer</p>
          </div>
        </div>
        <div className="container__info">
          <Glft glft="./src/assets/moby.gltf" />
          <div className="information">
            <p className="name__job">MOBY DIGITAL</p>
            <p className="date">2022 - Actualidad</p>
            <p className="position">Angular Developer</p>
          </div>
        </div>
      </div>
      <Skills />
    </motion.section>
  );
}