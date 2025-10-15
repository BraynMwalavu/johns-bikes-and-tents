import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import FAQ from "./FAQ";

function AppRoutes() {
  return (
    <Router>
      <Header /> {/* ✅ stays on top */}
      <main className="min-h-screen bg-gray-900 text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </main>
      <Footer /> {/* ✅ stays at bottom */}
    </Router>
  );
}

export default AppRoutes;
