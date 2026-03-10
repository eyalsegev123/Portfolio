import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, tech, github, live, featured }) => {
  const cardRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 300, damping: 30 });
  const glareX = useTransform(mouseX, [-0.5, 0.5], ['-50%', '150%']);
  const glareY = useTransform(mouseY, [-0.5, 0.5], ['-50%', '150%']);
  const glareOpacity = useMotionValue(0);

  const glareBackground = useTransform(
    [glareX, glareY],
    ([gx, gy]) =>
      `radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,0.3), transparent 60%)`
  );

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    glareOpacity.set(0.15);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    glareOpacity.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="glass-hover rounded-2xl overflow-hidden flex flex-col h-full cursor-pointer relative"
    >
      {/* Glare overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 rounded-2xl"
        style={{
          opacity: glareOpacity,
          background: glareBackground,
          mixBlendMode: 'overlay',
        }}
      />

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
          {tech.map((t) => (
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
              onClick={(e) => e.stopPropagation()}
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
              onClick={(e) => e.stopPropagation()}
            >
              <FaExternalLinkAlt /> Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
