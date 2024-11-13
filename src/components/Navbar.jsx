import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/images/logo.png';
import { AgentPortal} from 'scr/pages/agent/AgentPortal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Adaugă efect de scroll pentru header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8">
          {/* Logo și Branding */}
          <div className="flex-shrink-0 py-4">
            <a href="/" className="flex items-center gap-4">
              <img 
                src={logo} 
                alt="ApartamentDeLux.ro" 
                className="h-16 w-auto" 
              />
              <div className="flex flex-col">
                <span className={`text-2xl font-semibold tracking-tight ${
                  isScrolled ? 'text-brand-dark' : 'text-white'
                }`}>
                  apartamentdelux.ro
                </span>
                <span className={`text-xs tracking-wider ${
                  isScrolled ? 'text-brand-gray-medium' : 'text-white/80'
                }`}>
                  BEYOND WALLS, EMBRACE YOUR HOME
                </span>
              </div>
            </a>
          </div>

          /* Meniu Desktop */
                <div className="hidden md:flex items-center gap-8">
                <div className="flex gap-6">
                  <a 
                  href="#properties" 
                  className={`font-medium hover:text-brand-orange transition-colors ${
                    isScrolled ? 'text-brand-dark' : 'text-white'
                  }`}
                  >
                  Proprietăți
                  </a>
                  <a 
                  href="#about" 
                  className={`font-medium hover:text-brand-orange transition-colors ${
                    isScrolled ? 'text-brand-dark' : 'text-white'
                  }`}
                  >
                  Despre Noi
                  </a>
                  <a 
                  href="#contact" 
                  className={`font-medium hover:text-brand-orange transition-colors ${
                    isScrolled ? 'text-brand-dark' : 'text-white'
                  }`}
                  >
                  Contact
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <a
                  href="https://chiriasi.apartamentdelux.ro"
                  className={`px-4 py-2 rounded-md transition-colors ${
                    isScrolled 
                    ? 'bg-brand-orange text-white hover:bg-brand-orange-dark'
                    : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                  >
                  Portal Chiriași
                  </a>
                  <a
                  href="/src/components/AgentPortal.jsx"
                  className={`px-4 py-2 rounded-md border transition-colors ${
                    isScrolled
                    ? 'border-brand-orange text-brand-orange hover:bg-brand-orange/10'
                    : 'border-white text-white hover:bg-white/10'
                  }`}
                  >
                  Portal Agenți
                  </a>
                </div>
                </div>

                {/* Buton Meniu Mobil */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors ${
                isScrolled ? 'text-brand-dark' : 'text-white'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Meniu Mobil */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-2 space-y-1">
              <a href="#properties" className="block px-3 py-2 text-brand-dark hover:text-brand-orange rounded-md">
                Proprietăți
              </a>
              <a href="#about" className="block px-3 py-2 text-brand-dark hover:text-brand-orange rounded-md">
                Despre Noi
              </a>
              <a href="#contact" className="block px-3 py-2 text-brand-dark hover:text-brand-orange rounded-md">
                Contact
              </a>
              <div className="space-y-2 pt-2">
                <a 
                  href="https://chiriasi.apartamentdelux.ro" 
                  className="block px-3 py-2 text-white bg-brand-orange rounded-md text-center"
                >
                  Portal Chiriași
                </a>
                <a 
                  href="/src/pages/agent/AgentPortal.jsx" 
                  className="block px-3 py-2 text-brand-orange border border-brand-orange rounded-md text-center"
                >
                  Portal Agenți
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}