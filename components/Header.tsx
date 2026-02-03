
import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { WHATSAPP_URL } from '../constants';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/></svg>
          </div>
          <span className="text-xl font-bold text-slate-900">Bersih Jaya</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="font-medium text-slate-600 hover:text-blue-600 transition-colors">Layanan</a>
          <a href="#pricing" className="font-medium text-slate-600 hover:text-blue-600 transition-colors">Harga</a>
          <a href="#testimonials" className="font-medium text-slate-600 hover:text-blue-600 transition-colors">Testimoni</a>
          <Button href={WHATSAPP_URL} variant="primary" className="py-2 px-5 text-sm">
            WhatsApp Kami
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 p-6 flex flex-col gap-4 shadow-xl">
          <a href="#services" className="font-medium text-slate-600 py-2 border-b border-slate-50" onClick={() => setIsMobileMenuOpen(false)}>Layanan</a>
          <a href="#pricing" className="font-medium text-slate-600 py-2 border-b border-slate-50" onClick={() => setIsMobileMenuOpen(false)}>Harga</a>
          <a href="#testimonials" className="font-medium text-slate-600 py-2 border-b border-slate-50" onClick={() => setIsMobileMenuOpen(false)}>Testimoni</a>
          <Button href={WHATSAPP_URL} variant="primary" className="w-full">
            WhatsApp Kami
          </Button>
        </div>
      )}
    </header>
  );
};
