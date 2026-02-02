import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'pouch-carton-line-01',
    name: 'Pouch + Carton Line - Mumbai',
    description: 'Complete turnkey solution for pouch packaging with automatic carton integration. Includes sealing, filling, and cartoning stations.',
    thumbnail: '/thumb_project_01.jpg',
    driveUrl: 'https://drive.google.com/drive/folders/sample-folder-1',
    machines: ['Alpha Sealer X-200', 'Beta Filler Y-80', 'Zeta Case Packer P-300'],
    location: 'Mumbai, Maharashtra',
    completedDate: '2024-01-15'
  },
  {
    id: 'bottle-label-line-01',
    name: 'Bottle + Label Line - Bangalore',
    description: 'High-speed bottling line with integrated capping and labeling systems for beverage production.',
    thumbnail: '/thumb_project_02.jpg',
    driveUrl: 'https://drive.google.com/drive/folders/sample-folder-2',
    machines: ['Beta Filler Y-120 Plus', 'Delta Capper C-100', 'Gamma Labeler Z-10 Dual'],
    location: 'Bangalore, Karnataka',
    completedDate: '2024-02-20'
  },
  {
    id: 'sachet-case-line-01',
    name: 'Sachet + Case Line - Delhi',
    description: 'Precision sachet production line with quality control and automatic case packing.',
    thumbnail: '/thumb_project_03.jpg',
    driveUrl: 'https://drive.google.com/drive/folders/sample-folder-3',
    machines: ['Alpha Sealer X-350 Pro', 'Epsilon Checkweigher W-50', 'Zeta Case Packer P-300'],
    location: 'Delhi NCR',
    completedDate: '2024-03-10'
  },
  {
    id: 'complete-beverage-line-01',
    name: 'Complete Beverage Line - Hyderabad',
    description: 'End-to-end beverage packaging solution from filling to palletizing.',
    thumbnail: '/hero_project_01.jpg',
    driveUrl: 'https://drive.google.com/drive/folders/sample-folder-4',
    machines: ['Beta Filler Y-120 Plus', 'Delta Capper C-100', 'Gamma Labeler Z-5', 'Epsilon Checkweigher W-50'],
    location: 'Hyderabad, Telangana',
    completedDate: '2024-04-05'
  },
  {
    id: 'pharma-packaging-line-01',
    name: 'Pharma Packaging Line - Ahmedabad',
    description: 'GMP-compliant pharmaceutical packaging line with validation documentation.',
    thumbnail: '/thumb_machine_02.jpg',
    driveUrl: 'https://drive.google.com/drive/folders/sample-folder-5',
    machines: ['Beta Filler Y-80', 'Gamma Labeler Z-10 Dual', 'Epsilon Checkweigher W-50'],
    location: 'Ahmedabad, Gujarat',
    completedDate: '2024-05-18'
  },
  {
    id: 'food-processing-line-01',
    name: 'Food Processing Line - Chennai',
    description: 'Complete food packaging line with modified atmosphere packaging capability.',
    thumbnail: '/thumb_machine_01.jpg',
    driveUrl: 'https://drive.google.com/drive/folders/sample-folder-6',
    machines: ['Alpha Sealer X-350 Pro', 'Alpha Shrink Wrap S-500', 'Zeta Case Packer P-300'],
    location: 'Chennai, Tamil Nadu',
    completedDate: '2024-06-22'
  }
];

export const getProjectById = (id: string) => {
  return projects.find(p => p.id === id);
};
