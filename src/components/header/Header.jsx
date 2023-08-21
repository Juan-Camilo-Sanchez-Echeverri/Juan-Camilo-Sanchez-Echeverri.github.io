import React from "react";
import HV from "./HV";
import ME from '../../assets/me.png'
import HeaderSocial from "./HeaderSocial";
import "./header.css";

const Header = () => {
  return (
    <header>
      <section className="header__container">
        <h5>Hey Bienvenido. Soy</h5>
        <h1>Camilo Sanchez</h1>
        <h5 className="text-light">Desarrollador Backend Jr</h5>
        <HV />
        <HeaderSocial />
        <a href="#contact" className="scroll__down">Contacto</a>
      </section>
    </header>
  );
};

export default Header;
