// EXAMPLE FILE - Shows how to add your own brands
// Copy this structure into brands.ts

import type { Brand } from '@/types';

export const myBrands: Brand[] = [
  {
    id: 'mycompany',              // Unique ID (lowercase, no spaces)
    name: 'My Company Name',      // Display name
    logo: '/my-logo.jpg',         // Image in /public folder
    description: 'Description of your company and what you manufacture.',
    machines: [
      {
        id: 'mycompany-model1',   // Unique machine ID
        name: 'Model 1 Pro',      // Display name
        model: 'M1-Pro',          // Model number
        type: 'Sealer',           // Machine category
        price: '₹10,00,000',      // Price
        stock: 'In Stock',        // Stock status
        image: '/machine-1.jpg',  // Machine photo
        videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID',
        catalogUrl: 'https://your-website.com/catalog.pdf',
        has3DModel: true,         // Set true to show 3D button
        description: 'Description of what this machine does.',
        specifications: {
          'Speed': '100 units/min',
          'Power': '2.5 kW',
          'Voltage': '415V, 3 Phase',
          'Dimensions': '2000 x 700 x 1400 mm',
          'Weight': '350 kg',
          'Warranty': '1 Year',
        }
      },
      {
        id: 'mycompany-model2',
        name: 'Model 2 Elite',
        model: 'M2-Elite',
        type: 'Filler',
        price: '₹15,00,000',
        stock: '2-3 weeks',
        image: '/machine-2.jpg',
        videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID',
        catalogUrl: 'https://your-website.com/catalog2.pdf',
        has3DModel: false,
        description: 'Another machine description.',
        specifications: {
          'Speed': '120 bottles/min',
          'Power': '4 kW',
          'Voltage': '415V, 3 Phase',
          'Dimensions': '2200 x 800 x 1500 mm',
          'Weight': '420 kg',
          'Warranty': '1 Year',
        }
      }
    ]
  }
];
