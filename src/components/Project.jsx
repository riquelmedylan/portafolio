import { Link } from "react-router-dom";

export const Project = ({ url, name, technologies }) => {
  return (
    <div className="project__link">
      <Link to={url} className="link">
        <span className="name">{name}</span>
        <span className="technology">{technologies}</span>
      </Link>
    </div>
  );
};
