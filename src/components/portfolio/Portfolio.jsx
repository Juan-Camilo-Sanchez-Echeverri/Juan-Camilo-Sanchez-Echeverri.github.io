import React from 'react';
import encriptador from '../../assets/img/encriptador.jpg';
import calculadoraPropinas from '../../assets/img/calculadoraPropinas.png';
import direkTrans from '../../assets/img/direk-trans.jpg';
import blackJack from '../../assets/img/black-jack.jpg';
import toysDashboard from '../../assets/img/toysDashboard.jpg';
import pirateHub from '../../assets/img/pirateHub.jpg';
import './portfolio.css';

const URL_WEB = 'https://juancamilosanchez.tech';
const URL_GIT_HUB = 'https://github.com/Juan-Camilo-Sanchez-Echeverri';

const data = [
  {
    image: encriptador,
    title: 'Encriptador De Texto',
    github: `${URL_GIT_HUB}/encriptador-Texto`,
    demo: `${URL_WEB}/encriptador-Texto`,
  },
  {
    image: direkTrans,
    title: 'Direk Trans',
    github: `${URL_GIT_HUB}/Direk-Trans`,
    demo: `${URL_GIT_HUB}/Direk-Trans`,
  },
  {
    image: calculadoraPropinas,
    title: 'Calculadora de Propinas y Consumo',
    github: `${URL_GIT_HUB}/calculadora-propinas`,
    demo: `${URL_WEB}/calculadora-propinas`,
  },
  {
    image: blackJack,
    title: 'Black Jack',
    github: `${URL_GIT_HUB}/black-Jack`,
    demo: `${URL_WEB}/black-Jack`,
  },
  {
    image: toysDashboard,
    title: 'Toys Dashboard',
    github: `${URL_GIT_HUB}/toys`,
    demo: `${URL_WEB}/toys`,
  },
  {
    image: pirateHub,
    title: 'Pirate Hub',
    github: `${URL_GIT_HUB}/pirateHub`,
    demo: `${URL_WEB}/pirateHub`,
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
