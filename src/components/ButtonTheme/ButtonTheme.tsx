'use client';
import style from "./button.module.css";
import useTheme from "@/hooks/useTheme";
import { ReactElement } from "react";

export default function ButtonTheme(): ReactElement {
  const { theme, changeTheme } = useTheme()!;

  return (
    <button id="button" className={style.button} onClick={changeTheme}>
      {theme === "dark" ? "light" : "dark"}
    </button>
  );
}