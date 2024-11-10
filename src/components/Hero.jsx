import React from 'react';

export default function Hero() {
  return (
    <div className="relative bg-gray-900 h-screen">
      <div className="absolute inset-0">
        <img
          src="/api/placeholder/1920/1080"
          alt="Luxury apartment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Descoperă Apartamentul Perfect
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Oferim cele mai exclusiviste proprietăți din București, perfecte pentru cei care caută un stil de viață luxos și confortabil.
        </p>
        <div className="mt-10">
          <a
            href="#properties"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Vezi Proprietățile Noastre
          </a>
        </div>
      </div>
    </div>
  );
}
