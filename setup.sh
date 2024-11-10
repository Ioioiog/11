#!/bin/bash

echo "🏗️ Creating Agent Portal page..."

# Create AgentPortal component directory
mkdir -p src/pages/agent

# Create AgentPortal.jsx
echo "Creating AgentPortal.jsx..."
cat > src/pages/agent/AgentPortal.jsx << 'EOL'
import React, { useState } from 'react';
import { propertyData } from '../../data/properties';

export default function AgentPortal() {
  const [formData, setFormData] = useState({
    name: '',
    agency: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Solicitarea de colaborare a fost trimisă cu succes!');
    setFormData({
      name: '',
      agency: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="bg-gray-100">
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <a href="/">ApartamentDeLux.ro</a>
          </h1>
          <nav>
            <a href="#properties" className="text-white hover:text-gray-300 ml-4">Proprietăți</a>
            <a href="#commission" className="text-white hover:text-gray-300 ml-4">Comision</a>
            <a href="#contact" className="text-white hover:text-gray-300 ml-4">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto mt-8 p-4">
        <h1 className="text-3xl font-bold mb-6">Portal pentru Agenți Imobiliari</h1>

        <section id="intro" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Bine ați venit în portalul pentru agenți</h2>
          <p className="text-gray-700">
            Dragi agenți imobiliari, vă mulțumim pentru interesul acordat proprietăților noastre de lux. 
            Aici veți găsi informații detaliate despre apartamentele disponibile pentru închiriere, 
            comisioanele oferite și cum puteți colabora cu noi pentru a oferi clienților dumneavoastră 
            cele mai bune opțiuni de cazare.
          </p>
        </section>

        <section id="properties" className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Proprietăți disponibile pentru închiriere</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {propertyData.map((property) => (
              <div key={property.id} className="property-card bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-xl mb-2">{property.title}</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    {property.details.rooms} camere | {property.details.totalArea} mp | {property.price} euro/lună
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {property.details.building}, Etaj {property.details.floor}
                  </p>
                  <a href={`#${property.id}`} className="text-blue-600 hover:text-blue-800">
                    Vezi detalii
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="commission" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Structura de comision</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-4">
              Oferim un comision atractiv pentru agenții imobiliari care aduc chiriași pentru proprietățile noastre:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>50% din prima chirie pentru contracte de 12-24 luni</li>
              <li>75% din prima chirie pentru contracte de 36 luni sau mai mult</li>
              <li>Bonus de 10% pentru agenții care aduc mai mult de 3 chiriași într-un an calendaristic</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              * Comisionul se plătește după semnarea contractului de închiriere și încasarea primei chirii.
            </p>
          </div>
        </section>

        <section id="collaboration" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Cum să colaborăm</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Înregistrați-vă ca agent partener completând formularul de contact de mai jos</li>
              <li>Veți primi acces la materiale de marketing și informații detaliate despre proprietăți</li>
              <li>Programați vizionări pentru clienții dumneavoastră folosind sistemul nostru online</li>
              <li>Asistați clienții în procesul de închiriere și semnare a contractului</li>
              <li>Primiți comisionul după finalizarea cu succes a închirierii</li>
            </ol>
          </div>
        </section>

        <section id="contact" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Contactează-ne</h2>
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nume complet
              </label>
              <input
                type="text"
                id="name"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>
            <div>
              <label htmlFor="agency" className="block text-sm font-medium text-gray-700">
                Agenție imobiliară
              </label>
              <input
                type="text"
                id="agency"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.agency}
                onChange={(e) => setFormData(prev => ({ ...prev, agency: e.target.value }))}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Telefon
              </label>
              <input
                type="tel"
                id="phone"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Mesaj (opțional)
              </label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Trimite solicitarea de colaborare
              </button>
            </div>
          </form>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} ApartamentDeLux.ro. Toate drepturile rezervate.</p>
          <div className="mt-2">
            <a href="#" className="text-gray-300 hover:text-white mx-2">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-white mx-2">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-white mx-2">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
EOL

# Update App.jsx to include routing
echo "Updating App.jsx with routing..."
cat > src/App.jsx << 'EOL'
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PropertyList from './components/PropertyList';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PropertyModal from './components/PropertyModal';
import AgentPortal from './pages/agent/AgentPortal';

export default function App() {
  const [selectedProperty, setSelectedProperty] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/agent" element={<AgentPortal />} />
        <Route path="/" element={
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <Hero />
            <PropertyList onPropertySelect={setSelectedProperty} />
            <About />
            <Contact />
            <Footer />
            {selectedProperty && (
              <PropertyModal 
                property={selectedProperty} 
                onClose={() => setSelectedProperty(null)} 
              />
            )}
          </div>
        } />
      </Routes>
    </Router>
  );
}
EOL

# Add react-router-dom to package.json
echo "Adding react-router-dom to dependencies..."
npm install react-router-dom

# Add Font Awesome to index.html
echo "Adding Font Awesome to index.html..."
sed -i '/<link href="https:\/\/fonts.googleapis.com/a; <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">' index.html

# Add styles to index.css
echo "Adding styles to index.css..."
cat >> src/index.css << 'EOL'
.property-card:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transform: translateY(-5px);
  transition: all 0.3s ease;
}
EOL
# Create AgentPortal component directory
mkdir -p src/pages/agent

# Create AgentPortal.jsx
echo "Creating AgentPortal.jsx..."
cat > src/pages/agent/AgentPortal.jsx << 'EOL'
import React, { useState } from 'react';
import { propertyData } from '../../data/properties';

export default function AgentPortal() {
  const [formData, setFormData] = useState({
    name: '',
    agency: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Solicitarea de colaborare a fost trimisă cu succes!');
    setFormData({
      name: '',
      agency: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="bg-gray-100">
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <a href="/">ApartamentDeLux.ro</a>
          </h1>
          <nav>
            <a href="#properties" className="text-white hover:text-gray-300 ml-4">Proprietăți</a>
            <a href="#commission" className="text-white hover:text-gray-300 ml-4">Comision</a>
            <a href="#contact" className="text-white hover:text-gray-300 ml-4">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto mt-8 p-4">
        <h1 className="text-3xl font-bold mb-6">Portal pentru Agenți Imobiliari</h1>

        <section id="intro" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Bine ați venit în portalul pentru agenți</h2>
          <p className="text-gray-700">
            Dragi agenți imobiliari, vă mulțumim pentru interesul acordat proprietăților noastre de lux. 
            Aici veți găsi informații detaliate despre apartamentele disponibile pentru închiriere, 
            comisioanele oferite și cum puteți colabora cu noi pentru a oferi clienților dumneavoastră 
            cele mai bune opțiuni de cazare.
          </p>
        </section>

        <section id="properties" className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Proprietăți disponibile pentru închiriere</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {propertyData.map((property) => (
              <div key={property.id} className="property-card bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-xl mb-2">{property.title}</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    {property.details.rooms} camere | {property.details.totalArea} mp | {property.price} euro/lună
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {property.details.building}, Etaj {property.details.floor}
                  </p>
                  <a href={`#${property.id}`} className="text-blue-600 hover:text-blue-800">
                    Vezi detalii
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="commission" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Structura de comision</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-4">
              Oferim un comision atractiv pentru agenții imobiliari care aduc chiriași pentru proprietățile noastre:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>50% din prima chirie pentru contracte de 12-24 luni</li>
              <li>75% din prima chirie pentru contracte de 36 luni sau mai mult</li>
              <li>Bonus de 10% pentru agenții care aduc mai mult de 3 chiriași într-un an calendaristic</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              * Comisionul se plătește după semnarea contractului de închiriere și încasarea primei chirii.
            </p>
          </div>
        </section>

        <section id="collaboration" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Cum să colaborăm</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Înregistrați-vă ca agent partener completând formularul de contact de mai jos</li>
              <li>Veți primi acces la materiale de marketing și informații detaliate despre proprietăți</li>
              <li>Programați vizionări pentru clienții dumneavoastră folosind sistemul nostru online</li>
              <li>Asistați clienții în procesul de închiriere și semnare a contractului</li>
              <li>Primiți comisionul după finalizarea cu succes a închirierii</li>
            </ol>
          </div>
        </section>

        <section id="contact" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Contactează-ne</h2>
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nume complet
              </label>
              <input
                type="text"
                id="name"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>
            <div>
              <label htmlFor="agency" className="block text-sm font-medium text-gray-700">
                Agenție imobiliară
              </label>
              <input
                type="text"
                id="agency"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.agency}
                onChange={(e) => setFormData(prev => ({ ...prev, agency: e.target.value }))}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Telefon
              </label>
              <input
                type="tel"
                id="phone"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Mesaj (opțional)
              </label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Trimite solicitarea de colaborare
              </button>
            </div>
          </form>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} ApartamentDeLux.ro. Toate drepturile rezervate.</p>
          <div className="mt-2">
            <a href="#" className="text-gray-300 hover:text-white mx-2">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-white mx-2">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-white mx-2">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
EOL

# Update App.jsx to include routing
echo "Updating App.jsx with routing..."
cat > src/App.jsx << 'EOL'
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PropertyList from './components/PropertyList';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PropertyModal from './components/PropertyModal';
import AgentPortal from './pages/agent/AgentPortal';

export default function App() {
  const [selectedProperty, setSelectedProperty] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/agent" element={<AgentPortal />} />
        <Route path="/" element={
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <Hero />
            <PropertyList onPropertySelect={setSelectedProperty} />
            <About />
            <Contact />
            <Footer />
            {selectedProperty && (
              <PropertyModal 
                property={selectedProperty} 
                onClose={() => setSelectedProperty(null)} 
              />
            )}
          </div>
        } />
      </Routes>
    </Router>
  );
}
EOL

# Add react-router-dom to package.json
echo "Adding react-router-dom to dependencies..."
npm install react-router-dom

# Add Font Awesome to index.html
echo "Adding Font Awesome to index.html..."
sed -i '/<link href="https:\/\/fonts.googleapis.com/a; <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">' index.html

# Add styles to index.css
echo "Adding styles to index.css..."
cat >> src/index.css << 'EOL'
.property-card:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transform: translateY(-5px);
  transition: all 0.3s ease;
}
EOL

echo "✅ Agent Portal has been successfully created!"
echo "To access the agent portal, visit: http://localhost:5173/agent"
echo "Make sure to run: npm install && npm run dev"