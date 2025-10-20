import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import FAQ from "./FAQ";
import Gallery from "./Gallery";
import WhatsAppButton from "./WhatsAppButton"; // ✅ Import the WhatsApp Button

function Layout() {
  const location = useLocation();

  // Detect Home route
  const isHome = location.pathname === "/";

  return (
    <>
      {/* ✅ Header always visible */}
      <Header />

      {/* ✅ Main content area — unified design */}
      <main className="min-h-screen bg-primary text-neutral-dark">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* ✅ Footer hidden only on Home page */}
      {!isHome && <Footer />}

      {/* ✅ Floating WhatsApp button (always visible) */}
      <WhatsAppButton />
    </>
  );
}

function AppRoutes() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default AppRoutes;
