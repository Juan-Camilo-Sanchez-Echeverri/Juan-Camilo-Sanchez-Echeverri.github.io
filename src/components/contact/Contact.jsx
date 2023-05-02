import React from "react";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "TU SERVICIO",
      "TU TEMPLATE",
      form.current,
      "TU ID"
    );
    setDone(true);
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Déjame un mensaje</h5>
      <h2>Contacto</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Correo</h4>
            <h5>Tu correo electrónico </h5>
            <a href="mailto:tu correo electrónico" target="_blank">
              {" "}
              Enviar mensaje
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <a href="https://m.me/tu link de facebook/" target="_blank">
              {" "}
              Enviar mensaje
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>Tu número de whatsapp</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+tu número de whatsapp con indicativo"
              target="_blank"
            >
              {" "}
              Enviar mensaje
            </a>
          </article>
        </div>
        {/* Final de la opción de contacto*/}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Escriba su nombre"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Escriba su correo"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Escriba su mensaje"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            {" "}
            Enviar mensaje
          </button>
          <span>{done && "Gracias por dejar tu mensaje"}</span>
        </form>
      </div>
    </section>
  );
};

export default Contact;
