import style from "../styles/modules/error.module.css";
import { motion } from "framer-motion";
import { ReactElement } from "react";

export default function Error({ error }: { error: string }): ReactElement {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        ease: "linear",
        duration: 1,
      }}
      className={style.text}
    >
      {error}
    </motion.p>
  );
}
