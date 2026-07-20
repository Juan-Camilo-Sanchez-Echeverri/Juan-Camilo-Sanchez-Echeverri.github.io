import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  SiNestjs, SiExpress, SiNodedotjs, SiTypescript, SiJavascript,
  SiMongodb, SiMysql, SiPostgresql, SiDocker, SiMicrosoftazure,
  SiAmazonaws, SiGooglecloud, SiReact,
  SiPython, SiDjango, SiRedis, SiGit, SiGraphql, SiLinux,
} from 'react-icons/si'
import './experience.css'

interface SkillCategory {
  title: string
  skills: { name: string; icon: ReactNode }[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Backend',
    skills: [
      { name: 'NestJS', icon: <SiNestjs /> },
      { name: 'Node.js', icon: <SiNodedotjs /> },
      { name: 'Express', icon: <SiExpress /> },
      { name: 'Python', icon: <SiPython /> },
      { name: 'Django', icon: <SiDjango /> },
      { name: 'GraphQL', icon: <SiGraphql /> },
    ],
  },
  {
    title: 'Bases de Datos',
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'Redis', icon: <SiRedis /> },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: <SiReact /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', icon: <SiAmazonaws /> },
      { name: 'Google Cloud', icon: <SiGooglecloud /> },
      { name: 'Azure', icon: <SiMicrosoftazure /> },
      { name: 'Docker', icon: <SiDocker /> },
      { name: 'Git', icon: <SiGit /> },
      { name: 'Linux', icon: <SiLinux /> },
    ],
  },
]

export const Experience = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="experience" ref={ref}>
      <h5>Mis habilidades</h5>
      <h2>Stack Tecnológico</h2>

      <div className="container experience__container">
        {skillCategories.map((cat, catIdx) => (
          <motion.div
            key={cat.title}
            className="experience__category"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: catIdx * 0.1 }}
          >
            <h3 className="experience__category-title">{cat.title}</h3>
            <div className="experience__skills">
              {cat.skills.map((skill) => (
                <div key={skill.name} className="experience__skill">
                  <span className="experience__skill-icon">{skill.icon}</span>
                  <span className="experience__skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
