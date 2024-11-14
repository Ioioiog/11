import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToAgents = (e) => {
    e.preventDefault();
    const agentsSection = document.getElementById('agents');
    if (agentsSection) {
      agentsSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // închide meniul mobil dacă este deschis
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="text-2xl font-bold text-brand-orange">
                ApartamentDeLux.ro
              </a>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#properties" className="text-brand-dark hover:text-brand-orange">Proprietăți</a>
            <a href="#about" className="text-brand-dark hover:text-brand-orange">Despre Noi</a>
            <a href="#contact" className="text-brand-dark hover:text-brand-orange">Contact</a>
            <div className="flex space-x-4">
              
              <a
                href="https://chiriasi.apartamentdelux.ro"
                className="text-white bg-brand-orange px-4 py-2 rounded-md hover:bg-brand-orange-dark"
              >
                Portal Chiriași
              </a>
              <button
                onClick={scrollToAgentSection}
                className="text-brand-orange border border-brand-orange px-4 py-2 rounded-md hover:bg-brand-orange/10 transition-colors"
              >
                Portal Agenți
              </button>
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-dark"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#properties" className="block px-3 py-2 text-brand-dark hover:text-brand-orange">
              Proprietăți
            </a>
            <a href="#about" className="block px-3 py-2 text-brand-dark hover:text-brand-orange">
              Despre Noi
            </a>
            <a href="#contact" className="block px-3 py-2 text-brand-dark hover:text-brand-orange">
              Contact
            </a>
            <a 
              href="https://chiriasi.apartamentdelux.ro" 
              className="block px-3 py-2 text-white bg-brand-orange rounded-md"
            >
              Portal Chiriași
            </a>
            <button
              onClick={scrollToAgentSection}
              className="block w-full text-left px-3 py-2 text-brand-orange border border-brand-orange rounded-md hover:bg-brand-orange/10"
            >
              Portal Agenți
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
