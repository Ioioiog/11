import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    type: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({
      type: 'success',
      message: 'Mesajul a fost trimis cu succes! Vă vom contacta în curând.'
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 bg-brand-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-dark text-center mb-8">
            Contactează-ne
          </h2>
          
          <div className="bg-white shadow-lg rounded-lg p-8 border border-brand-orange/10">
            {status.message && (
              <div className={`mb-4 p-4 rounded ${
                status.type === 'success' ? 'bg-brand-orange/10 text-brand-dark' : 'bg-red-100 text-red-700'
              }`}>
                {status.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-gray-dark">
                  Nume complet
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="mt-1 block w-full rounded-md border-brand-orange/30 px-3 py-2 focus:border-brand-orange focus:ring focus:ring-brand-orange/20"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-gray-dark">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-md border-brand-orange/30 px-3 py-2 focus:border-brand-orange focus:ring focus:ring-brand-orange/20"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-brand-gray-dark">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full rounded-md border-brand-orange/30 px-3 py-2 focus:border-brand-orange focus:ring focus:ring-brand-orange/20"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-gray-dark">
                  Mesaj
                </label>
                <textarea
                  id="message"
                  rows="4"
                  required
                  className="mt-1 block w-full rounded-md border-brand-orange/30 px-3 py-2 focus:border-brand-orange focus:ring focus:ring-brand-orange/20"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-brand-orange text-white rounded-md hover:bg-brand-orange-dark transition-colors font-medium"
                  onClick={() => window.location.href = `mailto:reddomainrent@gmail.com?subject=Contact%20Form&body=Nume:%20${formData.name}%0AEmail:%20${formData.email}%0ATelefon:%20${formData.phone}%0AMesaj:%20${formData.message}`}
                >
                  Trimite mesajul
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
