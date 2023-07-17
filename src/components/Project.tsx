import { Link } from "react-router-dom";
import { ReactElement } from "react";
import { ProjectT } from "../types/Project";

export const Project = ({
  url,
  name,
  technologies,
}: ProjectT): ReactElement => {
  return (
    <div className="project__link">
      <Link target="_blank" to={url} className="link">
        <span className="name">{name}</span>
        <span className="technology">{technologies}</span>
      </Link>
    </div>
  );
};
