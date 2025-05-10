import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Logo variant="light" />
            </div>
            <p className="text-gray-400 text-sm mb-6">
              AI-powered regulatory consultancy for medical devices, currently in closed beta.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Regulatory Strategy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Quality Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Document Control</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Risk Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Compliance Monitoring</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Leadership</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">News</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                <span className="text-gray-400 text-sm">123 Innovation Blvd, Med-Tech City, CA 94103</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gray-400 mr-3" />
                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gray-400 mr-3" />
                <span className="text-gray-400 text-sm">contact@samdoq.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm text-center">
            &copy; {new Date().getFullYear()} SamDoq. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;