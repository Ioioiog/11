import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PropertyList from './components/PropertyList';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PropertyGallery from './components/PropertyGallery';
import AgentPortal from './components/AgentPortal';

// Root Layout Component
const RootLayout = () => {
  return (
    <div className="min-h-screen">
      <Outlet />
    </div>
  );
};

// Main Layout Component
const MainLayout = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showGallery, setShowGallery] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <PropertyList 
        onPropertySelect={(property) => {
          setSelectedProperty(property);
          setShowGallery(true);
        }}
      />
      <About />
      <Contact />
      <Footer />
      {showGallery && selectedProperty && (
        <PropertyGallery
          isOpen={showGallery}
          onClose={() => setShowGallery(false)}
          title={selectedProperty.title}
          images={selectedProperty.images}
        />
      )}
    </div>
  );
};

// App Component with HashRouter
const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<MainLayout />} />
          <Route path="/portal-agenti" element={<AgentPortal />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;