import AnimateOnScroll from '../components/AnimateOnScroll';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Projects = () => (
  <section id="projects" className="px-6 md:px-12 lg:px-24 pt-24 pb-12" style={{ background: 'linear-gradient(180deg, #0A0F1E 0%, #0d1a2e 100%)' }}>
    <div className="max-w-6xl mx-auto">
      <AnimateOnScroll>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          My <span className="gradient-text">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-cyan rounded mb-12" />
      </AnimateOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <AnimateOnScroll key={project.id} delay={0.1 * idx}>
            <ProjectCard {...project} />
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
