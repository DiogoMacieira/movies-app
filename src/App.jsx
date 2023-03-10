import React, { useState, useEffect } from "react";
import {Outlet} from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Navbar from "./components/Navbar";
import ThemeContext from "./contexts/ThemeContext";

const GlobalStyles = createGlobalStyle`
    body{
      background-color:${(props) => (props.darkMode ? "#000" : "#cccccc")};
    }
    .container .title {
    color: ${(props) => (props.darkMode ? "#fff" : "#000")};
}
    .movies-container div{
      background-color:${(props) => (props.darkMode ? "#404040" : "#000")};
      color: ${(props) => (props.darkMode ? "#fff" : "#000")};
    }
    .movie-page{
      background-color:${(props) => (props.darkMode ? "#404040" : "#000")};
      color: ${(props) => (props.darkMode ? "#000" : "#fff")};
    }
`;

function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const isDarkModeEnabled = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkModeEnabled);
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);
  return (
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <div className="App">
          <GlobalStyles darkMode={darkMode} />
          <Navbar />
          <Outlet />{/* representa todos os filhos do children das rotas */}
        </div>
      </ThemeContext.Provider>
  );
}
export default App;
