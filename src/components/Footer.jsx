// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo / Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white">John’s Bikes & Tents</h2>
          <p className="text-sm text-gray-400">
            Adventure starts with the right gear.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 text-xl">
          <a href="#" className="hover:text-white transition-colors">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-6 border-t border-gray-700 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} John’s Bikes & Tents. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
