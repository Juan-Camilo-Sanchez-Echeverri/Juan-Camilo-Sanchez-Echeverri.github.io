import React from "react";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../assets/me-about.jpg";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5> Acerca de mi</h5>
      <h2>Mi perfil</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiencia</h5>
              <small>3+ años desarrollando</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clientes</h5>
              <small>300+ clientes satisfechos</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Proyectos</h5>
              <small>30+ proyectos</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, excepturi placeat illo fugit dolorem minima voluptate laudantium aut aspernatur sunt inventore corporis cupiditate officia cumque perferendis est totam quaerat nulla?
          </p>
          <a href="#contact" className="btn btn-primary">
            Contacto
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
