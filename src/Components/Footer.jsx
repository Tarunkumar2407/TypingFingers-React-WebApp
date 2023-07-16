import React, { useState } from "react";
import Select from "react-select";
import { ThemeOptions } from "../Utils/ThemeOptions";
import { useTheme } from "../Context/ThemeContext";


const Footer = () => {
  // const [value, setValue] = useState();
  const {setTheme, theme} = useTheme();

  const handleChange = (e) => {
      // setValue(e.value);
      setTheme(e.value);
      localStorage.setItem("theme",JSON.stringify(e.value))
  };
  return (
    <div className="footer">
      <div className="links"> </div>
      <div className="themeButton">
        <Select
          // value={value}
          onChange={handleChange}
          options={ThemeOptions}
          menuPlacement="top"
          defaultValue={{label: theme.label, value: theme}}
          styles ={{
            control: styles => ({...styles, backgroundColor: theme.background}),
            menu: styles => ({...styles, backgroundColor: theme.background}),
            option: (styles, {isFocused}) => {
              return {
                ...styles,
                backgroundColor: (!isFocused) ? theme.background : theme.textColor,
                color: (!isFocused) ? theme.textColor : theme.background,
                cursor: "pointer"
              }
            }
          }}
        />
      </div>
    </div>
  );
};
export default Footer;