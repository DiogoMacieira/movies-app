import React from "react";
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import ThemeProvider from "./contexts/ThemeProvider";
import ThemeSwitch from './contexts/ThemeSwitch';
function App() {

  return (
    <ThemeProvider>
      <div className='App'>
        <Navbar/>
        <ThemeSwitch />
        <Outlet/>
        </div>
        </ThemeProvider>
  );
}
export default App;
