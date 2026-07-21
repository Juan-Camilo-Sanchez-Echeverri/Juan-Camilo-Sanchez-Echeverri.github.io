import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { HV } from './HV';
import './header.css';

const roles: string[] = [
  'Backend sólido desde el primer sprint',
  'Arquitecturas escalables en NestJS',
  'Código listo para producción',
  'Ingeniero de Software',
  'Desarrollador Backend Node.js',
  'Especialista en NestJS',
  'Arquitectura de Microservicios',
];

export const Header = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText.length < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      }, 80);
    } else if (!isDeleting && displayText.length === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
      }, 40);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <header id="#">
      <div className="header__bg-gradient" />
      <div className="container header__container">
        <motion.div
          className="header__content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="header__badge">Bienvenido</div>
          <h5 className="header__greeting">Hola, soy</h5>
          <h1 className="header__name">Juan Camilo Sanchez</h1>
          <div className="header__role-wrapper">
            <span className="header__role-prefix">{'{ '}</span>
            <span className="header__role-text">{displayText}</span>
            <span className="header__cursor">|</span>
            <span className="header__role-suffix">{' }'}</span>
          </div>
          <p className="header__description">
            Tu backend, bien hecho desde el primer sprint. Diseño e implemento{' '}
            <strong>APIs RESTful y microservicios</strong> escalables con
            Node.js y NestJS. Para startups y equipos que no pueden permitirse
            reescribir el código en 6 meses.
          </p>
          <p className="header__tech-stack">
            NestJS &middot; Node.js &middot; AWS &middot; Docker &mdash;{' '}
            <strong>3+ años</strong> entregando backend sólido para productos
            reales.
          </p>
          <HV />
          <div className="header__socials">
            <a
              href="https://www.linkedin.com/in/juan-camilo-sanchez-echeverri/"
              target="_blank"
              rel="noopener noreferrer"
              className="header__social-link"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://github.com/Juan-Camilo-Sanchez-Echeverri"
              target="_blank"
              rel="noopener noreferrer"
              className="header__social-link"
            >
              <BsGithub />
            </a>
          </div>
        </motion.div>
      </div>
    </header>
  );
};
