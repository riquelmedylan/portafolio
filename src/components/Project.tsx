import style from "../styles/pages/projects.module.css";
import { Link } from "react-router-dom";
import { ReactElement } from "react";
import { ProjectT } from "../types/Project";

export const Project = ({
  url,
  name,
  technologies,
}: ProjectT): ReactElement => {
  return (
    <div className={style.projectLink}>
      <Link target="_blank" to={url} className={style.link}>
        <span className={style.name}>{name}</span>
        <span className={style.technology}>{technologies}</span>
      </Link>
    </div>
  );
};
