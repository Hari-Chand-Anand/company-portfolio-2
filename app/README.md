# HCA Internal Portfolio

Quiet-tech, neo-minimal sales catalogue portal for internal use.

## Quick Start

```bash
# Install dependencies
npm install

# Run locally
npm run dev

# Open http://localhost:5173
```

## Structure

- **Home** — Navigate to Machines, Projects, or Map
- **Machines** → Brands → Machines → Machine Details (price, stock, video, 3D, catalog)
- **Projects** → Project List → Project Details (Google Drive integration)
- **Map** — India map with installation pins, filterable by brand

## Data Files (Edit These)

| File | What to Edit |
|------|-------------|
| `src/data/brands.ts` | Add/edit brands and machines |
| `src/data/projects.ts` | Add/edit projects and Drive links |
| `src/data/installations.ts` | Add/edit map pins |

Put images in `/public` folder.

See `DATA_GUIDE.md` for detailed examples.

## Build for Production

```bash
npm run build
```

Output goes to `/dist` folder.
