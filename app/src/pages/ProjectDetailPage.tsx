import { useParams, Link } from 'react-router-dom';
import { getProjectById } from '@/data/projects';
import { ArrowLeft, MapPin, Calendar, FolderOpen, ExternalLink, Check, FileText, Image as ImageIcon, Video } from 'lucide-react';

export function ProjectDetailPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = getProjectById(projectId || '');

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0B0C0F] pt-20 px-6 pb-12 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display font-bold text-2xl text-[#F2F5FA] mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-[#3AA3FF] hover:underline">
            Back to Projects
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
          to="/projects"
          className="inline-flex items-center gap-2 text-sm text-[#A6AFBF] hover:text-[#F2F5FA] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Image & Quick Info */}
        <div className="lg:col-span-2">
          {/* Main Image */}
          <div className="aspect-[16/9] overflow-hidden border border-[rgba(242,245,250,0.12)] mb-6 bg-[#14171C]">
            <img
              src={project.thumbnail}
              alt={project.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Description */}
          <div className="mb-8">
            <h2 className="font-display font-semibold text-lg text-[#F2F5FA] mb-3">About This Project</h2>
            <p className="text-[#A6AFBF] text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Machines List */}
          <div className="border border-[rgba(242,245,250,0.12)]">
            <div className="px-4 py-3 border-b border-[rgba(242,245,250,0.12)] bg-[#14171C]">
              <h3 className="font-display font-semibold text-sm text-[#F2F5FA]">Machines in This Line</h3>
            </div>
            <div className="divide-y divide-[rgba(242,245,250,0.08)]">
              {project.machines.map((machine, idx) => (
                <div key={idx} className="flex items-center gap-3 px-4 py-3">
                  <Check className="w-4 h-4 text-[#3AA3FF]" />
                  <span className="text-sm text-[#F2F5FA]">{machine}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Project Details & Drive Link */}
        <div>
          {/* Project Info Card */}
          <div className="bg-[#14171C] border border-[rgba(242,245,250,0.12)] p-5 mb-6">
            <h1 className="font-display font-bold text-xl text-[#F2F5FA] mb-4">
              {project.name}
            </h1>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#3AA3FF]" />
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#A6AFBF] block">Location</span>
                  <span className="text-sm text-[#F2F5FA]">{project.location}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-[#3AA3FF]" />
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#A6AFBF] block">Completed</span>
                  <span className="text-sm text-[#F2F5FA]">
                    {new Date(project.completedDate).toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <FolderOpen className="w-4 h-4 text-[#3AA3FF]" />
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#A6AFBF] block">Machines</span>
                  <span className="text-sm text-[#F2F5FA]">{project.machines.length} units</span>
                </div>
              </div>
            </div>
          </div>

          {/* Google Drive Link */}
          <a
            href={project.driveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full p-5 bg-[#3AA3FF]/10 border border-[#3AA3FF]/30 hover:bg-[#3AA3FF]/20 transition-colors mb-6"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-[#3AA3FF]/20 flex items-center justify-center">
                <ExternalLink className="w-5 h-5 text-[#3AA3FF]" />
              </div>
              <div>
                <span className="font-display font-semibold text-sm text-[#F2F5FA] block">Open in Google Drive</span>
                <span className="text-xs text-[#A6AFBF]">View all project files</span>
              </div>
            </div>
            <p className="text-xs text-[#A6AFBF]">
              Access documentation, photos, videos, and technical specifications for this project.
            </p>
          </a>

          {/* File Types */}
          <div className="bg-[#14171C] border border-[rgba(242,245,250,0.12)] p-4">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#A6AFBF] block mb-3">Available in Drive</span>
            <div className="flex flex-wrap gap-2">
              <span className="flex items-center gap-1.5 text-xs px-3 py-1.5 bg-[rgba(242,245,250,0.08)] text-[#A6AFBF]">
                <FileText className="w-3.5 h-3.5" />
                Documents
              </span>
              <span className="flex items-center gap-1.5 text-xs px-3 py-1.5 bg-[rgba(242,245,250,0.08)] text-[#A6AFBF]">
                <ImageIcon className="w-3.5 h-3.5" />
                Photos
              </span>
              <span className="flex items-center gap-1.5 text-xs px-3 py-1.5 bg-[rgba(242,245,250,0.08)] text-[#A6AFBF]">
                <Video className="w-3.5 h-3.5" />
                Videos
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
