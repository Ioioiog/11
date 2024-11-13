// src/components/PropertyGallery.jsx

import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { getPropertyImages } from '/src/assets/images/properties';

export default function PropertyGallery({ isOpen, onClose, property }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]); // Adăugat dependențe pentru useEffect

  if (!isOpen || !property) return null;

  const images = getPropertyImages(property.id);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm"
      tabIndex={0}
    >
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 text-white">
          <h3 className="text-xl font-semibold">
            {property.title} - Imagine {currentIndex + 1} din {images.length}
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Main Image */}
        <div className="flex-1 relative flex items-center justify-center px-4">
          <button
            onClick={prevImage}
            className="absolute left-8 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            aria-label="Imagine anterioară"
          >
            <ChevronLeft size={24} />
          </button>

          <img
            src={images[currentIndex]}
            alt={`${property.title} - Imagine ${currentIndex + 1}`}
            className="max-h-[70vh] max-w-[90vw] object-contain rounded-lg"
          />

          <button
            onClick={nextImage}
            className="absolute right-8 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            aria-label="Imagine următoare"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="p-4">
          <div className="flex gap-2 overflow-x-auto pb-2 justify-center">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden 
                  transition-all duration-200 ${
                    currentIndex === index 
                      ? 'ring-2 ring-brand-orange scale-105' 
                      : 'opacity-50 hover:opacity-100'
                  }`}
              >
                <img
                  src={image}
                  alt={`Miniatură ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}