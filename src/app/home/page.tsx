'use client';
import style from "./home.module.css";
import { ReactElement } from "react";
import { motion } from "framer-motion";

export default function Home(): ReactElement {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                ease: "linear",
                duration: 1,
            }}
            exit={{ opacity: 0 }}
        >
            <p className={style.text}>
                Naci en 2003, Buenos Aires, Argentina. En la adolescencia empece a
                interesarme por el desarrollo web. la mision que tengo actualmente es
                seguir desarrollándome como desarrollador y persona.
            </p>
        </motion.div>
    );
}