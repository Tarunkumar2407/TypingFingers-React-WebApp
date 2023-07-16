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
       <div className="links">
       <div className="linkedIn"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" class=" l-logo svg-inline--fa fa-linkedin " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
       <span><a className="linkedin-link" style={{color: theme.textColor}} href="https://www.linkedin.com/in/tarun-kumar-93a2b3131/" target="_blank">LinkedIn</a></span></div>
       
       <div className="github"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="code" class="g-logo svg-inline--fa fa-code " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"></path></svg>
       <span><a className="github-link" style={{color: theme.textColor}} href="https://github.com/Tarunkumar2407" target="_blank">Github</a></span></div></div>
      

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
