import React from 'react';
import { Link } from 'react-router-dom';

const Hero = ({ image, title, subtitle, buttonText, buttonLink }) => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">{title}</h1>
          <p className="text-xl md:text-2xl text-white mb-8">{subtitle}</p>
          {buttonText && (
            <Link 
              to={buttonLink} 
              className="inline-block bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
            >
              {buttonText}
            </Link>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;