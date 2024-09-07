'use client';
import "./contact.css";
import { motion } from "framer-motion";
import { ReactElement } from "react";
import Link from "next/link";
import Head from "next/head";

export default function Contact(): ReactElement {
    return (
        <>
            <Head>
                <meta name="description" content="Esta es la sección de contacto de Dylan Riquelme" />
                <meta title="Portafolio - Conctacto"/>
            </Head>
            <motion.footer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    ease: "linear",
                    duration: 1,
                }}
                exit={{ opacity: 0 }}
                className="footer"
            >
                <Link
                    target="blank"
                    href="https://www.linkedin.com/in/dylan-riquelme03907425123/"
                >
                    <i className="fa-brands fa-linkedin-in"></i>
                </Link>
                <Link target="blank" href="https://www.instagram.com/dyriquelme_/">
                    <i className="fa-brands fa-instagram"></i>
                </Link>
                <Link target="blank" href="https://github.com/riquelmedylan">
                    <i className="fa-brands fa-github-alt"></i>
                </Link>
                <Link
                    target="blank"
                    href="mailto:riquelmedylan0@gmail.com?Subject=Contacto"
                >
                    <i className="fa-solid fa-envelope"></i>
                </Link>
            </motion.footer>
        </>
    );
}