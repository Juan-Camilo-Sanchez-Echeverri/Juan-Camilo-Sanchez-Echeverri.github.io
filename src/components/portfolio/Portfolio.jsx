import React from 'react';
import encriptador from '../../assets/img/encriptador.jpg';
import direkTrans from '../../assets/img/direk-trans.jpg';
import toDoBackend from '../../assets/img/toDoBackend.jpg';
import blackJack from '../../assets/img/black-jack.jpg';
import toysDashboard from '../../assets/img/toysDashboard.jpg';
import pirateHub from '../../assets/img/pirateHub.jpg';
import './portfolio.css';

const data = [
	{
		id: 1,
		image: encriptador,
		title: 'Encriptador De Texto',
		github:
			'https://github.com/Juan-Camilo-Sanchez-Echeverri/encriptador-Texto',
		demo: 'https://juancamilosanchez.me/encriptador-Texto/',
	},
	{
		id: 2,
		image: direkTrans,
		title: 'Direk Trans',
		github: 'https://github.com/Juan-Camilo-Sanchez-Echeverri/Direk-Trans',
		demo: 'https://github.com/Juan-Camilo-Sanchez-Echeverri/Direk-Trans',
	},
	{
		id: 3,
		image: toDoBackend,
		title: 'ToDo Backend',
		github: 'https://github.com/Juan-Camilo-Sanchez-Echeverri/ToDo-API-Node',
		demo: 'https://tasksnode.fly.dev/',
	},
	{
		id: 4,
		image: blackJack,
		title: 'Black Jack',
		github: 'https://github.com/Juan-Camilo-Sanchez-Echeverri/black-Jack',
		demo: 'https://juancamilosanchez.me/black-Jack/',
	},
	{
		id: 5,
		image: toysDashboard,
		title: 'Toys Dashboard',
		github: 'https://github.com/Juan-Camilo-Sanchez-Echeverri/toys',
		demo: 'https://juancamilosanchez.me/toys/',
	},
	{
		id: 6,
		image: pirateHub,
		title: 'Pirate Hub',
		github: 'https://github.com/Juan-Camilo-Sanchez-Echeverri/pirateHub',
		demo: 'https://juancamilosanchez.me/pirateHub/',
	},
];

const Portfolio = () => {
	return (
		<section id="portfolio">
			<h5>Mis trabajos recientes</h5>
			<h2>Portafolio</h2>
			<div className="container portfolio__container">
				{data.map(({ id, image, title, github, demo }) => {
					return (
						<article key={id} className="portfolio__item">
							<div className="portfolio__item-image">
								<img src={image} alt={title} />
							</div>
							<h3>{title}</h3>
							<div className="portfolio__item-cta">
								<a href={github} className="btn" target="_blank">
									Github
								</a>
								<a href={demo} className="btn btn-primary" target="_blank">
									Ver Demo
								</a>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Portfolio;
