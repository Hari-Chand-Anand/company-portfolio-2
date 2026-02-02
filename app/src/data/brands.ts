import type { Brand } from '@/types';

export const brands: Brand[] = [
  {
    id: 'alpha',
    name: 'Alpha Pack',
    logo: '/machine_card_01.jpg',
    description: 'Leading manufacturer of sealing and packaging solutions with 25+ years of industry experience.',
    machines: [
      {
        id: 'alpha-x200',
        name: 'Sealer X-200',
        model: 'X-200',
        type: 'Sealer',
        price: '₹12,50,000',
        stock: 'In Stock',
        image: '/machine_card_01.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        catalogUrl: '#',
        has3DModel: true,
        description: 'High-speed automatic sealing machine with precision temperature control and conveyor integration.',
        specifications: {
          'Speed': '120 units/min',
          'Power': '3.5 kW',
          'Voltage': '415V, 3 Phase',
          'Dimensions': '2400 x 800 x 1500 mm',
          'Weight': '450 kg',
          'Warranty': '1 Year',
        }
      },
      {
        id: 'alpha-x350',
        name: 'Sealer X-350 Pro',
        model: 'X-350 Pro',
        type: 'Sealer',
        price: '₹18,75,000',
        stock: 'Low Stock',
        image: '/thumb_machine_01.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        catalogUrl: '#',
        has3DModel: true,
        description: 'Industrial-grade sealing solution with advanced PLC control and HMI interface.',
        specifications: {
          'Speed': '180 units/min',
          'Power': '5.5 kW',
          'Voltage': '415V, 3 Phase',
          'Dimensions': '2800 x 900 x 1600 mm',
          'Weight': '620 kg',
          'Warranty': '2 Years',
        }
      },
      {
        id: 'alpha-s500',
        name: 'Shrink Wrap S-500',
        model: 'S-500',
        type: 'Shrink Wrapper',
        price: '₹22,00,000',
        stock: '2-3 weeks',
        image: '/thumb_machine_03.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        catalogUrl: '#',
        has3DModel: false,
        description: 'Automatic shrink wrapping system with tunnel and sealing station.',
        specifications: {
          'Speed': '80 units/min',
          'Power': '12 kW',
          'Voltage': '415V, 3 Phase',
          'Dimensions': '4500 x 1200 x 1800 mm',
          'Weight': '850 kg',
          'Warranty': '1 Year',
        }
      }
    ]
  },
  {
    id: 'beta',
    name: 'Beta Fill',
    logo: '/machine_card_02.jpg',
    description: 'Specialized in liquid filling and capping systems for beverage and pharmaceutical industries.',
    machines: [
      {
        id: 'beta-f80',
        name: 'Filler Y-80',
        model: 'Y-80',
        type: 'Filler',
        price: '₹15,00,000',
        stock: 'In Stock',
        image: '/machine_card_02.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        catalogUrl: '#',
        has3DModel: true,
        description: 'Precision volumetric filler with 8-head rotary system for liquids.',
        specifications: {
          'Speed': '100 bottles/min',
          'Power': '4.5 kW',
          'Voltage': '415V, 3 Phase',
          'Dimensions': '2200 x 1000 x 1800 mm',
          'Weight': '550 kg',
          'Warranty': '1 Year',
        }
      },
      {
        id: 'beta-f120',
        name: 'Filler Y-120 Plus',
        model: 'Y-120 Plus',
        type: 'Filler',
        price: '₹24,50,000',
        stock: 'In Stock',
        image: '/thumb_machine_02.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        catalogUrl: '#',
        has3DModel: true,
        description: 'High-speed rotary filler with 12 heads and automatic bottle handling.',
        specifications: {
          'Speed': '150 bottles/min',
          'Power': '7.5 kW',
          'Voltage': '415V, 3 Phase',
          'Dimensions': '2800 x 1200 x 2000 mm',
          'Weight': '780 kg',
          'Warranty': '2 Years',
        }
      }
    ]
  },
  {
    id: 'gamma',
    name: 'Gamma Label',
    logo: '/machine_card_03.jpg',
    description: 'Expert in labeling solutions including self-adhesive, shrink sleeve, and wrap-around systems.',
    machines: [
      {
        id: 'gamma-z5',
        name: 'Labeler Z-5',
        model: 'Z-5',
        type: 'Labeler',
        price: '₹9,50,000',
        stock: 'In Stock',
        image: '/machine_card_03.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        catalogUrl: '#',
        has3DModel: false,
        description: 'Self-adhesive labeling machine for round and flat containers.',
        specifications: {
          'Speed': '80 labels/min',
          'Power': '2.5 kW',
          'Voltage': '415V, 3 Phase',
          'Dimensions': '1800 x 700 x 1400 mm',
          'Weight': '320 kg',
          'Warranty': '1 Year',
        }
      },
      {
        id: 'gamma-z10',
        name: 'Labeler Z-10 Dual',
        model: 'Z-10 Dual',
        type: 'Labeler',
        price: '₹16,00,000',
        stock: 'Low Stock',
        image: '/thumb_project_03.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        catalogUrl: '#',
        has3DModel: true,
        description: 'Dual-side labeling system for front and back application.',
        specifications: {
          'Speed': '120 labels/min',
          'Power': '4 kW',
          'Voltage': '415V, 3 Phase',
          'Dimensions': '2400 x 900 x 1500 mm',
          'Weight': '480 kg',
          'Warranty': '1 Year',
        }
      }
    ]
  },
  {
    id: 'delta',
    name: 'Delta Cap',
    logo: '/machine_card_04.jpg',
    description: 'Premium capping and closing solutions for all container types.',
    machines: [
      {
        id: 'delta-c100',
        name: 'Capper C-100',
        model: 'C-100',
        type: 'Capper',
        price: '₹11,00,000',
        stock: 'In Stock',
        image: '/machine_card_04.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        catalogUrl: '#',
        has3DModel: true,
        description: 'Automatic screw capping machine with torque control.',
        specifications: {
          'Speed': '90 caps/min',
          'Power': '3 kW',
          'Voltage': '415V, 3 Phase',
          'Dimensions': '2000 x 750 x 1500 mm',
          'Weight': '380 kg',
          'Warranty': '1 Year',
        }
      }
    ]
  },
  {
    id: 'epsilon',
    name: 'Epsilon Check',
    logo: '/machine_card_05.jpg',
    description: 'Precision checkweighing and inspection systems for quality control.',
    machines: [
      {
        id: 'epsilon-w50',
        name: 'Checkweigher W-50',
        model: 'W-50',
        type: 'Checkweigher',
        price: '₹14,50,000',
        stock: '2-3 weeks',
        image: '/machine_card_05.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        catalogUrl: '#',
        has3DModel: false,
        description: 'High-precision dynamic checkweigher with reject system.',
        specifications: {
          'Speed': '150 units/min',
          'Accuracy': '±0.5g',
          'Power': '2.5 kW',
          'Voltage': '415V, 3 Phase',
          'Dimensions': '1600 x 600 x 1300 mm',
          'Weight': '280 kg',
          'Warranty': '1 Year',
        }
      }
    ]
  },
  {
    id: 'zeta',
    name: 'Zeta Pack',
    logo: '/machine_card_06.jpg',
    description: 'End-of-line packaging solutions including case packing and palletizing.',
    machines: [
      {
        id: 'zeta-p300',
        name: 'Case Packer P-300',
        model: 'P-300',
        type: 'Case Packer',
        price: '₹28,00,000',
        stock: 'In Stock',
        image: '/machine_card_06.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        catalogUrl: '#',
        has3DModel: true,
        description: 'Automatic case packing system with robotic pick-and-place.',
        specifications: {
          'Speed': '25 cases/min',
          'Power': '8 kW',
          'Voltage': '415V, 3 Phase',
          'Dimensions': '3500 x 1500 x 2200 mm',
          'Weight': '1200 kg',
          'Warranty': '2 Years',
        }
      }
    ]
  }
];

export const getBrandById = (id: string) => {
  return brands.find(b => b.id === id);
};

export const getMachineById = (brandId: string, machineId: string) => {
  const brand = getBrandById(brandId);
  return brand?.machines.find(m => m.id === machineId);
};
