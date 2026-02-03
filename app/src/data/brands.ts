import type { Brand } from '@/types';
import productsRaw from './products.json';

// Adjust this type if your products.json has slightly different field names.
// This matches what you shared earlier.
type Product = {
  id: string;
  brand?: string;
  model: string;
  name: string;
  category?: string;
  operation?: string;
  thumbnail?: string; // e.g. "images/dy-1201s.png"
  media?: { youtubeId?: string };
  description?: string;
  spec?: Record<string, string | number>;
  features?: string[];
  application?: string;
  tags?: string[];
};

const products = productsRaw as Product[];

// helpers
const thumbToPublicPath = (thumb?: string) => {
  // products.json often has "images/xxx.png" => we want "/images/xxx.png"
  if (!thumb) return '/placeholder-machine.jpg';
  if (thumb.startsWith('/')) return thumb;
  return `/${thumb}`;
};

const youtubeToEmbedUrl = (youtubeId?: string) => {
  if (!youtubeId) return undefined;
  const [id, rest] = youtubeId.split('&');
  const params = rest ? `?${rest}` : '';
  return `https://www.youtube.com/embed/${id}${params}`;
};

export const brands: Brand[] = [
  {
    id: 'dukejia',
    name: 'DukeJIA',
    // Use any image you want as the brand logo:
    logo: '/machine_card_01.jpg',
    description: 'DukeJIA product portfolio.',
    machines: products.map((p) => ({
      id: p.id,
      name: p.name,
      model: p.model,
      type: p.category || p.operation || 'Machine',
      // If your Brand/Machine type requires these fields, keep them:
      price: '',
      stock: '',
      image: thumbToPublicPath(p.thumbnail),
      videoUrl: youtubeToEmbedUrl(p.media?.youtubeId),
      catalogUrl: '#',
      has3DModel: false,
      description: p.description || '',
      specifications: p.spec || {},
      // If your Machine type supports these extra fields, they’ll be available for later UI upgrades:
      features: p.features,
      application: p.application,
      tags: p.tags,
    })),
  },
];
