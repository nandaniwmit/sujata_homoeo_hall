export type ViewType = 'home' | 'about' | 'services' | 'gallery' | 'contact' | 'whatsapp-order';

export interface Medicine {
  id: string;
  name: string;
  brand: string;
  category: string;
  type: 'Homeopathic' | 'Allopathic' | 'OTC' | 'Device' | 'Personal Care' | 'Baby Care' | 'Supplement';
  availability: 'In Stock' | 'Available in 24h' | 'Out of Stock';
  price?: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: string;
  details: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  avatarSeed: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'store' | 'medicines' | 'products' | 'equipment';
  imageUrl: string;
  description: string;
}

export interface QuickInquiry {
  name: string;
  phone: string;
  medicineNeeded: string;
  message: string;
}

export interface WhatsAppOrder {
  customerName: string;
  mobileNumber: string;
  email: string;
  address: string;
  medicineName: string;
  prescriptionUploaded: boolean;
  prescriptionFileName?: string;
  message: string;
  preferredDeliveryTime: string;
}
