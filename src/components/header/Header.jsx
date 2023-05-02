import React from "react";
import CTA from "./CTA";
import ME from '../../assets/me.png'
import HeaderSocial from "./HeaderSocial";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hey Bienvenido. Soy </h5>
        <h1>Camilo Sanchez</h1>
        <h5 className="text-light">Desarrollador Backend Jr</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;
