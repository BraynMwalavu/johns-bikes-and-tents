import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import FAQ from "./FAQ";

function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/"; // ✅ Check if current route is Home

  return (
    <>
      {/* ✅ Header always visible */}
      <Header />

      {/* ✅ Main content area — now light beige with dark text */}
      <main className="min-h-screen bg-primary text-neutral-dark">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </main>

      {/* ✅ Footer only on non-home pages */}
      {!isHome && <Footer />}
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
