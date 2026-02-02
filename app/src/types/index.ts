export interface Machine {
  id: string;
  name: string;
  model: string;
  type: string;
  price: string;
  stock: 'In Stock' | 'Low Stock' | 'Out of Stock' | '2-3 weeks';
  image: string;
  videoUrl?: string;
  catalogUrl?: string;
  has3DModel: boolean;
  description: string;
  specifications: Record<string, string>;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
  description: string;
  machines: Machine[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  driveUrl: string;
  machines: string[];
  location: string;
  completedDate: string;
}

export interface Installation {
  id: string;
  brandId: string;
  machineId: string;
  city: string;
  state: string;
  lat: number;
  lng: number;
  customer: string;
  date: string;
}
