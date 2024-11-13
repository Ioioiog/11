// src/components/ViewingRequestForm.jsx

import PropTypes from 'prop-types';
import { useState } from 'react';
import { X } from 'lucide-react';

export function ViewingRequestForm({ onSubmit, onClose, propertyTitle }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format email body
    const emailBody = `
Solicitare programare vizionare${propertyTitle ? ` pentru ${propertyTitle}` : ''}:

Nume: ${formData.name}
Email: ${formData.email}
Telefon: ${formData.phone}
Data preferată: ${formData.preferredDate}
${formData.message ? `\nMesaj: ${formData.message}` : ''}
    `;

    // Create mailto link
    const mailtoLink = `mailto:reddomainrent@gmail.com?subject=${encodeURIComponent('Programare Vizionare' + (propertyTitle ? ` - ${propertyTitle}` : ''))}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Call original onSubmit
    onSubmit(formData);
    
    // Close form
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-1 hover:bg-gray-100 rounded-full"
        >
          <X size={20} className="text-gray-500" />
        </button>

        <h2 className="text-xl font-semibold mb-4">
          Programare Vizionare
          {propertyTitle && (
            <span className="block text-sm text-gray-500 mt-1">{propertyTitle}</span>
          )}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nume</label>
            <input
              type="text"
              required
              placeholder="Numele și prenumele"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                focus:border-brand-orange focus:ring-brand-orange"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              required
              placeholder="email@exemplu.com"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                focus:border-brand-orange focus:ring-brand-orange"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Telefon</label>
            <input
              type="tel"
              required
              placeholder="07xx xxx xxx"
              pattern="[0-9]{10}"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                focus:border-brand-orange focus:ring-brand-orange"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Data preferată</label>
            <input
              type="date"
              required
              min={new Date().toISOString().split('T')[0]}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                focus:border-brand-orange focus:ring-brand-orange"
              value={formData.preferredDate}
              onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mesaj (opțional)
            </label>
            <textarea
              placeholder="Alte detalii sau preferințe..."
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                focus:border-brand-orange focus:ring-brand-orange"
              rows="3"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
          </div>

          <div className="flex justify-end space-x-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500"
            >
              Anulare
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-brand-orange text-white rounded-md 
                hover:bg-brand-orange-dark transition-colors"
            >
              Trimite
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

ViewingRequestForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  propertyTitle: PropTypes.string
};