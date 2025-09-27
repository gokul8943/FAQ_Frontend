import React from 'react';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-white font-bold text-xl">BitNow</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lorem Ipsum, jhdjnfrj<br />
              Htehtuimerv
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-3 pt-2">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <Facebook size={20} />
              </div>
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <Instagram size={20} />
              </div>
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <Twitter size={20} />
              </div>
            </div>
          </div>

          {/* Other Pages */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Other Pages</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="text-blue-400 mr-2 group-hover:translate-x-1 transition-transform">›</span>
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="text-blue-400 mr-2 group-hover:translate-x-1 transition-transform">›</span>
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="text-blue-400 mr-2 group-hover:translate-x-1 transition-transform">›</span>
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="text-blue-400 mr-2 group-hover:translate-x-1 transition-transform">›</span>
                  Token Sale
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="text-blue-400 mr-2 group-hover:translate-x-1 transition-transform">›</span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="text-blue-400 mr-2 group-hover:translate-x-1 transition-transform">›</span>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="text-blue-400 mr-2 group-hover:translate-x-1 transition-transform">›</span>
                  Term Of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="text-blue-400 mr-2 group-hover:translate-x-1 transition-transform">›</span>
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="text-blue-400 mr-2 group-hover:translate-x-1 transition-transform">›</span>
                  Credits
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <span className="text-blue-400 mr-2 group-hover:translate-x-1 transition-transform">›</span>
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              At habitant maecenas lacus adipiscing non. Accumsan etiam non praesent
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Your email adress"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors duration-200">
                Subscribe
              </Button>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;