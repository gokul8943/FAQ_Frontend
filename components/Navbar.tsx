import React from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="w-full bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="text-white font-bold text-xl">BitNow</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#" 
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium"
            >
              Home
            </a>
            <a 
              href="#" 
              className="text-white hover:text-blue-300 transition-colors duration-200 font-medium"
            >
              About Us
            </a>
            <a 
              href="#" 
              className="text-white hover:text-blue-300 transition-colors duration-200 font-medium"
            >
              Services
            </a>
            <a 
              href="#" 
              className="text-white hover:text-blue-300 transition-colors duration-200 font-medium"
            >
              Page
            </a>
            <a 
              href="#" 
              className="text-white hover:text-blue-300 transition-colors duration-200 font-medium"
            >
              News
            </a>
            <a 
              href="#" 
              className="text-white hover:text-blue-300 transition-colors duration-200 font-medium"
            >
              Contact Us
            </a>
          </div>

          {/* Get Started Button */}
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors duration-200"
          >
            Get Started
          </Button>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-white hover:text-blue-300 focus:outline-none focus:text-blue-300"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 border-t border-slate-800">
            <a 
              href="#" 
              className="block px-3 py-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium"
            >
              Home
            </a>
            <a 
              href="#" 
              className="block px-3 py-2 text-white hover:text-blue-300 transition-colors duration-200 font-medium"
            >
              About Us
            </a>
            <a 
              href="#" 
              className="block px-3 py-2 text-white hover:text-blue-300 transition-colors duration-200 font-medium"
            >
              Services
            </a>
            <a 
              href="#" 
              className="block px-3 py-2 text-white hover:text-blue-300 transition-colors duration-200 font-medium"
            >
              Page
            </a>
            <a 
              href="#" 
              className="block px-3 py-2 text-white hover:text-blue-300 transition-colors duration-200 font-medium"
            >
              News
            </a>
            <a 
              href="#" 
              className="block px-3 py-2 text-white hover:text-blue-300 transition-colors duration-200 font-medium"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;