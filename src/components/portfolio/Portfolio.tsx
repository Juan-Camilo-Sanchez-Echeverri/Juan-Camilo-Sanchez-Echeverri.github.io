import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi'
import './portfolio.css'

const GITHUB = 'https://github.com/Juan-Camilo-Sanchez-Echeverri'

interface Project {
  title: string
  category: 'backend' | 'frontend' | 'fullstack'
  tech: string[]
  github: string
  demo: string | null
  description: string
}

const projects: Project[] = [
  {
    title: 'E-Commerce Backend',
    category: 'backend',
    tech: ['NestJS', 'TypeScript', 'MongoDB', 'Redis', 'Docker'],
    github: `${GITHUB}/e-commerce-backend`,
    demo: null,
    description: 'Backend completo para e-commerce con NestJS, autenticación JWT, carrito, pagos con ePayco y caché con Redis.',
  },
  {
    title: 'Short URL',
    category: 'backend',
    tech: ['NestJS', 'TypeScript', 'MongoDB'],
    github: `${GITHUB}/short-url`,
    demo: null,
    description: 'Acortador de URLs con NestJS, estadísticas de clics y redirección optimizada.',
  },

  {
    title: 'PayU Node.js',
    category: 'backend',
    tech: ['Node.js', 'JavaScript', 'PayU'],
    github: `${GITHUB}/payuNodejs`,
    demo: null,
    description: 'Integración de pasarela de pagos PayU con Node.js para procesar transacciones.',
  },
  {
    title: 'AnyList GraphQL',
    category: 'backend',
    tech: ['NestJS', 'GraphQL', 'TypeScript', 'Docker'],
    github: `${GITHUB}/anylist-graphql`,
    demo: null,
    description: 'API GraphQL con NestJS para gestión de listas, consultas optimizadas y Docker.',
  },
  {
    title: 'Circuit Breaker Nest',
    category: 'backend',
    tech: ['NestJS', 'TypeScript'],
    github: `${GITHUB}/circuit-breaker-nest`,
    demo: null,
    description: 'Implementación del patrón Circuit Breaker en NestJS para resiliencia en microservicios.',
  },
  {
    title: 'Lambda Analytics',
    category: 'fullstack',
    tech: ['NestJS', 'TypeScript', 'PostgreSQL', 'React', 'Docker'],
    github: `${GITHUB}/lambda-analytics`,
    demo: null,
    description: 'Plataforma de gestión y análisis de proyectos con dashboard interactivo NestJS + React.',
  },
  {
    title: 'Concept BPO',
    category: 'fullstack',
    tech: ['Express', 'TypeScript', 'PostgreSQL', 'React', 'Docker'],
    github: `${GITHUB}/concept-bpo`,
    demo: null,
    description: 'Arquitectura multi-tenant con Express, TypeScript, PostgreSQL y React. Aislamiento de datos y control por roles.',
  },
  {
    title: 'Sexy Latina Backend',
    category: 'backend',
    tech: ['NestJS', 'TypeScript', 'MongoDB', 'Redis', 'Docker'],
    github: `${GITHUB}/sexy-latina-backend`,
    demo: null,
    description: 'API NestJS con MongoDB, Redis, autenticación JWT, Swagger y despliegue con Docker.',
  },
  {
    title: 'Final Project Diplomado',
    category: 'fullstack',
    tech: ['Express', 'JavaScript', 'MongoDB', 'Angular'],
    github: `${GITHUB}/final-project-diplomado`,
    demo: null,
    description: 'Blog de juguetes fullstack con API REST en Express/MongoDB y frontend en Angular.',
  },
]

const filters = [
  { key: 'all' as const, label: 'Todos' },
  { key: 'backend' as const, label: 'Backend' },
  { key: 'fullstack' as const, label: 'Fullstack' },
]

export const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'backend' | 'fullstack'>('all')
  const { ref } = useInView({ triggerOnce: true, threshold: 0.05 })

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="portfolio" ref={ref}>
      <h5>Mis trabajos</h5>
      <h2>Portafolio</h2>

      <div className="container">
        <div className="portfolio__filters">
          {filters.map(({ key, label }) => (
            <button
              key={key}
              className={`portfolio__filter-btn ${activeFilter === key ? 'active' : ''}`}
              onClick={() => setActiveFilter(key)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="portfolio__container">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.title}
                className="portfolio__item"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <div className="portfolio__item-image">
                  <div className="portfolio__item-placeholder">
                    <FiCode />
                    <span>{project.tech[0]}</span>
                  </div>
                  <div className="portfolio__item-overlay">
                    <p>{project.description}</p>
                  </div>
                </div>
                <div className="portfolio__item-info">
                  <h3 className="portfolio__item-title">{project.title}</h3>
                  <div className="portfolio__item-tech">
                    {project.tech.map(t => (
                      <span key={t} className="portfolio__item-tech-tag">{t}</span>
                    ))}
                  </div>
                  <div className="portfolio__item-cta">
                    <a href={project.github} className="btn" target="_blank" rel="noopener noreferrer">
                      <FiGithub /> Código
                    </a>
                    {project.demo && (
                      <a href={project.demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                        <FiExternalLink /> Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
