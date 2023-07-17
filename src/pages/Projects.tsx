import style from "../styles/pages/projects.module.css";
import { motion } from "framer-motion";
import { Project } from "../components/Project";
import { ReactElement } from "react";

export default function Projects(): ReactElement {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "linear",
        duration: 1,
      }}
      exit={{ opacity: 0 }}
      className={style.sectionProjects}
    >
      <h2 className={style.title}>Proyectos</h2>
      <Project
        url={"https://riquelmedylan.github.io/ProyectoApiRickAndMorty/"}
        name={"Rick and Morty"}
        technologies={"Javascript / HTML / CSS"}
      />
      <Project
        url={"https://weather-app-rd.netlify.app/"}
        name={"Weather App"}
        technologies={"React / Sass"}
      />
      <Project
        url={"https://journalapp-rd.netlify.app/auth/login"}
        name={"Journal App"}
        technologies={"React / Sass / Firebase"}
      />
      <Project
        url={"https://app-music-rd.netlify.app/"}
        name={"Music App"}
        technologies={"React / Sass / Node / MongoDb"}
      />
    </motion.section>
  );
}
