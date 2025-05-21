import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold text-primary">
          Visit Sammamish
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link to="/things-to-do" className="text-dark hover:text-primary transition-colors">Things To Do</Link>
          <Link to="/events" className="text-dark hover:text-primary transition-colors">Events</Link>
          <Link to="/plan-visit" className="text-dark hover:text-primary transition-colors">Plan Your Visit</Link>
          <Link to="/eat-drink" className="text-dark hover:text-primary transition-colors">Eat & Drink</Link>
          <Link to="/about" className="text-dark hover:text-primary transition-colors">About</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-dark"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white w-full py-4 shadow-md">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link to="/things-to-do" className="text-dark hover:text-primary transition-colors">Things To Do</Link>
            <Link to="/events" className="text-dark hover:text-primary transition-colors">Events</Link>
            <Link to="/plan-visit" className="text-dark hover:text-primary transition-colors">Plan Your Visit</Link>
            <Link to="/eat-drink" className="text-dark hover:text-primary transition-colors">Eat & Drink</Link>
            <Link to="/about" className="text-dark hover:text-primary transition-colors">About</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;