import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePages from "./pages/HomePages";
import MenuPages from "./pages/MenuPages";
import BodyMenuOne from "./components/Menupage/BodyMenuOne";
import AboutPage from "./pages/AboutPages";

export default function App() {

  return(
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePages/>} />
          <Route path="/menu" element={<MenuPages/>} />
          <Route path="/rate" element={<BodyMenuOne/>} />
          <Route path="/about" element={<AboutPage/>} />
        </Routes>
      </Router>
    </div>
  )
}