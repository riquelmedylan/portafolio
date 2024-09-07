'use client';
import "./information.css";
import Glft from "@/components/gltf/Glft";
import Camera from "@/components/gltf/Camera";
import { motion } from "framer-motion";
import { ReactElement, lazy, useEffect, useState } from "react";
import { MobyBlack } from "@/components/gltf/MobyBlack";
import { YoyWhite } from "@/components/gltf/YoyWhite";
import { YoyBlack } from "@/components/gltf/YoyBlack";
import { MobyWhite } from "@/components/gltf/MobyWhite";
import Head from "next/head";

const Skills = lazy(() => import("@/components/Skills/Skills"));

export default function Information(): ReactElement {
    const [theme, setTheme] = useState<string | null>(
        localStorage.getItem("theme")
    );

    const changeTheme = () => {
        window &&
        window.addEventListener(
            "click",
            (event: any) =>
                event.target.id === "button" && setTheme(localStorage.getItem("theme"))
        );
    };

    useEffect(() => {
        changeTheme();
        return () => {
            window && window.removeEventListener("click", changeTheme, false);
        };
    }, [theme]);

    return (
        <>
            <Head>
                <meta name="description" content="Esta es la sección de la información sobre Dylan Riquelme" />
                <meta title="Portafolio - Información"/>
            </Head>
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
                        <Glft>
                            <Camera position={[-10, 0, 80]} />
                            {theme === "dark" ? <YoyWhite /> : <YoyBlack />}
                        </Glft>
                        <div className="information">
                            <p className="name__job">ICBC - YOY</p>
                            <p className="date">2022 - Actualidad</p>
                            <p className="position">Angular Developer</p>
                        </div>
                    </div>
                    <div className="container__info">
                        <Glft>
                            <Camera position={[0, 0, 50]} />
                            {theme === "dark" ? <MobyWhite /> : <MobyBlack />}
                        </Glft>
                        <div className="information">
                            <p className="name__job">MOBY DIGITAL</p>
                            <p className="date">2022 - Actualidad</p>
                            <p className="position">Angular Developer</p>
                        </div>
                    </div>
                </div>
                <Skills />
            </motion.section>
        </>
    );
};