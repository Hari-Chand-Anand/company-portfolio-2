import type { Installation } from '@/types';

export const installations: Installation[] = [
  // Alpha Pack installations
  { id: 'inst-001', brandId: 'alpha', machineId: 'alpha-x200', city: 'Mumbai', state: 'Maharashtra', lat: 19.0760, lng: 72.8777, customer: 'ABC Foods', date: '2024-01-10' },
  { id: 'inst-002', brandId: 'alpha', machineId: 'alpha-x350', city: 'Pune', state: 'Maharashtra', lat: 18.5204, lng: 73.8567, customer: 'Pune Packaging', date: '2024-02-15' },
  { id: 'inst-003', brandId: 'alpha', machineId: 'alpha-s500', city: 'Bangalore', state: 'Karnataka', lat: 12.9716, lng: 77.5946, customer: 'TechPack Bengaluru', date: '2024-03-20' },
  { id: 'inst-004', brandId: 'alpha', machineId: 'alpha-x200', city: 'Delhi', state: 'Delhi', lat: 28.6139, lng: 77.2090, customer: 'Delhi Sealing Co', date: '2024-04-05' },
  { id: 'inst-005', brandId: 'alpha', machineId: 'alpha-x350', city: 'Hyderabad', state: 'Telangana', lat: 17.3850, lng: 78.4867, customer: 'Hyderabad Pack', date: '2024-05-12' },
  
  // Beta Fill installations
  { id: 'inst-006', brandId: 'beta', machineId: 'beta-f80', city: 'Chennai', state: 'Tamil Nadu', lat: 13.0827, lng: 80.2707, customer: 'Chennai Beverages', date: '2024-01-25' },
  { id: 'inst-007', brandId: 'beta', machineId: 'beta-f120', city: 'Coimbatore', state: 'Tamil Nadu', lat: 11.0168, lng: 76.9558, customer: 'Coimbatore Drinks', date: '2024-02-28' },
  { id: 'inst-008', brandId: 'beta', machineId: 'beta-f80', city: 'Ahmedabad', state: 'Gujarat', lat: 23.0225, lng: 72.5714, customer: 'Ahmedabad Liquids', date: '2024-03-15' },
  { id: 'inst-009', brandId: 'beta', machineId: 'beta-f120', city: 'Surat', state: 'Gujarat', lat: 21.1702, lng: 72.8311, customer: 'Surat Fillers', date: '2024-04-20' },
  
  // Gamma Label installations
  { id: 'inst-010', brandId: 'gamma', machineId: 'gamma-z5', city: 'Kolkata', state: 'West Bengal', lat: 22.5726, lng: 88.3639, customer: 'Kolkata Labels', date: '2024-01-18' },
  { id: 'inst-011', brandId: 'gamma', machineId: 'gamma-z10', city: 'Jaipur', state: 'Rajasthan', lat: 26.9124, lng: 75.7873, customer: 'Jaipur Packaging', date: '2024-02-22' },
  { id: 'inst-012', brandId: 'gamma', machineId: 'gamma-z5', city: 'Lucknow', state: 'Uttar Pradesh', lat: 26.8467, lng: 80.9462, customer: 'Lucknow Labels', date: '2024-03-30' },
  
  // Delta Cap installations
  { id: 'inst-013', brandId: 'delta', machineId: 'delta-c100', city: 'Indore', state: 'Madhya Pradesh', lat: 22.7196, lng: 75.8577, customer: 'Indore Caps', date: '2024-01-30' },
  { id: 'inst-014', brandId: 'delta', machineId: 'delta-c100', city: 'Nagpur', state: 'Maharashtra', lat: 21.1458, lng: 79.0882, customer: 'Nagpur Capping', date: '2024-04-10' },
  
  // Epsilon Check installations
  { id: 'inst-015', brandId: 'epsilon', machineId: 'epsilon-w50', city: 'Visakhapatnam', state: 'Andhra Pradesh', lat: 17.6868, lng: 83.2185, customer: 'Vizag Quality', date: '2024-02-05' },
  { id: 'inst-016', brandId: 'epsilon', machineId: 'epsilon-w50', city: 'Bhubaneswar', state: 'Odisha', lat: 20.2961, lng: 85.8245, customer: 'Bhubaneswar Check', date: '2024-05-25' },
  
  // Zeta Pack installations
  { id: 'inst-017', brandId: 'zeta', machineId: 'zeta-p300', city: 'Chandigarh', state: 'Punjab', lat: 30.7333, lng: 76.7794, customer: 'Chandigarh Cases', date: '2024-03-08' },
  { id: 'inst-018', brandId: 'zeta', machineId: 'zeta-p300', city: 'Kochi', state: 'Kerala', lat: 9.9312, lng: 76.2673, customer: 'Kochi Packaging', date: '2024-04-28' },
  { id: 'inst-019', brandId: 'zeta', machineId: 'zeta-p300', city: 'Goa', state: 'Goa', lat: 15.2993, lng: 74.1240, customer: 'Goa Pack', date: '2024-06-15' },
];

export const getInstallationsByBrand = (brandId: string) => {
  return installations.filter(i => i.brandId === brandId);
};

export const getInstallationsByMachine = (machineId: string) => {
  return installations.filter(i => i.machineId === machineId);
};

export const getUniqueBrandsWithInstallations = () => {
  return [...new Set(installations.map(i => i.brandId))];
};

export const getUniqueMachinesWithInstallations = () => {
  return [...new Set(installations.map(i => i.machineId))];
};
