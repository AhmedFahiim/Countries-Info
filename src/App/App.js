import React, { useState, useEffect } from "react";
import "./App.scss";

import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { Home, Details } from "../Pages";

export const ThemeContext = React.createContext();
export const Data = React.createContext();

function App() {
  const [data, setData] = useState([]);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((response) => setData(response.data));
  }, []);

  return (
    <Data.Provider value={[data, setData]}>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <div className={`App ${theme == "light" ? "light" : "dark"}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:name" element={<Details />} />
          </Routes>
        </div>
      </ThemeContext.Provider>
    </Data.Provider>
  );
}

export default App;
