import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ReactNode } from '../types';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-6 w-full fixed top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-secondary/20">
      <div className="container flex justify-between items-center">
        <Link to="/">
          <motion.div 
            className="font-techno text-2xl text-secondary font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            PORTFOLIO
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-black/95 border-b border-secondary/20 backdrop-blur-md"
        >
          <div className="container py-4 flex flex-col space-y-4">
            <MobileNavLink to="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
            <MobileNavLink to="/projects" onClick={() => setIsOpen(false)}>Projects</MobileNavLink>
            <MobileNavLink to="/about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
            <MobileNavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

type NavLinkProps = {
  to: string;
  children?: ReactNode;
};

const NavLink = ({ to, children }: NavLinkProps) => (
  <Link to={to}>
    <motion.div
      className="text-white hover:text-secondary transition-colors relative group"
      whileHover={{ scale: 1.05 }}
    >
      {children}
      <motion.span 
        className="absolute bottom-0 left-0 h-0.5 w-0 bg-secondary group-hover:w-full transition-all duration-300" 
        initial={{ width: "0%" }}
        whileHover={{ width: "100%" }}
      />
    </motion.div>
  </Link>
);

type MobileNavLinkProps = {
  to: string;
  children?: ReactNode;
  onClick: () => void;
};

const MobileNavLink = ({ 
  to, 
  children, 
  onClick 
}: MobileNavLinkProps) => (
  <Link to={to} onClick={onClick}>
    <div className="text-white hover:text-secondary py-2 transition-colors">
      {children}
    </div>
  </Link>
);

export default Navbar; 