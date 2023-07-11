import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState();

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(JSON.stringify(localStorage.getItem("theme")).slice(1, -1));
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
