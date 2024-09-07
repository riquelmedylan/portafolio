import style from "../styles/modules/header.module.css";
import { lazy,ReactElement } from "react";

const Profile = lazy(() => import("./Profile"));
const Navbar = lazy(() => import("./Navbar"));

export default function Header(): ReactElement {
  return (
    <header className={style.header}>
      <Profile />
      <Navbar />
    </header>
  );
}
