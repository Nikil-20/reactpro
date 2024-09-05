// src/Component/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import 'animate.css';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleLinkClick = () => {
    setIsDropdownOpen(false); 
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img
              className="h-14 w-14"
              src="coep_logoBlack.png"
              alt="COEP Logo"
            />
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex ml-10 items-baseline space-x-4">
            <Link
              to="/"
              onClick={handleLinkClick}  
              className="text-gray-700 hover:bg-black hover:text-white px-3 py-2 rounded-md text-lg font-medium"
            >
              Home
            </Link>
            <Link
              to="/About"
              onClick={handleLinkClick}  
              className="text-gray-700  hover:bg-black hover:text-white px-3 py-2 rounded-md text-lg font-medium"
            >
              About
            </Link>
            <Link
              to="/Services"
              onClick={handleLinkClick}  
              className="text-gray-700  hover:bg-black hover:text-white px-3 py-2 rounded-md text-lg font-medium"
            >
              Campus
            </Link>
            <div className="relative">
              <button
              
                onClick={handleDropdownToggle}
                aria-expanded={isDropdownOpen}
                aria-controls="dropdown-menu"
                className="text-gray-700  hover:bg-black hover:text-white px-3 py-2 rounded-md text-lg font-medium"
              >
                Branches <i className="fa fa-caret-down"></i>
              </button>
              {isDropdownOpen && (
                <div
                  id="dropdown-menu"
                  className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-10"
                >
                  <Link
                    to="/electrical"
                    onClick={handleLinkClick} 
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                  >
                    Electrical Engineering
                  </Link>
                  <Link
                    to="/civil"
                    onClick={handleLinkClick}  
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                  >
                    Civil Engineering
                  </Link>
                  <Link
                    to="/Cs"
                    onClick={handleLinkClick}  
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                  >
                    Computer Engineering & IT
                  </Link>
                  <Link
                    to="/Entc"
                    onClick={handleLinkClick}  
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                  >
                   Electronics and Telecommunication Engineering
                  </Link>
                  <Link
                    to="/Instru"
                    onClick={handleLinkClick}  
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                  >
                     Instrumentation and Control Engineering
                  </Link>
                  <Link
                    to="/Mech"
                    onClick={handleLinkClick}  
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                  >
                    Mechanical Engineering
                  </Link>
                  <Link
                    to="/Manu"
                    onClick={handleLinkClick}  
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                  >
                    Manufacturing Engineering
                  </Link>
                  <Link
                    to="/Meta"
                    onClick={handleLinkClick}  
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                  >
                     Metallurgy
                  </Link>
                
                  {/* Add more links as needed */}
                </div>
              )}
            </div>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={handleMobileMenuToggle}
              aria-label="Open mobile menu"
              className="text-gray-700  hover:bg-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              <i className="fa fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            onClick={handleLinkClick}  
            className="text-gray-700 hover:bg-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            to="/About"
            onClick={handleLinkClick}  
            className="text-gray-700  hover:bg-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </Link>
          <Link
            to="/Services"
            onClick={handleLinkClick}  
            className="text-gray-700  hover:bg-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Campus
          </Link>
          <div className="relative">
            <button
              onClick={handleDropdownToggle}
              aria-expanded={isDropdownOpen}
              aria-controls="mobile-dropdown-menu"
              className="text-gray-700  hover:bg-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Branches <i className="fa fa-caret-down"></i>
            </button>
            {isDropdownOpen && (
              <div
                id="mobile-dropdown-menu"
                className="mt-2 w-full bg-white shadow-lg rounded-md py-1 z-10"
              >
                <Link
                  to="/electrical"
                  onClick={handleLinkClick}  
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                >
                  Electrical Engineering
                </Link>
                <Link
                  to="/civil"
                  onClick={handleLinkClick}  
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                >
                  Civil Engineering
                </Link>
                <Link
                  to="/Cs"
                  onClick={handleLinkClick}  
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                >
                  Computer Engineering & IT
                </Link>
                <Link
                  to="/Entc"
                  onClick={handleLinkClick}  
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                >
                  Electronics and Telecommunication Engineering
                </Link>
                <Link
                  to="/Instru"
                  onClick={handleLinkClick}  
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                >
                  Instrumentation and Control Engineering
                </Link>
                <Link
                  to="/Mech"
                  onClick={handleLinkClick}  
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                >
                  Mechanical Engineering
                </Link>
                <Link
                  to="/Manu"
                  onClick={handleLinkClick}  
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                >
                   Manufacturing Engineering
                </Link>
                <Link
                  to="/Meta"
                  onClick={handleLinkClick}  
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                >
                   Metallurgy
                </Link>
                {/* Add more links as needed */}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
