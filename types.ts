
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PriceItem {
  id: string;
  name: string;
  price: string;
  unit: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}
