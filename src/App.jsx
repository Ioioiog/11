import React, { useState } from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PropertyList from './components/PropertyList';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PropertyGallery from './components/PropertyGallery';
import AgentPortal from './components/AgentPortal';

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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<MainLayout />} />
      <Route path="/AgentPortal" element={<AgentPortal />} />
    </Route>
  )
);


export default function App() {
  return <RouterProvider router={router} />;
}