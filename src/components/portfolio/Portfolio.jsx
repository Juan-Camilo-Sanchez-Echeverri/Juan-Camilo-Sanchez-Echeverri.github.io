import React from 'react';
import encriptador from '../../assets/img/encriptador.jpg';
import calculadoraPropinas from '../../assets/img/calculadoraPropinas.png';
import direkTrans from '../../assets/img/direk-trans.jpg';
import blackJack from '../../assets/img/black-jack.jpg';
import toysDashboard from '../../assets/img/toysDashboard.jpg';
import pirateHub from '../../assets/img/pirateHub.jpg';
import './portfolio.css';

const URL_BASE = 'https://juancamilosanchez.tech';

const data = [
  {
    image: encriptador,
    title: 'Encriptador De Texto',
    github:
      'https://github.com/Juan-Camilo-Sanchez-Echeverri/encriptador-Texto',
    demo: `${URL_BASE}/encriptador-Texto`,
  },
  {
    image: direkTrans,
    title: 'Direk Trans',
    github: 'https://github.com/Juan-Camilo-Sanchez-Echeverri/Direk-Trans',
    demo: 'https://github.com/Juan-Camilo-Sanchez-Echeverri/Direk-Trans',
  },
  {
    image: calculadoraPropinas,
    title: 'Calculadora de Propinas y Consumo',
    github: 'https://github.com/Juan-Camilo-Sanchez-Echeverri/ms-usuarios',
    demo: `${URL_BASE}/calculadora-propinas`,
  },
  {
    image: blackJack,
    title: 'Black Jack',
    github: 'https://github.com/Juan-Camilo-Sanchez-Echeverri/black-Jack',
    demo: `${URL_BASE}/black-Jack`,
  },
  {
    image: toysDashboard,
    title: 'Toys Dashboard',
    github: 'https://github.com/Juan-Camilo-Sanchez-Echeverri/toys',
    demo: `${URL_BASE}/toys`,
  },
  {
    image: pirateHub,
    title: 'Pirate Hub',
    github: 'https://github.com/Juan-Camilo-Sanchez-Echeverri/pirateHub',
    demo: `${URL_BASE}/pirateHub`,
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Mis trabajos recientes</h5>
      <h2>Portafolio</h2>
      <div className="container portfolio__container">
        {data.map(({ image, title, github, demo }, i) => {
          return (
            <article key={i} className="portfolio__item">
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
