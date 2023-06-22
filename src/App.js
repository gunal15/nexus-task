import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopBar from "./components/TopBar";
import HomePage from "./components/HomePage";
import BurgerMenuPage from "./components/BurgerMenuPage";
import "./App.css";

const App = () => {
  return (
    <Router>
      <TopBar />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<BurgerMenuPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
