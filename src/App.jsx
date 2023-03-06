import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className='App'>
        <Navbar/>
        <Outlet/>
      </div>
    </ThemeProvider>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);

export default App;
