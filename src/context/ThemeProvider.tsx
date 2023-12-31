import { createContext, useEffect, useState, ReactElement } from "react";
import {
  BaseLayoutProps,
  ThemeContextType,
  ThemeState,
} from "../types/ThemeContext";

const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeProvider = ({ children }: BaseLayoutProps): ReactElement => {
  const [theme, setTheme] = useState<ThemeState>("");

  useEffect(() => {
    if (localStorage.getItem("theme") === "ligth" && "dark") {
      setTheme(localStorage.getItem("theme")!);
      changeDataTheme();
    } else {
      whoTheme();
    }
  }, []);

  const changeDataTheme = () => {
    document.documentElement.setAttribute("data-theme", theme);
  };

  const whoTheme = async () => {
    const userHasLigthTheme = await window.matchMedia(
      "(prefers-color-scheme: ligth)"
    ).matches;

    setTheme(userHasLigthTheme ? "ligth" : "dark");
  };

  const setLocalStorageTheme = () => {
    localStorage.setItem("theme", theme);
  };

  const changeTheme = () => {
    theme === "ligth" ? setTheme("dark") : setTheme("ligth");
  };

  useEffect(() => {
    if (theme) {
      setLocalStorageTheme();
      changeDataTheme();
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };

export default ThemeContext;
