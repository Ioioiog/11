import React, { useState } from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Outlet } from 'react-router-dom';
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

// Router Configuration
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path="/" element={<MainLayout />} />
      <Route path="/agent" element={<AgentPortal />} />
    </Route>
  )
);

// App Component
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/portal-agenti" element={<PortalAgenti />} />
      </Routes>
    </Router>
  );

};

export default App;