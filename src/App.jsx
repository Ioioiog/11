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
