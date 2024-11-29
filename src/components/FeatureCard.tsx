import React from 'react';

interface FeatureDetailProps {
  title: string;
  description: string;
  onClose: () => void;
}

const FeatureDetail: React.FC<FeatureDetailProps> = ({ title, description, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
      <div className="bg-gradient-to-br from-blue-600 via-indigo-700 to-indigo-900 p-10 rounded-lg shadow-lg max-w-4xl w-full">
        <button
          onClick={onClose}
          className="text-white-600 mb-4"
        >
          Back
        </button>
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default FeatureDetail;