export interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  image: string;
  seasonal: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  message: string;
  subject: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}
