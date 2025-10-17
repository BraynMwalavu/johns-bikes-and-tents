import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-primary-dark text-neutral-light shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo / Brand Name */}
        <Link
          to="/"
          className="text-2xl font-heading font-bold tracking-tight text-neutral-light hover:text-accent transition-colors duration-300"
        >
          John’s Bikes & Tents
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6 text-sm md:text-base font-medium">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Contact", path: "/contact" },
              { name: "FAQ", path: "/faq" },
            ].map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`relative transition-all duration-300 ${
                    location.pathname === item.path
                      ? "text-accent font-semibold after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-accent"
                      : "text-neutral-light hover:text-accent"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
