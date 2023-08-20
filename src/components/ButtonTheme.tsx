import { ReactElement } from "react";
import style from "../styles/modules/button.module.css";
import useTheme from "../useThemeContext";

export default function ButtonTheme(): ReactElement {
  const { theme, changeTheme } = useTheme()!;

  return (
    <button id="button" className={style.button} onClick={changeTheme}>
      {theme === "dark" ? "light" : "dark"}
    </button>
  );
}
