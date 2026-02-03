
import React from 'react';

export const Features: React.FC = () => {
  const items = [
    { title: "Cepat & Tepat Waktu", desc: "Selesai sesuai jadwal, bahkan bisa dalam hitungan jam.", icon: "⚡" },
    { title: "Wangi Tahan Lama", desc: "Menggunakan parfum premium yang segar dan awet seharian.", icon: "🌸" },
    { title: "Profesional", desc: "Ditangani oleh tenaga ahli yang berpengalaman menjaga serat kain.", icon: "⭐" },
    { title: "Harga Terjangkau", desc: "Kualitas bintang lima, harga kaki lima untuk warga lokal.", icon: "💰" }
  ];

  return (
    <section className="py-24 bg-blue-600 text-white overflow-hidden relative">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="190" stroke="white" strokeWidth="20" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Kenapa Harus Laundry Bersih Jaya?</h2>
            <p className="text-blue-100 text-lg mb-12">
              Kami memahami bahwa pakaian bukan sekadar kain, tapi adalah investasi dan penunjang rasa percaya diri Anda. Itulah mengapa kami berkomitmen memberikan yang terbaik.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {items.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="text-4xl">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                    <p className="text-blue-100 text-sm opacity-90">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://picsum.photos/600/600?random=2" 
              alt="Happy customer" 
              className="rounded-3xl shadow-2xl border-8 border-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
