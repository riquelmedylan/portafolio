import style from "../styles/pages/information.module.css";
import { motion } from "framer-motion";
import { ReactElement, lazy } from "react";
import { Glft } from "../threeJS/Glft";
const Skills = lazy(() => import("../components/Skills"));

export const Information = (): ReactElement => {
  const YoyGltf = "/assets/yoy.gltf";
  const MobyGltf = "/assets/moby.gltf";

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "linear",
        duration: 1,
      }}
      exit={{ opacity: 0 }}
      className={style.container}
    >
      <p className={style.title}>Experiencia</p>
      <div className={style.containerThree}>
        <div className={style.containerInfo}>
          <Glft glft={YoyGltf} />
          <div className={style.information}>
            <p className={style.name__job}>ICBC - YOY</p>
            <p className={style.date}>2022 - Actualidad</p>
            <p className={style.position}>Angular Developer</p>
          </div>
        </div>
        <div className={style.containerInfo}>
          <Glft glft={MobyGltf} />
          <div className={style.information}>
            <p className={style.name__job}>MOBY DIGITAL</p>
            <p className={style.date}>2022 - Actualidad</p>
            <p className={style.position}>Angular Developer</p>
          </div>
        </div>
      </div>
      <Skills />
    </motion.section>
  );
};
