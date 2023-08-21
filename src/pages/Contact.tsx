import "../styles/pages/contact.css";
import { motion } from "framer-motion";
import { ReactElement } from "react";
import { Link } from "react-router-dom";

export default function Contact(): ReactElement {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "linear",
        duration: 1,
      }}
      exit={{ opacity: 0 }}
      className="container__contact"
    >
      <Link target="blank" to="https://www.linkedin.com/in/dylan-riquelme03907425123/">
        <i className="fa-brands fa-linkedin-in"></i>
      </Link>
      <Link target="blank" to="https://www.instagram.com/dyriquelme_/">
        <i className="fa-brands fa-instagram"></i>
      </Link>
      <Link target="blank" to="https://github.com/riquelmedylan">
        <i className="fa-brands fa-github-alt"></i>
      </Link>
      <Link target="blank" to="mailto:riquelmedylan0@gmail.com?Subject=Contacto">
        <i className="fa-solid fa-envelope"></i>
      </Link>
    </motion.div>
  );
}
