import React from "react";
import CTA from "./CTA";
import ME from '../../assets/me.png'
import HeaderSocial from "./HeaderSocial";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hola, Yo soy</h5>
        <h1>JVBrian</h1>
        <h5 className="text-light">Desarrollador Fullstack</h5>
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
