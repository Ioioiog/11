import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-brand-gray-dark to-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-orange rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-orange rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-brand-orange mb-2">
                ApartamentDeLux.ro
              </h3>
              <p className="text-base text-white/80 leading-relaxed">
                Platformă dedicată închirierii de apartamente premium în București.
                Oferim cele mai bune opțiuni pentru cei care caută o locuință de lux în zona de nord a capitalei.
              </p>
            </div>

            <div className="flex flex-col space-y-3">
              <a href="mailto:reddomainrent@gmail.com" className="flex items-center text-white/80 hover:text-brand-orange transition-colors group">
                <Mail className="h-5 w-5 mr-2 text-brand-orange group-hover:scale-110 transition-transform" />
                reddomainrent@gmail.com
              </a>
              <a href="tel:+40744778792" className="flex items-center text-white/80 hover:text-brand-orange transition-colors group">
                <Phone className="h-5 w-5 mr-2 text-brand-orange group-hover:scale-110 transition-transform" />
                +40 744 77 87 92
              </a>
              <div className="flex items-start text-white/80 group">
                <MapPin className="h-5 w-5 mr-2 text-brand-orange mt-1" />
                <span>București,<br />Zona de Nord</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-brand-orange">Link-uri Rapide</h4>
            <ul className="space-y-4">
              <li>
                <a href="#properties" className="text-white/80 hover:text-brand-orange transition-colors flex items-center group">
                  <ExternalLink className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Proprietăți
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-brand-orange transition-colors flex items-center group">
                  <ExternalLink className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Contact
                </a>
              </li>
              <li>
                <a href="https://chiriasi.apartamentdelux.ro" className="text-white/80 hover:text-brand-orange transition-colors flex items-center group">
                  <ExternalLink className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Portal Chiriași
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-brand-orange">Social Media</h4>
            <div className="flex flex-col space-y-4">
              <a 
                href="#" 
                className="flex items-center text-white/80 hover:text-brand-orange transition-all group bg-white/5 rounded-lg p-3 hover:bg-white/10"
              >
                <Facebook className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
                <span>Facebook</span>
              </a>
              <a 
                href="#" 
                className="flex items-center text-white/80 hover:text-brand-orange transition-all group bg-white/5 rounded-lg p-3 hover:bg-white/10"
              >
                <Instagram className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-white/60 text-sm text-center">
            © {currentYear} ApartamentDeLux.ro. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
}