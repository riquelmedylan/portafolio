'use client';
import { ReactElement, ReactNode, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider } from "@/context/ThemeProvider";
import Background from "@/components/Background/Background";
import ButtonTheme from "@/components/ButtonTheme/ButtonTheme";
import Header from "@/components/Header/Header";
import Head from "next/head";

type Props = {
    children: ReactNode
}

export default function Layout({ children }: Props): ReactElement {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        ease: "linear",
                        duration: 1,
                    }}
                    exit={{ opacity: 0 }}
                    className="board"
                >
                    <ThemeProvider>
                        <ButtonTheme />
                        <Header />
                        <Background />
                    </ThemeProvider>
                    <Suspense fallback={<h1>loading</h1>}>
                        {children}
                    </Suspense>
                </motion.div>
            </AnimatePresence>
        </>
    );
}