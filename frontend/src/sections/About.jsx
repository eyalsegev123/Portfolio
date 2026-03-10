import { motion } from 'framer-motion';
import AnimateOnScroll from '../components/AnimateOnScroll';
import SkillBadge from '../components/SkillBadge';
import TimelineItem from '../components/TimelineItem';
import { skillCategories } from '../data/skills';
import { experience, education } from '../data/experience';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const About = () => (
  <section id="about" className="section-padding bg-navy">
    <div className="max-w-6xl mx-auto">
      <AnimateOnScroll>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="w-16 h-1 bg-cyan rounded mb-12" />
      </AnimateOnScroll>

      {/* Bio */}
      <AnimateOnScroll delay={0.1}>
        <div className="glass rounded-2xl p-6 md:p-8 mb-16 max-w-3xl">
          <p className="text-white/70 leading-relaxed text-base md:text-lg">
            Computer Science graduate from Ben-Gurion University currently working as a Software
            Engineer at Meta. I specialize in full-stack and backend systems — from React frontends
            to distributed data pipelines on AWS. Experienced in large-scale production codebases
            and passionate about building efficient, maintainable software.
          </p>
        </div>
      </AnimateOnScroll>

      {/* Skills */}
      <AnimateOnScroll delay={0.15}>
        <h3 className="text-xl font-semibold text-white mb-6">Technical Skills</h3>
      </AnimateOnScroll>
      <div className="space-y-8 mb-16">
        {skillCategories.map((cat, catIdx) => (
          <AnimateOnScroll key={cat.category} delay={0.05 * catIdx}>
            <div>
              <p className="text-cyan/70 text-xs font-mono uppercase tracking-widest mb-3">
                {cat.category}
              </p>
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {cat.skills.map((skill) => (
                  <motion.div key={skill.name} variants={itemVariants}>
                    <SkillBadge {...skill} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>

      {/* Experience */}
      <AnimateOnScroll>
        <h3 className="text-xl font-semibold text-white mb-8">Experience</h3>
      </AnimateOnScroll>
      <div className="mb-16">
        {experience.map((item, idx) => (
          <AnimateOnScroll key={item.id} delay={0.1 * idx}>
            <TimelineItem {...item} isLast={idx === experience.length - 1} />
          </AnimateOnScroll>
        ))}
      </div>

      {/* Education */}
      <AnimateOnScroll>
        <h3 className="text-xl font-semibold text-white mb-6">Education</h3>
      </AnimateOnScroll>
      {education.map((edu) => (
        <AnimateOnScroll key={edu.degree} delay={0.1}>
          <div className="glass rounded-2xl p-6 flex items-center gap-5 max-w-lg">
            <img src={edu.logo} alt={edu.institution} className="w-14 h-14 object-contain rounded-xl" />
            <div>
              <h4 className="text-white font-semibold">{edu.degree}</h4>
              <p className="text-cyan/80 text-sm">{edu.institution}</p>
              <p className="text-white/40 text-xs font-mono mt-1">{edu.period}</p>
            </div>
          </div>
        </AnimateOnScroll>
      ))}
    </div>
  </section>
);

export default About;
