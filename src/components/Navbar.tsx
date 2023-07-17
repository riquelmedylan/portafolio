import style from "../styles/modules/header.module.css";
import { Link, useLocation } from "react-router-dom";
import { ReactElement } from "react";

export default function Navbar(): ReactElement {
  const { pathname } = useLocation();

  return (
    <ol className={style.list}>
      <li>
        <Link to="/">{pathname === "/" ? "●" : "Inicio"}</Link>
      </li>
      <li>
        <Link to="/projects">
          {pathname === "/projects" ? "●" : "Proyectos"}
        </Link>
      </li>
      <li>
        <Link to="/information">
          {pathname === "/information" ? "●" : "Info"}
        </Link>
      </li>
      <li>
        <Link to="/contact">{pathname === "/contact" ? "●" : "Conctacto"}</Link>
      </li>
    </ol>
  );
}
