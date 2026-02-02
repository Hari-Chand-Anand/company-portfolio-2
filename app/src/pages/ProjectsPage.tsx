import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import { ArrowRight, FolderOpen, MapPin, Calendar } from 'lucide-react';

export function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#0B0C0F] pt-20 px-6 pb-12">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-10">
        <div className="flex items-center gap-3 mb-4">
          <FolderOpen className="w-6 h-6 text-[#3AA3FF]" />
          <h1 className="font-display font-bold text-[#F2F5FA]" style={{ fontSize: 'clamp(28px, 3vw, 44px)', lineHeight: 1.05, letterSpacing: '-0.01em' }}>
            Projects
          </h1>
        </div>
        <p className="text-[#A6AFBF] text-base max-w-xl">
          Complete production line solutions. Click on any project to access documentation and files.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className="group bg-[#14171C] border border-[rgba(242,245,250,0.12)] overflow-hidden transition-all duration-300 hover:border-[#3AA3FF]/50 hover:-translate-y-1"
          >
            {/* Project Thumbnail */}
            <div className="aspect-[16/10] overflow-hidden bg-[#0B0C0F]">
              <img
                src={project.thumbnail}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
            
            {/* Project Info */}
            <div className="p-5">
              <div className="flex items-start justify-between mb-3">
                <h2 className="font-display font-semibold text-base text-[#F2F5FA] line-clamp-1">
                  {project.name}
                </h2>
                <ArrowRight className="w-5 h-5 text-[#A6AFBF] transition-all duration-300 group-hover:text-[#3AA3FF] group-hover:translate-x-1 flex-shrink-0" />
              </div>
              
              <p className="text-[#A6AFBF] text-sm leading-relaxed mb-4 line-clamp-2">
                {project.description}
              </p>
              
              {/* Machines List */}
              <div className="mb-4">
                <p className="text-[10px] font-mono uppercase tracking-wider text-[#A6AFBF] mb-2">
                  Machines Included
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.machines.slice(0, 3).map((machine, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2 py-0.5 bg-[rgba(242,245,250,0.08)] text-[#A6AFBF]"
                    >
                      {machine.split(' ').slice(0, 2).join(' ')}
                    </span>
                  ))}
                  {project.machines.length > 3 && (
                    <span className="text-[10px] px-2 py-0.5 bg-[rgba(242,245,250,0.08)] text-[#A6AFBF]">
                      +{project.machines.length - 3}
                    </span>
                  )}
                </div>
              </div>
              
              {/* Meta */}
              <div className="flex items-center gap-4 pt-4 border-t border-[rgba(242,245,250,0.12)]">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#A6AFBF]" />
                  <span className="text-xs text-[#A6AFBF]">{project.location.split(',')[0]}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#A6AFBF]" />
                  <span className="text-xs text-[#A6AFBF]">
                    {new Date(project.completedDate).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
