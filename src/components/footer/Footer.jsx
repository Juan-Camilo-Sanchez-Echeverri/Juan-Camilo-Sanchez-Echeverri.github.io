import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
	return (
		<footer>
			<ul className="permalinks">
				<li>
					<a href="#">Inicio</a>
				</li>
				<li>
					<a href="#about">Sobre mi</a>
				</li>
				<li>
					<a href="#experience">Experiencia</a>
				</li>
				<li>
					<a href="#portfolio">Portafolio</a>
				</li>
				<li>
					<a href="#contact">Contacto</a>
				</li>
			</ul>
			<div className="footer__copyright">
				<small>
					&copy; Juan Camilo Sanchez Portafolio. todos los derechos reservados.
				</small>
			</div>
		</footer>
	);
};

export default Footer;
