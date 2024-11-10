import React from 'react';
import { X } from 'lucide-react';

export default function PropertyModal({ property, onClose }) {
  if (!property) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose}></div>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
          <div className="relative">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-64 object-cover"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
            >
              <X size={24} />
            </button>
          </div>

          <div className="bg-white px-4 pt-5 pb-4 sm:p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{property.title}</h3>
                <p className="mt-2 text-lg text-indigo-600 font-semibold">{property.price}€ / lună</p>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <h4 className="text-lg font-medium text-gray-900">Detalii proprietate</h4>
                <dl className="mt-4 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Suprafață utilă</dt>
                    <dd className="mt-1 text-sm text-gray-900">{property.details.area} mp</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Camere</dt>
                    <dd className="mt-1 text-sm text-gray-900">{property.details.rooms}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Etaj</dt>
                    <dd className="mt-1 text-sm text-gray-900">{property.details.floor}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">An construcție</dt>
                    <dd className="mt-1 text-sm text-gray-900">{property.details.year}</dd>
                  </div>
                </dl>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <h4 className="text-lg font-medium text-gray-900">Descriere</h4>
                <p className="mt-2 text-gray-600">{property.description}</p>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <h4 className="text-lg font-medium text-gray-900">Facilități</h4>
                <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {property.amenities.map((amenity) => (
                    <li key={amenity} className="flex items-center text-gray-600">
                      <svg className="h-5 w-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={() => window.location.href = '#contact'}
            >
              Programează vizionare
            </button>
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Închide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
