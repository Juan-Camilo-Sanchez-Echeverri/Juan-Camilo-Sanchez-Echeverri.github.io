import React from 'react';
import { BiCheck } from 'react-icons/bi';
import './services.css';

const Services = () => {
	return (
		<section id="services">
			<h5>Nuestros servicios</h5>
			<h2>Servicios</h2>
			<div className="container services__container">
				<article className="service">
					<div className="service__head">
						<h3>Desarrollo Frontend </h3>
					</div>
					<ul className="service__list">
						<li>
							<BiCheck className="service__list-icon" />
							<p>Buen rendimiento de tu sitio Web</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>Interfaz agradable con el usuario</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>
								Adaptar el diseño de una web a diversos dispositivos y
								navegadores
							</p>
						</li>
					</ul>
				</article>
				<article className="service">
					<div className="service__head">
						<h3>Desarrollo Backend </h3>
					</div>
					<ul className="service__list">
						<li>
							<BiCheck className="service__list-icon" />
							<p>Seguridad en tus APIS.</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>
								Optimizar el rendimiento y la escalabilidad de las aplicaciones.
							</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>Diseñar, crear y mantener bases de datos y servidores.</p>
						</li>
					</ul>
				</article>
			</div>
		</section>
	);
};

export default Services;
