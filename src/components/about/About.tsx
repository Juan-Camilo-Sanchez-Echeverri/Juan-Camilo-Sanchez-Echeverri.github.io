import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCode, FiServer, FiBookOpen } from 'react-icons/fi'
import ME from '../../assets/img/fotoDePerfil.jpg'
import './about.css'

interface Stat {
  icon: ReactNode
  value: string
  label: string
}

const stats: Stat[] = [
  { icon: <FiServer />, value: '3+', label: 'Años de Experiencia' },
  { icon: <FiCode />, value: '30+', label: 'Proyectos Realizados' },
  { icon: <FiBookOpen />, value: '10+', label: 'Tecnologías' },
]

export const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" ref={ref}>
      <h5>Conoce más</h5>
      <h2>Sobre Mí</h2>

      <div className="container about__container">
        <motion.div
          className="about__me"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="about__me-image-wrapper">
            <div className="about__me-image">
              <img src={ME} alt="Juan Camilo Sanchez" />
            </div>
            <div className="about__me-glow" />
          </div>
        </motion.div>

        <motion.div
          className="about__content"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="about__stats">
            {stats.map(({ icon, value, label }) => (
              <div key={label} className="about__stat-card">
                <span className="about__stat-icon">{icon}</span>
                <h4 className="about__stat-value">{value}</h4>
                <small className="about__stat-label">{label}</small>
              </div>
            ))}
          </div>

          <p className="about__bio">
            Ingeniero de Software con enfoque en <strong>desarrollo backend</strong>,
            especializado en la construcción de soluciones robustas, escalables y bien
            estructuradas. Trabajo principalmente con <strong>Node.js</strong>, utilizando
            frameworks como <strong>NestJS</strong> y <strong>Express</strong>, y tengo
            experiencia en el diseño e implementación de APIs y arquitecturas basadas en
            <strong> microservicios</strong>.
          </p>
          <p className="about__bio">
            Dominio de bases de datos relacionales y no relacionales, así como buenas
            prácticas de control de versiones con Git. También tengo experiencia en
            desarrollo frontend, lo que me permite comprender el producto de forma integral.
          </p>

          <div className="about__experience">
            <h4>Experiencia Laboral</h4>
            <div className="about__timeline">
              <div className="about__timeline-item">
                <div className="about__timeline-dot" />
                <div className="about__timeline-content">
                  <h5>Ingeniero de Software</h5>
                  <span className="about__timeline-company">Lambda Analytics</span>
                  <span className="about__timeline-date">Mar 2026 - Presente</span>
                </div>
              </div>
              <div className="about__timeline-item">
                <div className="about__timeline-dot" />
                <div className="about__timeline-content">
                  <h5>Desarrollador Backend</h5>
                  <span className="about__timeline-company">Torrente Dev SAS</span>
                  <span className="about__timeline-date">Oct 2023 - Dic 2025</span>
                </div>
              </div>
              <div className="about__timeline-item">
                <div className="about__timeline-dot" />
                <div className="about__timeline-content">
                  <h5>Desarrollador SOA Junior</h5>
                  <span className="about__timeline-company">AOS Colombia</span>
                  <span className="about__timeline-date">Nov 2021 - May 2022</span>
                </div>
              </div>
            </div>
          </div>

          <a href="#contact" className="btn btn-primary">Hablemos</a>
        </motion.div>
      </div>
    </section>
  )
}
