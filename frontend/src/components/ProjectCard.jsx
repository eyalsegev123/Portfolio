import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const useCardTilt = () => {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });
  const glareX = useTransform(mouseX, [-0.5, 0.5], ['-50%', '150%']);
  const glareY = useTransform(mouseY, [-0.5, 0.5], ['-50%', '150%']);
  const glareOpacity = useMotionValue(0);
  const glareBackground = useTransform(
    [glareX, glareY],
    ([gx, gy]) => `radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,0.25), transparent 60%)`
  );

  const handlers = {
    onMouseMove: (e) => {
      const rect = cardRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
      mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    },
    onMouseEnter: () => glareOpacity.set(0.12),
    onMouseLeave: () => { mouseX.set(0); mouseY.set(0); glareOpacity.set(0); },
  };

  return { cardRef, rotateX, rotateY, glareOpacity, glareBackground, handlers };
};

const TechPill = ({ label, accent }) => (
  <span
    className="font-mono text-xs px-2 py-0.5 rounded-full border"
    style={{ color: accent, borderColor: `${accent}35`, background: `${accent}10` }}
  >
    {label}
  </span>
);

const Links = ({ github, live, accent }) => (
  <div className="flex items-center gap-4">
    {github && (
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="flex items-center gap-1.5 text-sm font-medium text-white/50 hover:text-white transition-colors duration-200"
      >
        <FaGithub className="text-base" /> GitHub
      </a>
    )}
    {live && (
      <a
        href={live}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
        style={{ color: accent }}
      >
        <FaExternalLinkAlt className="text-xs" /> Live
      </a>
    )}
  </div>
);

/* ── Featured card — horizontal layout ────────────────────────── */
const FeaturedCard = ({ title, description, tech, github, live, accent, label }) => {
  const { cardRef, rotateX, rotateY, glareOpacity, glareBackground, handlers } = useCardTilt();

  return (
    <motion.div
      ref={cardRef}
      {...handlers}
      style={{ rotateX, rotateY, transformPerspective: 1200, transformStyle: 'preserve-3d' }}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="relative rounded-2xl overflow-hidden flex flex-col lg:flex-row h-full cursor-default border border-white/8"
      // subtle always-on glow matching accent
    >
      {/* Card background */}
      <div className="absolute inset-0 bg-white/[0.04]" />

      {/* Glare */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-20 rounded-2xl"
        style={{ opacity: glareOpacity, background: glareBackground, mixBlendMode: 'overlay' }}
      />

      {/* Left accent panel */}
      <div
        className="relative flex-shrink-0 lg:w-[38%] flex flex-col justify-between p-6 lg:p-8 h-36 lg:h-auto"
        style={{
          background: `linear-gradient(135deg, ${accent}1A 0%, ${accent}08 60%, transparent 100%)`,
          borderRight: `1px solid ${accent}20`,
        }}
      >
        {/* Corner glow */}
        <div
          className="absolute top-0 left-0 w-32 h-32 rounded-full blur-2xl pointer-events-none"
          style={{ background: `${accent}22` }}
        />

        <div className="relative z-10">
          <span
            className="inline-block text-xs font-mono uppercase tracking-widest px-2 py-1 rounded-md border"
            style={{ color: accent, borderColor: `${accent}35`, background: `${accent}15` }}
          >
            Featured
          </span>
        </div>

        <div className="relative z-10 mt-auto">
          <span
            className="text-[5rem] leading-none font-black select-none"
            style={{ color: accent, opacity: 0.12 }}
          >
            {title.charAt(0)}
          </span>
          {label && (
            <p className="text-xs font-mono mt-2" style={{ color: accent, opacity: 0.5 }}>
              {label}
            </p>
          )}
        </div>
      </div>

      {/* Right content */}
      <div className="relative z-10 flex-1 flex flex-col p-6 lg:p-8">
        <h3 className="text-white font-bold text-xl mb-2 tracking-tight">{title}</h3>
        <p className="text-white/55 text-sm leading-relaxed flex-1 mb-5">{description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {tech.map((t) => <TechPill key={t} label={t} accent={accent} />)}
        </div>

        <Links github={github} live={live} accent={accent} />
      </div>

      {/* Accent border glow on hover */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          boxShadow: `inset 0 0 0 1px ${accent}40`,
          opacity: 0,
        }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
      />
    </motion.div>
  );
};

/* ── Standard card — compact, no banner ───────────────────────── */
const StandardCard = ({ title, description, tech, github, live, accent }) => {
  const { cardRef, rotateX, rotateY, glareOpacity, glareBackground, handlers } = useCardTilt();

  return (
    <motion.div
      ref={cardRef}
      {...handlers}
      style={{ rotateX, rotateY, transformPerspective: 1200, transformStyle: 'preserve-3d' }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="relative rounded-2xl overflow-hidden flex flex-col h-full cursor-default border border-white/8"
    >
      {/* Card background */}
      <div className="absolute inset-0 bg-white/[0.04]" />

      {/* Glare */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-20 rounded-2xl"
        style={{ opacity: glareOpacity, background: glareBackground, mixBlendMode: 'overlay' }}
      />

      {/* Accent top border */}
      <div className="h-[2px] w-full flex-shrink-0" style={{ background: `linear-gradient(90deg, ${accent}80, transparent)` }} />

      <div className="relative z-10 flex flex-col flex-1 p-5">
        <div className="flex items-start justify-between mb-3 gap-2">
          <h3 className="text-white font-semibold text-base leading-snug">{title}</h3>
          <div className="flex items-center gap-2 flex-shrink-0 mt-0.5">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-white/30 hover:text-white/80 transition-colors duration-200"
              >
                <FaGithub className="text-base" />
              </a>
            )}
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="transition-colors duration-200"
                style={{ color: `${accent}99` }}
                onMouseEnter={(e) => e.currentTarget.style.color = accent}
                onMouseLeave={(e) => e.currentTarget.style.color = `${accent}99`}
              >
                <FaExternalLinkAlt className="text-xs" />
              </a>
            )}
          </div>
        </div>

        <p className="text-white/50 text-sm leading-relaxed flex-1 mb-4">{description}</p>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {tech.map((t) => <TechPill key={t} label={t} accent={accent} />)}
        </div>
      </div>

      {/* Accent border glow on hover */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{ boxShadow: `inset 0 0 0 1px ${accent}35`, opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
      />
    </motion.div>
  );
};

/* ── Exported component ───────────────────────────────────────── */
const ProjectCard = (props) => {
  if (props.featured) return <FeaturedCard {...props} />;
  return <StandardCard {...props} />;
};

export default ProjectCard;
