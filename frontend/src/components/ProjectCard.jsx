import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, tech, github, live, featured }) => (
  <div className="glass-hover rounded-2xl overflow-hidden flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
    {/* Gradient banner */}
    <div className="h-32 bg-gradient-to-br from-cyan/20 via-indigo-500/10 to-purple-500/20 flex items-center justify-center relative">
      {featured && (
        <span className="absolute top-3 right-3 text-xs font-mono bg-cyan/20 border border-cyan/30 text-cyan px-2 py-1 rounded">
          Featured
        </span>
      )}
      <span className="text-4xl font-bold gradient-text opacity-30 select-none">
        {title.charAt(0)}
      </span>
    </div>

    <div className="p-5 flex flex-col flex-1">
      <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
      <p className="text-white/60 text-sm leading-relaxed mb-4 flex-1">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map(t => (
          <span key={t} className="font-mono text-xs bg-cyan/10 border border-cyan/20 text-cyan/80 px-2 py-1 rounded">
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-3 mt-auto">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-white/60 hover:text-cyan text-sm transition-colors"
          >
            <FaGithub /> GitHub
          </a>
        )}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-white/60 hover:text-cyan text-sm transition-colors"
          >
            <FaExternalLinkAlt /> Live
          </a>
        )}
      </div>
    </div>
  </div>
);

export default ProjectCard;
