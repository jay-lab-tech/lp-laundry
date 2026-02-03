
import React from 'react';
import { PRICING, WHATSAPP_URL } from '../constants';
import { Button } from './Button';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Daftar Harga Transparan</h2>
          <p className="text-slate-600">Harga bersaing dengan kualitas pelayanan premium. Tanpa biaya tersembunyi!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {PRICING.map((item) => (
            <div 
              key={item.id} 
              className={`relative bg-white p-10 rounded-3xl shadow-sm border transition-all duration-300 hover:shadow-xl ${item.featured ? 'border-blue-600 scale-105 z-10' : 'border-slate-100'}`}
            >
              {item.featured && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Paling Populer
                </span>
              )}
              <h3 className="text-xl font-bold text-slate-900 mb-2">{item.name}</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-sm font-medium text-slate-500 mr-1">Rp</span>
                <span className="text-4xl font-extrabold text-slate-900">{item.price}</span>
                <span className="text-slate-500 ml-2">/{item.unit.replace('Per ', '')}</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-slate-600 text-sm">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  Cucian dipisah per pelanggan
                </li>
                <li className="flex items-center gap-3 text-slate-600 text-sm">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  Dicuci & Keringkan (Mesin)
                </li>
                <li className="flex items-center gap-3 text-slate-600 text-sm">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  Setrika & Lipat Rapi
                </li>
              </ul>
              <Button 
                variant={item.featured ? 'primary' : 'outline'} 
                className="w-full"
                href={WHATSAPP_URL}
              >
                Pesan Sekarang
              </Button>
            </div>
          ))}
        </div>
        
        <p className="text-center mt-12 text-slate-500 text-sm italic">
          *Untuk layanan satuan (jas, bedcover, boneka, dll), silakan hubungi kami untuk informasi harga lengkap.
        </p>
      </div>
    </section>
  );
};
