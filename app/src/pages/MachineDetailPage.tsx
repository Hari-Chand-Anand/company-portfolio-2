import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMachineById } from '@/data/brands';
import { ArrowLeft, Play, FileText, Box, X } from 'lucide-react';

export function MachineDetailPage() {
  const { brandId, machineId } = useParams<{ brandId: string; machineId: string }>();
  const machine = getMachineById(brandId || '', machineId || '');
  const [show3D, setShow3D] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  if (!machine) {
    return (
      <div className="min-h-screen bg-[#0B0C0F] pt-20 px-6 pb-12 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display font-bold text-2xl text-[#F2F5FA] mb-4">Machine Not Found</h1>
          <Link to={`/machines/${brandId}`} className="text-[#3AA3FF] hover:underline">
            Back to Brand
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0C0F] pt-20 px-6 pb-12">
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto mb-6">
        <Link
          to={`/machines/${brandId}`}
          className="inline-flex items-center gap-2 text-sm text-[#A6AFBF] hover:text-[#F2F5FA] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to {machine.type} Machines
        </Link>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Image & Actions */}
        <div>
          {/* Main Image */}
          <div className="aspect-[4/3] overflow-hidden border border-[rgba(242,245,250,0.12)] mb-4 bg-[#14171C]">
            <img
              src={machine.image}
              alt={machine.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-3 gap-3">
            {machine.videoUrl && (
              <button
                onClick={() => setShowVideo(true)}
                className="flex flex-col items-center gap-2 p-4 bg-[#14171C] border border-[rgba(242,245,250,0.12)] hover:border-[#3AA3FF]/50 transition-colors"
              >
                <Play className="w-5 h-5 text-[#3AA3FF]" />
                <span className="text-xs text-[#A6AFBF]">Video</span>
              </button>
            )}
            
            {machine.catalogUrl && (
              <a
                href={machine.catalogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 bg-[#14171C] border border-[rgba(242,245,250,0.12)] hover:border-[#3AA3FF]/50 transition-colors"
              >
                <FileText className="w-5 h-5 text-[#3AA3FF]" />
                <span className="text-xs text-[#A6AFBF]">Catalog</span>
              </a>
            )}
            
            {machine.has3DModel && (
              <button
                onClick={() => setShow3D(true)}
                className="flex flex-col items-center gap-2 p-4 bg-[#14171C] border border-[rgba(242,245,250,0.12)] hover:border-[#3AA3FF]/50 transition-colors"
              >
                <Box className="w-5 h-5 text-[#3AA3FF]" />
                <span className="text-xs text-[#A6AFBF]">3D Model</span>
              </button>
            )}
          </div>
        </div>

        {/* Right Column - Details */}
        <div>
          {/* Title & Stock */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-[#A6AFBF] mb-1">
                {machine.type} • {machine.model}
              </p>
              <h1 className="font-display font-bold text-2xl text-[#F2F5FA]">
                {machine.name}
              </h1>
            </div>
            <span className={`text-xs px-3 py-1.5 ${
              machine.stock === 'In Stock' 
                ? 'bg-[#3AA3FF]/20 text-[#3AA3FF]' 
                : machine.stock === 'Low Stock'
                ? 'bg-amber-500/20 text-amber-400'
                : 'bg-[rgba(166,175,191,0.15)] text-[#A6AFBF]'
            }`}>
              {machine.stock}
            </span>
          </div>

          {/* Price */}
          <div className="mb-6 p-4 bg-[#14171C] border border-[rgba(242,245,250,0.12)]">
            <span className="text-xs text-[#A6AFBF] block mb-1">Price</span>
            <span className="font-display font-bold text-3xl text-[#3AA3FF]">
              {machine.price}
            </span>
          </div>

          {/* Description */}
          <p className="text-[#A6AFBF] text-sm leading-relaxed mb-6">
            {machine.description}
          </p>

          {/* Specifications */}
          <div className="border border-[rgba(242,245,250,0.12)]">
            <div className="px-4 py-3 border-b border-[rgba(242,245,250,0.12)] bg-[#14171C]">
              <h3 className="font-display font-semibold text-sm text-[#F2F5FA]">Specifications</h3>
            </div>
            <div className="divide-y divide-[rgba(242,245,250,0.08)]">
              {Object.entries(machine.specifications).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between px-4 py-3">
                  <span className="text-sm text-[#A6AFBF]">{key}</span>
                  <span className="text-sm text-[#F2F5FA] font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <button className="w-full mt-6 py-4 bg-[#3AA3FF] text-[#0B0C0F] font-display font-semibold text-sm hover:bg-[#3AA3FF]/90 transition-colors">
            Request Quote
          </button>
        </div>
      </div>

      {/* 3D Model Modal */}
      {show3D && machine.has3DModel && (
        <div className="fixed inset-0 z-[200] bg-[#0B0C0F]/95 flex items-center justify-center p-6">
          <div className="w-full max-w-4xl bg-[#14171C] border border-[rgba(242,245,250,0.12)]">
            <div className="flex items-center justify-between p-4 border-b border-[rgba(242,245,250,0.12)]">
              <h3 className="font-display font-semibold text-[#F2F5FA]">3D Model - {machine.name}</h3>
              <button
                onClick={() => setShow3D(false)}
                className="p-2 hover:bg-[rgba(242,245,250,0.08)] transition-colors"
              >
                <X className="w-5 h-5 text-[#A6AFBF]" />
              </button>
            </div>
            <div className="aspect-video flex items-center justify-center bg-[#0B0C0F]">
              <div className="text-center">
                <Box className="w-16 h-16 text-[#3AA3FF]/30 mx-auto mb-4" />
                <p className="text-[#A6AFBF] text-sm">3D Model Viewer</p>
                <p className="text-[#A6AFBF]/60 text-xs mt-2">Interactive model would load here</p>
              </div>
            </div>
            <div className="p-4 border-t border-[rgba(242,245,250,0.12)]">
              <p className="text-xs text-[#A6AFBF]">
                Use mouse to rotate • Scroll to zoom • Right-click to pan
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {showVideo && machine.videoUrl && (
        <div className="fixed inset-0 z-[200] bg-[#0B0C0F]/95 flex items-center justify-center p-6">
          <div className="w-full max-w-4xl bg-[#14171C] border border-[rgba(242,245,250,0.12)]">
            <div className="flex items-center justify-between p-4 border-b border-[rgba(242,245,250,0.12)]">
              <h3 className="font-display font-semibold text-[#F2F5FA]">Product Video - {machine.name}</h3>
              <button
                onClick={() => setShowVideo(false)}
                className="p-2 hover:bg-[rgba(242,245,250,0.08)] transition-colors"
              >
                <X className="w-5 h-5 text-[#A6AFBF]" />
              </button>
            </div>
            <div className="aspect-video bg-[#0B0C0F]">
              <iframe
                src={machine.videoUrl}
                title={`${machine.name} Video`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
