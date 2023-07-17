import "./styles/App.css";
import { Suspense, lazy, ReactElement } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeProvider";

const ButtonTheme = lazy(() => import("./components/ButtonTheme"));
const Header = lazy(() => import("./components/Header"));
const Background = lazy(() => import("./components/Background"));

function Layout(): ReactElement {
  return (
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
          <Outlet />
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
}

export default Layout;
