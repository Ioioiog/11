// src/components/Hero.jsx
import React from 'react';

export default function Hero() {
  return (
    <div className="relative bg-brand-dark h-screen">
      <div className="absolute inset-0">
        <img
          src="./src/assets/images/hero/hero-image.jpg"
          alt="Luxury apartment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 to-brand-dark/70"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Descoperă Apartamentul Perfect
        </h1>
        <p className="mt-6 text-xl text-brand-gray-light max-w-3xl">
        Oferim proprietăți exclusiviste în București, perfecte pentru cei care caută un stil de viață luxos și confortabil.
        </p>
        <div className="mt-10">
          <a
            href="#properties"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-brand-dark bg-brand-orange hover:bg-brand-orange-dark transition-colors"
          >
            Vezi Proprietățile Noastre
          </a>
        </div>
      </div>
    </div>
  );
}