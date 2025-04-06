import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header className="px-4 sm:px-8 md:px-16 lg:px-24 py-12">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-3xl font-bold text-[#4CAF82]">
            Biccas
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-black font-medium">
              Home
            </Link>
            {/* <Link to="/product" className="text-gray-500 hover:text-black">
              Product
            </=> */}
            <Link to="/pricing" className="text-gray-500 hover:text-black">
              Pricing
            </Link>

            <Link to="/faq" className="text-gray-500 hover:text-black">
              FAQ
            </Link>
            <Link to="/blog" className="text-gray-500 hover:text-black">
              Blog
            </Link>
            <Link to="/about" className="text-gray-500 hover:text-black">
              About
            </Link>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="text-gray-700 hover:text-black">
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-[#4CAF82] text-white px-4 py-2 rounded-md hover:bg-[#3d9c6c]"
            >
              Sign Up
            </Link>
          </div>
          <button className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>
    </>
  );
}
