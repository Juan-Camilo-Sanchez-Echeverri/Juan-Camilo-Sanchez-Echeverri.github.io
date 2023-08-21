import React from 'react';
import { BsInfoCircle, BsFolderCheck } from 'react-icons/bs';
import ME from '../../assets/img/fotoDePerfil.jpg';
import './about.css';

const About = () => {
	return (
		<main>
			<section id="about">
				<h5> Acerca de mi</h5>
				<h2>Mi perfil</h2>

				<article className="container about__container">
					<div className="about__me">
						<div className="about__me-image">
							<img src={ME} alt="Foto Juan" />
						</div>
					</div>

					<div className="about__content">
						<div className="about__cards">
							<article className="about__card">
								<BsInfoCircle />
								<h5>Experiencia</h5>
								<small>6 Meses Desarrollando y aprendizaje autonomo</small>
							</article>
							<article className="about__card">
								<BsFolderCheck />
								<h5>Proyectos</h5>
								<small>3+ proyectos</small>
							</article>
						</div>
						<p>
							Desarrollador <strong>Node</strong> con manejo de tecnologías de
							Express y nest,bases de datos relacionales como MySQL y no
							relacionales como MongoDB. Con muchas ganas de aprender y aplicar
							sus conocimientos.
						</p>
						<a href="#contact" className="btn btn-primary">
							Contacto
						</a>
					</div>
				</article>
			</section>
		</main>
	);
};

export default About;
