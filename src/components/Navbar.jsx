import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-indigo-600">ApartamentDeLux.ro</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#properties" className="text-gray-700 hover:text-indigo-600">Proprietăți</a>
            <a href="#about" className="text-gray-700 hover:text-indigo-600">Despre Noi</a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600">Contact</a>
            <a href="/login" className="text-white bg-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-700">
              Login
            </a>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#properties" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">
              Proprietăți
            </a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">
              Despre Noi
            </a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">
              Contact
            </a>
            <a href="/login" className="block px-3 py-2 text-white bg-indigo-600 rounded-md">
              Login
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
