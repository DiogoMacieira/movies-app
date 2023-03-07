import React, { useState } from "react";
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import {createGlobalStyle} from "styled-components";
import ThemeContext from "./contexts/ThemeContext";

const GlobalStyle = createGlobalStyle`
    body {
    background-color: ${props=>props.darkMode ? '#000':"#cccccc"};   
  }`

function App() {
 const [darkMode,setDarkMode] = useState({initalState:false})
  return (
      <div className='App'>
        <ThemeContext.Provider value={{darkMode,setDarkMode}}>
          <GlobalStyle darkMode={darkMode}/>
        <Navbar/>
        <Outlet/>
        </ThemeContext.Provider>
      </div>
  );
}
export default App;
