import React, { useState } from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PropertyList from './components/PropertyList';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PropertyGallery from './components/PropertyGallery';
import AgentPortal from './pages/agent/AgentPortal';
import ViewingRequestForm from './components/ViewingRequestForm';

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
      <AgentPortal />
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
      <Route path="/agentportal" element={<AgentPortal />} />
      <Route path="/agent/viewing-request-form" element={<ViewingRequestForm />} />
    </Route>
  )
);

// App Component
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;