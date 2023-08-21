import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const HeaderSocial = () => {
  return (
    <article className="header__socials">
      <a
        href="https://www.linkedin.com/in/juan-camilo-sanchez-echeverri/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100018945194254"
        target="_blank"
      >
        <FaFacebook />
      </a>
      <a
        href="https://github.com/Juan-Camilo-Sanchez-Echeverri"
        target="_blank"
      >
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/camilo_07s/" target="_blank">
        <FaInstagram />
      </a>
    </article>
  );
};

export default HeaderSocial;
