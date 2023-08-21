import React from "react";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
import "./portfolio.css";

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Balance de cuentas',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17919797-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Desarrollo WEB',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17919797-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Seguridad informática',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17919797-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Diseño de interfaces',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17919797-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Desarrollo backend',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17919797-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Ciencia de datos',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17919797-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },

]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Mis trabajos recientes</h5>
      <h2>Portafolio</h2>
      <div className="container portfolio__container">
       {
         data.map(({id, image, title, github, demo}) => {
           return(
            <article  key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className="btn" target="_blank">
                Github
              </a>
              <a
                href={demo}
                className="btn btn-primary"
                target="_blank"
              >
                Ver Demo
              </a>
            </div>
          </article>
           )
         })
       }
        
      </div>
    </section>
  );
};

export default Portfolio;
