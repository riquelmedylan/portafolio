import style from "../styles/modules/button.module.css";
import useTheme from "../useThemeContext";

export default function ButtonTheme() {
  const { theme, changeTheme } = useTheme();

  return (
    <button className={style.button} onClick={changeTheme}>
      {theme === "dark" ? "ligth" : "dark"}
    </button>
  );
}
