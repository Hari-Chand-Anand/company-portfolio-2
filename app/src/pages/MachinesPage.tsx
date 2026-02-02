import { Link } from 'react-router-dom';
import { brands } from '@/data/brands';
import { ArrowRight, Settings } from 'lucide-react';

export function MachinesPage() {
  return (
    <div className="min-h-screen bg-[#0B0C0F] pt-20 px-6 pb-12">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-10">
        <div className="flex items-center gap-3 mb-4">
          <Settings className="w-6 h-6 text-[#3AA3FF]" />
          <h1 className="font-display font-bold text-[#F2F5FA]" style={{ fontSize: 'clamp(28px, 3vw, 44px)', lineHeight: 1.05, letterSpacing: '-0.01em' }}>
            Machines
          </h1>
        </div>
        <p className="text-[#A6AFBF] text-base max-w-xl">
          Select a brand to view available machines, specifications, pricing, and stock status.
        </p>
      </div>

      {/* Brands Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {brands.map((brand) => (
          <Link
            key={brand.id}
            to={`/machines/${brand.id}`}
            className="group bg-[#14171C] border border-[rgba(242,245,250,0.12)] overflow-hidden transition-all duration-300 hover:border-[#3AA3FF]/50 hover:-translate-y-1"
          >
            {/* Brand Image */}
            <div className="aspect-[16/10] overflow-hidden bg-[#0B0C0F]">
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
            
            {/* Brand Info */}
            <div className="p-5">
              <div className="flex items-start justify-between mb-3">
                <h2 className="font-display font-semibold text-lg text-[#F2F5FA]">
                  {brand.name}
                </h2>
                <ArrowRight className="w-5 h-5 text-[#A6AFBF] transition-all duration-300 group-hover:text-[#3AA3FF] group-hover:translate-x-1" />
              </div>
              
              <p className="text-[#A6AFBF] text-sm leading-relaxed mb-4 line-clamp-2">
                {brand.description}
              </p>
              
              <div className="flex items-center gap-4 pt-4 border-t border-[rgba(242,245,250,0.12)]">
                <div>
                  <span className="font-display font-bold text-[#3AA3FF]">{brand.machines.length}</span>
                  <span className="ml-1 text-xs text-[#A6AFBF]">machines</span>
                </div>
                <div className="flex-1" />
                <span className="text-xs text-[#3AA3FF] font-medium">
                  View all
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
