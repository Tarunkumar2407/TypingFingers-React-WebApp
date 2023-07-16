import { createContext, useContext, useState } from "react";
import { ThemeOptions } from "../Utils/ThemeOptions";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {

  const defaultValue = JSON.parse(localStorage.getItem("theme")) || ThemeOptions[0].value;
  const [theme, setTheme] = useState(defaultValue);

  const values = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
