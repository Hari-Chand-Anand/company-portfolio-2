import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { HomePage } from '@/pages/HomePage';
import { MachinesPage } from '@/pages/MachinesPage';
import { BrandPage } from '@/pages/BrandPage';
import { MachineDetailPage } from '@/pages/MachineDetailPage';
import { ProjectsPage } from '@/pages/ProjectsPage';
import { ProjectDetailPage } from '@/pages/ProjectDetailPage';
import { MapPage } from '@/pages/MapPage';

function App() {
  return (
    <BrowserRouter>
      <div className="relative bg-[#0B0C0F] min-h-screen">
        {/* Grain Overlay */}
        <div className="grain-overlay" />
        
        {/* Navigation */}
        <Navigation />
        
        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/machines" element={<MachinesPage />} />
          <Route path="/machines/:brandId" element={<BrandPage />} />
          <Route path="/machines/:brandId/:machineId" element={<MachineDetailPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
          <Route path="/map" element={<MapPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
