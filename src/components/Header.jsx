import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
   <header className="bg-gray-800 text-white py-4 shadow-md">
  <div className="container mx-auto flex justify-between items-center px-4">
    <h1 className="text-2xl font-bold">John’s Bikes & Tents</h1>
    <nav>
      <ul className="flex space-x-6">
        <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
        <li><Link to="/about" className="hover:text-yellow-400">About</Link></li>
        <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
        <li><Link to="/faq" className="hover:text-yellow-400">FAQ</Link></li>
      </ul>
    </nav>
  </div>
</header>

  );
}

export default Header;
