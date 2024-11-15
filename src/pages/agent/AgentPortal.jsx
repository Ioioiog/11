import React from 'react';
import { Building, Users, Calculator, Clock, Mail } from 'lucide-react';

const AgentPortal = () => {
  const benefitsData = [
    {
      icon: Building,
      title: "Proprietăți Premium",
      description: "Portofoliu exclusivist de apartamente în zone premium din București."
    },
    {
      icon: Users,
      title: "Colaborare de lungă durată",
      description: "Număr restrâns de agenți pentru o colaborare eficientă și de durată."
    },
    {
      icon: Calculator,
      title: "Comisioane Atractive",
      description: "Până la 75% din prima chirie plus bonusuri pentru performanță."
    },
    {
      icon: Clock,
      title: "Suport Rapid",
      description: "Răspuns prompt și asistență completă pe parcursul colaborării."
    }
  ];

  const commissionStructure = [
    {
      percentage: "50%",
      description: "din prima chirie pentru contracte de 12-24 luni"
    },
    {
      percentage: "75%",
      description: "din prima chirie pentru contracte de 36 luni sau mai mult"
    },
    {
      percentage: "+10%",
      description: "bonus pentru agenții care aduc mai mult de 3 chiriași într-un an calendaristic"
    }
  ];

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
      {/* Hero Section */}
      <section id="agent-portal" className="bg-white shadow-sm py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Ești agent imobiliar? Colaborează cu noi!
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Descoperă proprietățile noastre premium din București și beneficiază de comisioane atractive pentru fiecare închiriere.
          </p>
          <button 
            onClick={handleContactClick}
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange text-white rounded-md hover:bg-brand-orange-dark transition-colors"
          >
            <Mail size={20} />
            Contactează-ne
          </button>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Commission Structure */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Structura de Comision</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {commissionStructure.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-brand-orange mb-2">
                  {item.percentage}
                </div>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-4">
            * Comisionul se plătește după semnarea contractului de închiriere și încasarea primei chirii.
          </p>
        </div>
      </main>
    </div>
  );
};

export default AgentPortal;