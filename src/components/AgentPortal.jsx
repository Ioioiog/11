// src/components/AgentPortal.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building, Users, Calculator, Clock, Mail } from 'lucide-react';
import { propertyData } from '../data/properties';
import ViewingRequestForm from './ViewingRequestForm';


const AgentPortal = () => {
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-brand-orange">
              ApartamentDeLux.ro
            </Link>
            <button 
              onClick={handleContactClick}
              className="flex items-center gap-2 px-4 py-2 bg-brand-orange text-white rounded-md hover:bg-brand-orange-dark transition-colors"
            >
              <Mail size={20} />
              Contactează-ne
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Portofoliu Proprietăți Premium
          </h1>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Complex Yacht Kid</h2>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Complex Prima Vista</h2>
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

        {/* Properties List */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Apartamente Disponibile</h2>
          <div className="grid gap-6">
            {propertyData.map(property => (
              <div key={property.id} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{property.title}</h3>
                    <p className="text-gray-600">{property.details.rooms} camere | {property.details.area} mp | {property.price}€</p>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedProperty(property);
                      setShowContactForm(true);
                    }}
                    className="px-4 py-2 bg-brand-orange text-white rounded-md hover:bg-brand-orange-dark transition-colors whitespace-nowrap"
                  >
                    Programează vizionare
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Beneficii Colaborare</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Building className="w-12 h-12 text-brand-orange mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Proprietăți Premium</h3>
              <p className="text-gray-600">
                Portofoliu exclusivist de apartamente în zone premium din București.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Users className="w-12 h-12 text-brand-orange mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Colaborare de lungă durată</h3>
              <p className="text-gray-600">
                Număr restrâns de agenți pentru o colaborare eficientă și de durată.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Calculator className="w-12 h-12 text-brand-orange mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Comisioane Atractive</h3>
              <p className="text-gray-600">
                Până la 75% din prima chirie plus bonusuri pentru performanță.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Clock className="w-12 h-12 text-brand-orange mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Suport Rapid</h3>
              <p className="text-gray-600">
                Răspuns prompt și asistență completă pe parcursul colaborării.
              </p>
            </div>
          </div>
        </div>

        {showContactForm && selectedProperty && (
          <ViewingRequestForm 
            property={selectedProperty}
            onClose={() => setShowContactForm(false)}
          />
        )}
      </main>

      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p>&copy; {new Date().getFullYear()} ApartamentDeLux.ro. Toate drepturile rezervate.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AgentPortal;
