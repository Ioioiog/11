// src/components/ViewingRequestForm/index.jsx
import PropTypes from 'prop-types';
import { useState } from 'react';
import { X } from 'lucide-react';

export const ViewingRequestForm = ({ onSubmit, onClose, propertyTitle }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        <form onSubmit={handleSubmit}>
          {/* Form fields */}
          <button
            type="submit"
            className="px-4 py-2 bg-brand-orange text-white rounded-md 
            hover:bg-brand-orange-dark transition-colors"
          >
            Trimite
          </button>
        </form>
      </div>
    </div>
  );
};

ViewingRequestForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  propertyTitle: PropTypes.string
};

export default ViewingRequestForm;