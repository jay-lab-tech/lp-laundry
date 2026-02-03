
import React from 'react';

export const WHATSAPP_URL = "https://wa.me/6281234567890?text=Halo%20Laundry%20Bersih%20Jaya,%20saya%20ingin%20tanya%20layanan%20laundrynya.";

export const SERVICES = [
  {
    id: 'kiloan',
    title: 'Cuci Kiloan',
    description: 'Solusi hemat untuk pakaian sehari-hari. Sudah termasuk cuci, kering, dan lipat rapi.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
    )
  },
  {
    id: 'satuan',
    title: 'Cuci Satuan',
    description: 'Perawatan khusus untuk jas, kebaya, gaun, dan bedcover dengan teknik pencucian terbaik.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  },
  {
    id: 'setrika',
    title: 'Setrika Kilat',
    description: 'Pakaian menumpuk tapi sudah dicuci? Kami bantu setrika hingga licin dan rapi.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: 'delivery',
    title: 'Antar Jemput',
    description: 'Malas keluar rumah? Tenang, kurir kami siap menjemput dan mengantar pakaian Anda.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    )
  }
];

export const PRICING = [
  {
    id: '1',
    name: 'Cuci Kiloan Reguler',
    price: '7.000',
    unit: 'Per Kg',
    featured: false
  },
  {
    id: '2',
    name: 'Cuci Kiloan Express (1 Hari)',
    price: '12.000',
    unit: 'Per Kg',
    featured: true
  },
  {
    id: '3',
    name: 'Setrika Saja',
    price: '5.000',
    unit: 'Per Kg',
    featured: false
  }
];

export const TESTIMONIALS = [
  {
    id: 't1',
    name: 'Ibu Ratna',
    role: 'Ibu Rumah Tangga',
    content: 'Sangat terbantu dengan layanan antar jemputnya. Hasil cuciannya wangi tahan lama dan lipatannya sangat rapi.',
    avatar: 'https://picsum.photos/100/100?random=11'
  },
  {
    id: 't2',
    name: 'Budi Santoso',
    role: 'Karyawan Swasta',
    content: 'Layanan express-nya juara! Pagi taruh, besok sudah bisa dipakai buat kerja lagi. Harganya pun bersahabat.',
    avatar: 'https://picsum.photos/100/100?random=12'
  },
  {
    id: 't3',
    name: 'Siska Amelia',
    role: 'Mahasiswi',
    content: 'Cuci bedcover di sini paling oke. Bersih banget dan gak bau apek. Recommended buat anak kos!',
    avatar: 'https://picsum.photos/100/100?random=13'
  }
];
