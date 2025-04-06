import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Function to handle mobile navigation
  const handleMobileNavigation = (path) => {
    // Close the mobile menu
    setMobileMenuOpen(false);
    // Navigate to the path
    navigate(path);
  };
  return (
    <>
      <header className="relative w-full px-4 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl sm:text-3xl font-bold text-[#4CAF82] z-20"
          >
            Biccas
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-black font-medium">
              Home
            </Link>
            <Link to="/pricing" className="text-gray-500 hover:text-black">
              Pricing
            </Link>
            <Link to="/" className="text-gray-500 hover:text-black">
              FAQ
            </Link>
            <Link to="/" className="text-gray-500 hover:text-black">
              Blog
            </Link>
            <Link to="/about" className="text-gray-500 hover:text-black">
              About Us
            </Link>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="text-gray-700 hover:text-black">
              Login
            </Link>
            <Link
              to="/login"
              className="bg-[#4CAF82] text-white px-4 py-2 rounded-md hover:bg-[#3d9c6c]"
            >
              Sign Up
            </Link>
          </div>
          <div className="md:hidden z-20">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-10 pt-20 px-6">
            <nav className="flex flex-col space-y-6">
              <button
                onClick={() => handleMobileNavigation("/")}
                className="text-black font-medium text-lg text-left"
              >
                Home
              </button>
              <button
                onClick={() => handleMobileNavigation("/pricing")}
                className="text-gray-500 hover:text-black text-lg text-left"
              >
                Pricing
              </button>
              <button
                onClick={() => handleMobileNavigation("/")}
                className="text-gray-500 hover:text-black text-lg text-left"
              >
                FAQ
              </button>
              <button
                onClick={() => handleMobileNavigation("/")}
                className="text-gray-500 hover:text-black text-lg text-left"
              >
                Blog
              </button>
              <button
                onClick={() => handleMobileNavigation("/about")}
                className="text-gray-500 hover:text-black text-lg text-left"
              >
                About Us
              </button>
              <div className="pt-6 border-t border-gray-200 flex flex-col space-y-4">
                <button
                  onClick={() => handleMobileNavigation("/login")}
                  className="text-gray-700 hover:text-black text-lg text-left"
                >
                  Login
                </button>
                <button
                  onClick={() => handleMobileNavigation("/login")}
                  className="bg-[#4CAF82] text-white px-6 py-3 rounded-full hover:bg-[#3d9c6c] text-center text-lg"
                >
                  Sign Up
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
