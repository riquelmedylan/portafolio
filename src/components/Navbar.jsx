import { Link, useLocation } from "react-router-dom";
import style from "../styles/modules/header.module.css";

export default function Navbar() {
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
