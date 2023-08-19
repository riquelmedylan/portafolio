import "../styles/pages/information.css";
import { motion } from "framer-motion";
import { ReactElement, lazy, useEffect, useMemo, useState } from "react";
import { Glft } from "../threeJS/Glft";
const Skills = lazy(() => import("../components/Skills"));
enum glft {
  YoyWhite = "/assets/yoyWhite.gltf",
  YoyBlack = "/assets/yoyBlack.gltf",
  MobyWhite = "/assets/mobyWhite.gltf",
  MobyBlack = "/assets/mobyBlack.gltf",
}

export const Information = (): ReactElement => {
  const [theme, setTheme] = useState<any>(localStorage.getItem("theme"));

  const changee = () => {
    window.addEventListener("click", (event: any) => {
      if (event.target.id === "button") {
        theme === "dark" ? setTheme("ligth") : setTheme("dark");
      }
    });
  };

  useEffect(() => {
    changee();
    return () => {
      window.removeEventListener("click", changee, false);
    };
  }, [theme]);

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
      <p className="titleInfo">Experiencia</p>
      <div className="containerThree">
        <div className="container__info">
          {theme === "dark" ? <Glft glft={glft.YoyWhite} /> : null}
          {theme === "ligth" ? <Glft glft={glft.YoyBlack} /> : null}
          <div className="information">
            <p className="name__job">ICBC - YOY</p>
            <p className="date">2022 - Actualidad</p>
            <p className="position">Angular Developer</p>
          </div>
        </div>
        <div className="container__info">
          {theme === "dark" ? <Glft glft={glft.MobyWhite} /> : null}
          {theme === "ligth" ? <Glft glft={glft.MobyBlack} /> : null}
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
};
