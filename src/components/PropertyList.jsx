import React, { useState } from 'react';
import { propertyData } from '../data/properties';

export default function PropertyList({ onPropertySelect }) {
  const [filters, setFilters] = useState({
    rooms: 'all',
    priceRange: 'all'
  });

  const filteredProperties = propertyData.filter(property => {
    if (filters.rooms !== 'all' && property.details.rooms !== parseInt(filters.rooms)) return false;
    if (filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-').map(Number);
      if (property.price < min || property.price > max) return false;
    }
    return true;
  });

  return (
    <section id="properties" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Proprietăți Disponibile</h2>
        
        <div className="mb-8 flex flex-wrap gap-4">
          <select
            className="px-4 py-2 border rounded-md"
            value={filters.rooms}
            onChange={(e) => setFilters(prev => ({ ...prev, rooms: e.target.value }))}
          >
            <option value="all">Toate camerele</option>
            <option value="2">2 camere</option>
            <option value="3">3 camere</option>
            <option value="4">4 camere</option>
          </select>
          
          <select
            className="px-4 py-2 border rounded-md"
            value={filters.priceRange}
            onChange={(e) => setFilters(prev => ({ ...prev, priceRange: e.target.value }))}
          >
            <option value="all">Toate prețurile</option>
            <option value="800-1200">800€ - 1200€</option>
            <option value="1200-1500">1200€ - 1500€</option>
            <option value="1500-2000">1500€ - 2000€</option>
          </select>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition hover:scale-105"
              onClick={() => onPropertySelect(property)}
            >
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-4">{property.details.area} mp | {property.details.rooms} camere</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-indigo-600">{property.price}€</span>
                  <button
                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                    onClick={(e) => {
                      e.stopPropagation();
                      onPropertySelect(property);
                    }}
                  >
                    Vezi Detalii
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
