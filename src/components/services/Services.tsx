import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiServer, FiCode, FiShield, FiDatabase, FiLayers, FiTool } from 'react-icons/fi'
import './services.css'

interface Service {
  icon: ReactNode
  title: string
  description: string
}

const services: Service[] = [
  {
    icon: <FiServer />,
    title: 'APIs RESTful',
    description: 'Diseño e implementación de APIs robustas con Node.js, NestJS y Express, siguiendo principios REST y buenas prácticas.',
  },
  {
    icon: <FiLayers />,
    title: 'Microservicios',
    description: 'Arquitectura basada en microservicios escalables, con comunicación eficiente y despliegue independiente.',
  },
  {
    icon: <FiDatabase />,
    title: 'Bases de Datos',
    description: 'Diseño y optimización de bases de datos relacionales (PostgreSQL, MySQL) y no relacionales (MongoDB, Redis).',
  },
  {
    icon: <FiShield />,
    title: 'Seguridad',
    description: 'Implementación de autenticación, autorización y buenas prácticas de seguridad en APIs.',
  },
  {
    icon: <FiCode />,
    title: 'Fullstack',
    description: 'Desarrollo frontend con React para comprender el producto de forma integral y colaborar efectivamente.',
  },
  {
    icon: <FiTool />,
    title: 'DevOps',
    description: 'Containerización con Docker, despliegue en Azure y automatización de procesos.',
  },
]

export const Services = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="services" ref={ref}>
      <h5>Lo que hago</h5>
      <h2>Servicios</h2>

      <div className="container services__container">
        {services.map(({ icon, title, description }, i) => (
          <motion.article
            key={title}
            className="service__card"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <span className="service__icon">{icon}</span>
            <h3 className="service__title">{title}</h3>
            <p className="service__description">{description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
