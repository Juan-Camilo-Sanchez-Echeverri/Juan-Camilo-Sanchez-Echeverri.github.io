import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>JVBrian</a>
      <ul className="permalinks">
        <li><a href="#">Inicio</a></li>
        <li><a href="#about">Sobre mi</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#portfolio">Portafolio</a></li>
        <li><a href="#testimonial">Testimonios</a></li>
        <li><a href="#contact">Contacto</a></li>
        
      </ul>
      <footer className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.com"><FaInstagram /></a>
        <a href="https://github.com"><FaGithub /></a>
        <a href="https://linkedin.com"><FaLinkedin /></a>
      </footer>

      <div className="footer__copyright">
        <small>&copy; JVBrian Portafolio. todos los derechos reservados.</small>
      </div>
    

    </footer>
  )
}

export default Footer