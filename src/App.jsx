import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/common/NavBar";
import HomePage from "./components/home/HomePage";
import FooterComponent from "./components/common/Footer";
import React from "react";
import "./index.css";
import AllRoomsPage from "./components/booking_rooms/AllRoomsPage";
import FindBookingPage from "./components/booking_rooms/FIndBookingPage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/rooms" element={<AllRoomsPage />} />
        <Route path="/find-booking" element={<FindBookingPage />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
