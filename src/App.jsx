import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/common/NavBar";
import HomePage from "./components/home/HomePage";
import FooterComponent from "./components/common/Footer";
import React from "react";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
