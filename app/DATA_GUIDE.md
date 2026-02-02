# HCA Portfolio - Data Guide

## Quick Start (Run Locally)

```bash
# 1. Navigate to the project folder
cd /mnt/okcomputer/output/app

# 2. Install dependencies (first time only)
npm install

# 3. Start the development server
npm run dev

# 4. Open browser to http://localhost:5173
```

---

## Where to Put Your Data

### 1. Brands & Machines → `src/data/brands.ts`

**To add a new brand:**
```typescript
{
  id: 'your-brand-id',           // lowercase, no spaces (e.g., 'omega')
  name: 'Your Brand Name',       // display name (e.g., 'Omega Tech')
  logo: '/your-image.jpg',       // put image in /public folder
  description: 'Brand description...',
  machines: [
    {
      id: 'brand-model-id',      // unique ID (e.g., 'omega-m100')
      name: 'Machine Name',      // display name
      model: 'M-100',            // model number
      type: 'Sealer',            // machine type
      price: '₹15,00,000',       // price in INR
      stock: 'In Stock',         // 'In Stock' | 'Low Stock' | '2-3 weeks' | 'Out of Stock'
      image: '/machine-photo.jpg',
      videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID',
      catalogUrl: 'https://your-catalog-link.pdf',
      has3DModel: true,          // true = shows 3D button
      description: 'Machine description...',
      specifications: {
        'Speed': '120 units/min',
        'Power': '3.5 kW',
        'Voltage': '415V, 3 Phase',
        'Dimensions': '2400 x 800 x 1500 mm',
        'Weight': '450 kg',
        'Warranty': '1 Year',
      }
    }
  ]
}
```

---

### 2. Projects → `src/data/projects.ts`

**To add a new project:**
```typescript
{
  id: 'project-id',              // unique ID (e.g., 'mumbai-line-2024')
  name: 'Project Name - City',
  description: 'What this project does...',
  thumbnail: '/project-photo.jpg',
  driveUrl: 'https://drive.google.com/drive/folders/YOUR_FOLDER_ID',
  machines: ['Brand Machine Name', 'Brand Machine Name'],
  location: 'City, State',
  completedDate: '2024-01-15'    // YYYY-MM-DD format
}
```

**Get Google Drive Folder Link:**
1. Open Google Drive
2. Right-click your project folder
3. Click "Share" → "Copy link"
4. Paste the link in `driveUrl`

---

### 3. Map Installations → `src/data/installations.ts`

**To add a new installation pin:**
```typescript
{
  id: 'inst-020',                // unique ID
  brandId: 'alpha',              // must match brand ID from brands.ts
  machineId: 'alpha-x200',       // must match machine ID from brands.ts
  city: 'City Name',
  state: 'State Name',
  lat: 19.0760,                  // latitude (use Google Maps to find)
  lng: 72.8777,                  // longitude
  customer: 'Customer Company Name',
  date: '2024-01-10'             // installation date
}
```

**Find lat/lng coordinates:**
1. Go to [Google Maps](https://maps.google.com)
2. Right-click on the location
3. The coordinates appear at the bottom (e.g., `19.0760, 72.8777`)
4. First number = lat, second = lng

---

## Adding Images

1. Put your images in the `/public` folder
2. Reference them with `/filename.jpg` in the data files
3. Recommended sizes:
   - Brand logos: 400x300px
   - Machine photos: 800x600px
   - Project thumbnails: 800x500px

---

## Example: Adding a Complete New Brand

1. **Add images to `/public`:**
   - `omega-logo.jpg`
   - `omega-machine-1.jpg`

2. **Edit `src/data/brands.ts`:**
```typescript
export const brands: Brand[] = [
  // ... existing brands ...
  
  {
    id: 'omega',
    name: 'Omega Pack',
    logo: '/omega-logo.jpg',
    description: 'Advanced packaging automation solutions.',
    machines: [
      {
        id: 'omega-m100',
        name: 'Master Sealer M-100',
        model: 'M-100',
        type: 'Sealer',
        price: '₹18,00,000',
        stock: 'In Stock',
        image: '/omega-machine-1.jpg',
        videoUrl: 'https://www.youtube.com/embed/ABC123',
        catalogUrl: '#',
        has3DModel: true,
        description: 'Industrial sealing with smart controls.',
        specifications: {
          'Speed': '150 units/min',
          'Power': '4 kW',
          'Voltage': '415V, 3 Phase',
          'Dimensions': '2500 x 900 x 1600 mm',
          'Weight': '500 kg',
          'Warranty': '2 Years',
        }
      }
    ]
  }
];
```

3. **Save and refresh** — your new brand appears!

---

## Rebuild for Production

After making changes:

```bash
# Build the production version
npm run build

# The output is in /dist folder
# Deploy this folder to your hosting
```

---

## File Structure Reference

```
/mnt/okcomputer/output/app/
├── public/                    # Put images here
│   ├── *.jpg
│   └── *.png
├── src/
│   ├── data/
│   │   ├── brands.ts         # Edit brands & machines
│   │   ├── projects.ts       # Edit projects
│   │   └── installations.ts  # Edit map pins
│   ├── pages/                # Page components
│   ├── components/           # Shared components
│   └── types/                # TypeScript types
├── package.json
└── README.md
```
