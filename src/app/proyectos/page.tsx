'use client';
import "./project.css";
import { motion } from "framer-motion";
import { Project } from "@/components/Project/Project";
import { ReactElement } from "react";
import Head from "next/head";

export default function Projects(): ReactElement {
    return (
        <>
            <Head>
                <meta name="description" content="Esta es la sección de proyectos sobre Dylan Riquelme" />
                <meta title="Portafolio - Proyectos"/>
            </Head>
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
        </>

    );
}