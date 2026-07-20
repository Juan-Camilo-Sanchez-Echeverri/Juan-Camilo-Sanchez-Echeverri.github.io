import { FiGithub, FiLinkedin, FiHeart } from 'react-icons/fi'
import './footer.css'

export const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <div className="footer__brand">
          <h3>Juan Camilo Sanchez</h3>
          <p>Ingeniero de Software</p>
        </div>

        <ul className="footer__links">
          <li><a href="#">Inicio</a></li>
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#experience">Experiencia</a></li>
          <li><a href="#services">Servicios</a></li>
          <li><a href="#portfolio">Proyectos</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>

        <div className="footer__socials">
          <a
            href="https://github.com/Juan-Camilo-Sanchez-Echeverri"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/juan-camilo-sanchez-echeverri/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
        </div>

        <div className="footer__copyright">
          <small>
            &copy; {new Date().getFullYear()} Hecho con <FiHeart /> por Juan Camilo Sanchez
          </small>
        </div>
      </div>
    </footer>
  )
}
