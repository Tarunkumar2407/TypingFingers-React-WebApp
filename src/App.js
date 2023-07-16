import { GlobalStyles } from "./Styles/Global";
import { ThemeProvider } from "styled-components";
import { useTheme } from "./Context/ThemeContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import HomePage from "./Pages/HomePage";
import UserPage from "./Pages/UserPage";
import { Route, Routes } from "react-router-dom";

function App() {
  const {theme} = useTheme();
  return (
    <ThemeProvider theme = {theme}>
      <ToastContainer />
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="user" element={<UserPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
