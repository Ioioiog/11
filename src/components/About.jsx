import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Despre Noi</h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
            ApartamentDeLux.ro este platforma ta de încredere pentru găsirea celor mai exclusiviste 
            proprietăți din București. Ne dedicăm să oferim clienților noștri experiențe de locuire 
            de neegalat, în cele mai prestigioase zone ale capitalei.
          </p>
        </div>
        
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-md bg-indigo-600 text-white mx-auto">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
                  />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Locații Premium</h3>
              <p className="mt-2 text-gray-600">
                Proprietăți în cele mai căutate zone din București
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-md bg-indigo-600 text-white mx-auto">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M13 10V3L4 14h7v7l9-11h-7z" 
                  />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Service Rapid</h3>
              <p className="mt-2 text-gray-600">
                Răspundem prompt la toate solicitările clienților
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-md bg-indigo-600 text-white mx-auto">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Calitate Garantată</h3>
              <p className="mt-2 text-gray-600">
                Toate proprietățile sunt verificate și certificate
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
