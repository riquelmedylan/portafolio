import style from "./header.module.css";
import { lazy, ReactElement } from "react";

const Profile = lazy(() => import("../Profile/Profile"));
const Navbar = lazy(() => import("../Navbar/Navbar"));

export default function Header(): ReactElement {
    return (
        <header className={style.header}>
            <Profile />
            <Navbar />
        </header>
    );
}