import { useState, useMemo } from 'react';
import { installations } from '@/data/installations';
import { brands } from '@/data/brands';
import { MapPin, X, Filter, Building2 } from 'lucide-react';

interface MapMarker {
  id: string;
  city: string;
  state: string;
  lat: number;
  lng: number;
  brandName: string;
  machineName: string;
  customer: string;
}

export function MapPage() {
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [selectedMarker, setSelectedMarker] = useState<MapMarker | null>(null);

  // Get unique brands that have installations
  const brandsWithInstallations = useMemo(() => {
    const brandIds = [...new Set(installations.map(i => i.brandId))];
    return brandIds.map(id => brands.find(b => b.id === id)).filter(Boolean);
  }, []);

  // Filter markers based on selected brand
  const markers = useMemo(() => {
    let filtered = installations;
    if (selectedBrand !== 'all') {
      filtered = installations.filter(i => i.brandId === selectedBrand);
    }
    
    return filtered.map(inst => {
      const brand = brands.find(b => b.id === inst.brandId);
      const machine = brand?.machines.find(m => m.id === inst.machineId);
      return {
        id: inst.id,
        city: inst.city,
        state: inst.state,
        lat: inst.lat,
        lng: inst.lng,
        brandName: brand?.name || 'Unknown',
        machineName: machine?.name || 'Unknown Machine',
        customer: inst.customer,
      };
    });
  }, [selectedBrand]);

  // Calculate map bounds for India
  const indiaBounds = {
    minLat: 6.5,
    maxLat: 37.5,
    minLng: 68,
    maxLng: 97.5,
  };

  // Convert lat/lng to SVG coordinates
  const latLngToSvg = (lat: number, lng: number) => {
    const x = ((lng - indiaBounds.minLng) / (indiaBounds.maxLng - indiaBounds.minLng)) * 100;
    const y = 100 - ((lat - indiaBounds.minLat) / (indiaBounds.maxLat - indiaBounds.minLat)) * 100;
    return { x, y };
  };

  // Group markers by city for clustering
  const groupedMarkers = useMemo(() => {
    const groups: Record<string, MapMarker[]> = {};
    markers.forEach(marker => {
      const key = `${marker.city}-${marker.state}`;
      if (!groups[key]) groups[key] = [];
      groups[key].push(marker);
    });
    return groups;
  }, [markers]);

  return (
    <div className="min-h-screen bg-[#0B0C0F] pt-20 px-6 pb-12">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-6">
        <div className="flex items-center gap-3 mb-4">
          <MapPin className="w-6 h-6 text-[#3AA3FF]" />
          <h1 className="font-display font-bold text-[#F2F5FA]" style={{ fontSize: 'clamp(28px, 3vw, 44px)', lineHeight: 1.05, letterSpacing: '-0.01em' }}>
            Installations Map
          </h1>
        </div>
        <p className="text-[#A6AFBF] text-base max-w-xl">
          View machine installations across India. Filter by brand to see specific deployments.
        </p>
      </div>

      {/* Stats & Filter */}
      <div className="max-w-6xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <div>
            <span className="font-display font-bold text-2xl text-[#3AA3FF]">{markers.length}</span>
            <span className="ml-2 text-sm text-[#A6AFBF]">Installations</span>
          </div>
          <div>
            <span className="font-display font-bold text-2xl text-[#3AA3FF]">{Object.keys(groupedMarkers).length}</span>
            <span className="ml-2 text-sm text-[#A6AFBF]">Cities</span>
          </div>
        </div>

        {/* Brand Filter */}
        <div className="flex items-center gap-3">
          <Filter className="w-4 h-4 text-[#A6AFBF]" />
          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="bg-[#14171C] border border-[rgba(242,245,250,0.12)] text-[#F2F5FA] text-sm px-4 py-2 outline-none focus:border-[#3AA3FF]/50"
          >
            <option value="all">All Brands</option>
            {brandsWithInstallations.map(brand => (
              <option key={brand!.id} value={brand!.id}>{brand!.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Map Container */}
      <div className="max-w-6xl mx-auto">
        <div className="relative aspect-[16/10] bg-[#14171C] border border-[rgba(242,245,250,0.12)] overflow-hidden">
          {/* India Map SVG */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Simplified India outline */}
            <path
              d="M28,85 L25,80 L22,75 L20,70 L18,65 L17,60 L16,55 L15,50 L16,45 L18,40 L20,35 L23,30 L26,25 L30,20 L35,16 L40,13 L45,11 L50,10 L55,10 L60,11 L65,13 L70,16 L75,20 L78,25 L80,30 L82,35 L83,40 L84,45 L85,50 L86,55 L87,60 L88,65 L89,70 L90,75 L91,80 L92,85 L93,90 L94,95 L95,100 L90,98 L85,95 L80,92 L75,90 L70,88 L65,86 L60,85 L55,84 L50,83 L45,84 L40,85 L35,86 L30,87 L25,88 L20,89 L15,90 L10,91 L5,92 L0,93 L2,88 L4,83 L6,78 L8,73 L10,68 L12,63 L14,58 L16,53 L18,48 L20,43 L22,38 L24,33 L26,28 L28,23 L30,18 L32,13 L34,8 L36,3 L38,0 L40,2 L42,4 L44,6 L46,8 L48,10 L50,12 L52,14 L54,16 L56,18 L58,20 L60,22 L62,24 L64,26 L66,28 L68,30 L70,32 L72,34 L74,36 L76,38 L78,40 L80,42 L82,44 L84,46 L86,48 L88,50 L90,52 L92,54 L94,56 L96,58 L98,60 L100,62 L98,64 L96,66 L94,68 L92,70 L90,72 L88,74 L86,76 L84,78 L82,80 L80,82 L78,84 L76,86 L74,88 L72,90 L70,92 L68,94 L66,96 L64,98 L62,100 L60,98 L58,96 L56,94 L54,92 L52,90 L50,88 L48,86 L46,84 L44,82 L42,80 L40,78 L38,76 L36,74 L34,72 L32,70 L30,68 L28,66 L26,64 L24,62 L22,60 L20,58 L18,56 L16,54 L14,52 L12,50 L10,48 L8,46 L6,44 L4,42 L2,40 L0,38 L2,36 L4,34 L6,32 L8,30 L10,28 L12,26 L14,24 L16,22 L18,20 L20,18 L22,16 L24,14 L26,12 L28,10 L30,8 L32,6 L34,4 L36,2 L38,0"
              fill="none"
              stroke="rgba(242,245,250,0.15)"
              strokeWidth="0.3"
              vectorEffect="non-scaling-stroke"
            />
            
            {/* Grid lines */}
            {[20, 40, 60, 80].map(x => (
              <line key={`v${x}`} x1={x} y1="0" x2={x} y2="100" stroke="rgba(242,245,250,0.05)" strokeWidth="0.1" />
            ))}
            {[20, 40, 60, 80].map(y => (
              <line key={`h${y}`} x1="0" y1={y} x2="100" y2={y} stroke="rgba(242,245,250,0.05)" strokeWidth="0.1" />
            ))}
          </svg>

          {/* Markers */}
          {Object.entries(groupedMarkers).map(([key, cityMarkers]) => {
            const firstMarker = cityMarkers[0];
            const { x, y } = latLngToSvg(firstMarker.lat, firstMarker.lng);
            const count = cityMarkers.length;
            
            return (
              <button
                key={key}
                onClick={() => setSelectedMarker(firstMarker)}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <div className="relative">
                  {/* Pulse effect */}
                  <div className="absolute inset-0 bg-[#3AA3FF]/30 rounded-full animate-ping" style={{ width: '24px', height: '24px', margin: '-4px' }} />
                  
                  {/* Marker */}
                  <div className="relative w-4 h-4 bg-[#3AA3FF] rounded-full border-2 border-[#0B0C0F] flex items-center justify-center group-hover:scale-125 transition-transform">
                    {count > 1 && (
                      <span className="absolute -top-2 -right-2 bg-[#14171C] text-[#3AA3FF] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-[#3AA3FF]">
                        {count}
                      </span>
                    )}
                  </div>
                  
                  {/* City label */}
                  <span className="absolute top-5 left-1/2 -translate-x-1/2 text-[10px] font-mono text-[#A6AFBF] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    {firstMarker.city}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-4 flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#3AA3FF] rounded-full" />
            <span className="text-xs text-[#A6AFBF]">Installation</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#3AA3FF] rounded-full relative">
              <span className="absolute -top-1 -right-1 bg-[#14171C] text-[#3AA3FF] text-[8px] font-bold w-3 h-3 rounded-full flex items-center justify-center border border-[#3AA3FF]">2</span>
            </div>
            <span className="text-xs text-[#A6AFBF]">Multiple machines</span>
          </div>
        </div>
      </div>

      {/* Marker Detail Modal */}
      {selectedMarker && (
        <div 
          className="fixed inset-0 z-[200] bg-[#0B0C0F]/80 flex items-center justify-center p-6"
          onClick={() => setSelectedMarker(null)}
        >
          <div 
            className="w-full max-w-md bg-[#14171C] border border-[rgba(242,245,250,0.12)]"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-[rgba(242,245,250,0.12)]">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#3AA3FF]" />
                <h3 className="font-display font-semibold text-[#F2F5FA]">
                  {selectedMarker.city}, {selectedMarker.state}
                </h3>
              </div>
              <button
                onClick={() => setSelectedMarker(null)}
                className="p-2 hover:bg-[rgba(242,245,250,0.08)] transition-colors"
              >
                <X className="w-4 h-4 text-[#A6AFBF]" />
              </button>
            </div>
            
            <div className="p-4">
              {/* Get all machines at this location */}
              {installations
                .filter(i => i.city === selectedMarker.city && i.state === selectedMarker.state)
                .map((inst, idx) => {
                  const brand = brands.find(b => b.id === inst.brandId);
                  const machine = brand?.machines.find(m => m.id === inst.machineId);
                  return (
                    <div key={inst.id} className={`${idx > 0 ? 'mt-4 pt-4 border-t border-[rgba(242,245,250,0.08)]' : ''}`}>
                      <div className="flex items-center gap-2 mb-2">
                        <Building2 className="w-4 h-4 text-[#A6AFBF]" />
                        <span className="text-sm text-[#A6AFBF]">{inst.customer}</span>
                      </div>
                      <p className="text-sm text-[#F2F5FA] font-medium">{machine?.name}</p>
                      <p className="text-xs text-[#A6AFBF]">{brand?.name}</p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
