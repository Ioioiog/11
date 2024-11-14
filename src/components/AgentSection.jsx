import React, { useState } from 'react';
import { Building, Users, Calculator, Clock, Mail } from 'lucide-react';
import { propertyData } from '../data/properties';
import ViewingRequestForm from './ViewingRequestForm';

const AgentSection = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactClick = () => {
    const subject = "Solicitare colaborare agent imobiliar";
    const body = `
Bună ziua,

Doresc să colaborez cu dumneavoastră ca agent imobiliar.

Cu stimă,`;
    
    window.location.href = `mailto:reddomainrent@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="agents" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Portofoliu Proprietăți Premium
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descoperă proprietățile noastre premium din București și beneficiază de comisioane atractive pentru fiecare închiriere.
          </p>
        </div>

        {/* Commission Structure */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Structura de Comision</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-3xl font-bold text-brand-orange mb-2">50%</div>
              <p className="text-gray-600">
                din prima chirie pentru contracte de 12-24 luni
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-3xl font-bold text-brand-orange mb-2">75%</div>
              <p className="text-gray-600">
                din prima chirie pentru contracte de 36 luni sau mai mult
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-3xl font-bold text-brand-orange mb-2">+10%</div>
              <p className="text-gray-600">
                bonus pentru agenții care aduc mai mult de 3 chiriași într-un an calendaristic
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            * Comisionul se plătește după semnarea contractului de închiriere și încasarea primei chirii.
          </p>
        </div>

        {/* Properties Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Complex Yacht Kid</h3>
            <div className="space-y-4">
              <p className="text-gray-600">
                Apartamente disponibile: {propertyData.filter(p => p.location.complex === 'Yacht Kid' && p.status === 'available').length}
              </p>
              <div className="flex gap-4">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">2 camere</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">3 camere</span>
              </div>
              <p className="text-gray-600">
                Prețuri începând de la: {Math.min(...propertyData.filter(p => p.location.complex === 'Yacht Kid').map(p => p.price))}€
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Complex Prima Vista</h3>
            <div className="space-y-4">
              <p className="text-gray-600">
                Apartamente disponibile: {propertyData.filter(p => p.location.complex === 'Prima Vista' && p.status === 'available').length}
              </p>
              <div className="flex gap-4">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">3 camere</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">4 camere</span>
              </div>
              <p className="text-gray-600">
                Prețuri începând de la: {Math.min(...propertyData.filter(p => p.location.complex === 'Prima Vista').map(p => p.price))}€
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Beneficii Colaborare</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Building className="w-12 h-12 text-brand-orange mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Proprietăți Premium</h4>
              <p className="text-gray-600">
                Portofoliu exclusivist de apartamente în zone premium din București.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Users className="w-12 h-12 text-brand-orange mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Colaborare de lungă durată</h4>
              <p className="text-gray-600">
                Număr restrâns de agenți pentru o colaborare eficientă și de durată.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Calculator className="w-12 h-12 text-brand-orange mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Comisioane Atractive</h4>
              <p className="text-gray-600">
                Până la 75% din prima chirie plus bonusuri pentru performanță.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Clock className="w-12 h-12 text-brand-orange mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Suport Rapid</h4>
              <p className="text-gray-600">
                Răspuns prompt și asistență completă pe parcursul colaborării.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Button */}
        <div className="text-center">
          <button 
            onClick={handleContactClick}
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange text-white rounded-md hover:bg-brand-orange-dark transition-colors"
          >
            <Mail size={20} />
            Contactează-ne pentru colaborare
          </button>
        </div>

        {showContactForm && selectedProperty && (
          <ViewingRequestForm 
            property={selectedProperty}
            onClose={() => setShowContactForm(false)}
          />
        )}
      </div>
    </section>
  );
};

export default AgentSection;
