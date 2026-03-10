import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import MagneticButton from '../components/MagneticButton';

const Home = () => {
  const sectionRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlightOpacity = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const spotlightBackground = useTransform(
    [springX, springY],
    ([x, y]) => `radial-gradient(800px circle at ${x}px ${y}px, rgba(34,211,238,0.15), transparent 70%)`
  );

  const handleMouseMove = (e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => spotlightOpacity.set(1)}
      onMouseLeave={() => spotlightOpacity.set(0)}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient"
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, #22D3EE 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Aurora blobs */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full opacity-[0.12] blur-[80px] bg-cyan will-change-transform" style={{ animation: 'aurora-1 20s ease-in-out infinite' }} />
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] rounded-full opacity-[0.10] blur-[80px] bg-indigo-400 will-change-transform" style={{ animation: 'aurora-2 28s ease-in-out infinite' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full opacity-[0.07] blur-[80px] bg-teal-400 will-change-transform" style={{ animation: 'aurora-3 35s ease-in-out infinite' }} />

      {/* Spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{ background: spotlightBackground, opacity: spotlightOpacity }}
      />

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-cyan font-mono text-sm mb-4 tracking-widest uppercase"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          <span className="gradient-text">Eyal Segev</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/60 mb-8 font-light tracking-wide"
        >
          Software Engineer{' '}
          <span className="text-cyan">·</span>{' '}
          Full-Stack{' '}
          <span className="text-cyan">·</span>{' '}
          Meta
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-white/50 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          CS graduate from Ben-Gurion University. Currently at Meta.
          Building full-stack systems with a focus on performance and clean architecture.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <MagneticButton onClick={() => scrollToSection('projects')} primary>
            View Projects
          </MagneticButton>
          <MagneticButton onClick={() => scrollToSection('contact')}>
            Get In Touch
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40 z-20">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-cyan" />
        <span className="text-white/40 text-xs font-mono">scroll</span>
      </div>
    </section>
  );
};

export default Home;
