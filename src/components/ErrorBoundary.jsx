// src/components/ErrorBoundary.jsx

import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(Error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Oops! Ceva nu a mers bine.</h2>
            <p className="text-gray-600 mb-4">
              Ne cerem scuze pentru inconveniență. Vă rugăm să reîncărcați pagina sau să încercați mai târziu.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-brand-orange text-white px-4 py-2 rounded-md hover:bg-brand-orange-dark transition-colors"
            >
              Reîncarcă pagina
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;