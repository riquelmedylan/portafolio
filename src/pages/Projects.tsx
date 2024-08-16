import "../styles/pages/projects.css";
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
      className="section__projects"
    >
      <h2 className="title">Proyectos</h2>
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
    </motion.section>
  );
}
