import React from 'react';
import { Link } from 'react-router-dom';

const FeatureCard = ({ image, title, description, link }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
      {/* Image */}
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
      <div className="absolute bottom-0 left-0 p-6 text-white">
        <h3 className="text-2xl font-serif font-bold mb-2">{title}</h3>
        <p className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{description}</p>
        <Link 
          to={link} 
          className="inline-block text-accent hover:text-white transition-colors"
        >
          Discover More →
        </Link>
      </div>
    </div>
  );
};

export default FeatureCard;