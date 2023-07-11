import style from "../styles/modules/header.module.css";
import { lazy } from "react";

const Profile = lazy(() => import("./Profile"));
const Navbar = lazy(() => import("./Navbar"));

export default function Header() {
  return (
    <header className={style.header}>
      <Profile />
      <Navbar />
    </header>
  );
}
