import { useParams, Link } from 'react-router-dom';
import { getBrandById } from '@/data/brands';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export function BrandPage() {
  const { brandId } = useParams<{ brandId: string }>();
  const brand = getBrandById(brandId || '');

  if (!brand) {
    return (
      <div className="min-h-screen bg-[#0B0C0F] pt-20 px-6 pb-12 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display font-bold text-2xl text-[#F2F5FA] mb-4">Brand Not Found</h1>
          <Link to="/machines" className="text-[#3AA3FF] hover:underline">
            Back to Machines
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0C0F] pt-20 px-6 pb-12">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-10">
        <Link
          to="/machines"
          className="inline-flex items-center gap-2 text-sm text-[#A6AFBF] hover:text-[#F2F5FA] transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Brands
        </Link>
        
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 overflow-hidden border border-[rgba(242,245,250,0.12)]">
            <img src={brand.logo} alt={brand.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="font-display font-bold text-[#F2F5FA]" style={{ fontSize: 'clamp(28px, 3vw, 44px)', lineHeight: 1.05, letterSpacing: '-0.01em' }}>
              {brand.name}
            </h1>
            <p className="text-[#A6AFBF] text-sm">{brand.machines.length} machines available</p>
          </div>
        </div>
        
        <p className="text-[#A6AFBF] text-base max-w-2xl">
          {brand.description}
        </p>
      </div>

      {/* Machines Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {brand.machines.map((machine) => (
          <Link
            key={machine.id}
            to={`/machines/${brand.id}/${machine.id}`}
            className="group bg-[#14171C] border border-[rgba(242,245,250,0.12)] overflow-hidden transition-all duration-300 hover:border-[#3AA3FF]/50 hover:-translate-y-1"
          >
            {/* Machine Image */}
            <div className="aspect-[16/10] overflow-hidden bg-[#0B0C0F]">
              <img
                src={machine.image}
                alt={machine.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
            
            {/* Machine Info */}
            <div className="p-5">
              <div className="flex items-start justify-between mb-2">
                <h2 className="font-display font-semibold text-base text-[#F2F5FA]">
                  {machine.name}
                </h2>
              </div>
              
              <p className="text-[#A6AFBF] text-xs font-mono uppercase tracking-wider mb-3">
                {machine.type} • {machine.model}
              </p>
              
              <div className="flex items-center justify-between pt-3 border-t border-[rgba(242,245,250,0.12)]">
                <span className="font-display font-semibold text-[#3AA3FF]">
                  {machine.price}
                </span>
                <span className={`text-xs px-2 py-1 ${
                  machine.stock === 'In Stock' 
                    ? 'bg-[#3AA3FF]/20 text-[#3AA3FF]' 
                    : machine.stock === 'Low Stock'
                    ? 'bg-amber-500/20 text-amber-400'
                    : 'bg-[rgba(166,175,191,0.15)] text-[#A6AFBF]'
                }`}>
                  {machine.stock}
                </span>
              </div>
              
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-2">
                  {machine.has3DModel && (
                    <span className="text-[10px] font-mono text-[#A6AFBF] bg-[rgba(242,245,250,0.08)] px-2 py-0.5">
                      3D
                    </span>
                  )}
                  {machine.videoUrl && (
                    <span className="text-[10px] font-mono text-[#A6AFBF] bg-[rgba(242,245,250,0.08)] px-2 py-0.5">
                      VIDEO
                    </span>
                  )}
                </div>
                <ArrowRight className="w-4 h-4 text-[#A6AFBF] transition-all duration-300 group-hover:text-[#3AA3FF] group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
