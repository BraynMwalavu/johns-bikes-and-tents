import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-dark border-t border-primary-dark/10 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Brand Info */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-heading font-semibold text-primary-dark">
            John’s Bikes & Tents
          </h2>
          <p className="text-sm text-secondary-light/80">
            Adventure starts with the right gear.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 text-accent text-xl">
          <a
            href="#"
            className="hover:text-accent-hover transition-colors duration-200"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="#"
            className="hover:text-accent-hover transition-colors duration-200"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="#"
            className="hover:text-accent-hover transition-colors duration-200"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-secondary-light/70 text-center md:text-right">
          © {new Date().getFullYear()} John’s Bikes & Tents. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
