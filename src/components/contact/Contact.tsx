import { useRef, useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import emailjs from '@emailjs/browser'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp, BsLinkedin } from 'react-icons/bs'
import { FiSend, FiCheckCircle } from 'react-icons/fi'
import './contact.css'

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null)
  const [done, setDone] = useState(false)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.current) return
    emailjs.sendForm(
      'service_sqa3iwu',
      'template_mdlop3c',
      form.current,
      'mIKp7vVSO4nUpZqNg'
    )
    setDone(true)
    e.currentTarget.reset()
  }

  return (
    <section id="contact" ref={ref}>
      <h5>Déjame un mensaje</h5>
      <h2>Contacto</h2>

      <div className="container contact__container">
        <motion.div
          className="contact__options"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <div>
              <h4>Email</h4>
              <span>juancamilosanche65@gmail.com</span>
            </div>
            <a href="mailto:juancamilosanche65@gmail.com" target="_blank" rel="noopener noreferrer">
              Enviar mensaje
            </a>
          </div>

          <div className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <div>
              <h4>WhatsApp</h4>
              <span>+57 3104306832</span>
            </div>
            <a href="https://wa.me/573104306832" target="_blank" rel="noopener noreferrer">
              Escribir
            </a>
          </div>

          <div className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <div>
              <h4>LinkedIn</h4>
              <span>Juan Camilo Sanchez</span>
            </div>
            <a
              href="https://www.linkedin.com/in/juan-camilo-sanchez-echeverri/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Conectar
            </a>
          </div>
        </motion.div>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <input
            type="text"
            name="user_name"
            placeholder="Tu nombre"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Tu correo"
            required
          />
          <textarea
            name="message"
            rows={6}
            placeholder="Tu mensaje"
            required
          />
          <button type="submit" className="btn btn-primary">
            <FiSend /> Enviar mensaje
          </button>
          {done && (
            <span className="contact__success">
              <FiCheckCircle /> Gracias por tu mensaje. Te responderé pronto!
            </span>
          )}
        </motion.form>
      </div>
    </section>
  )
}
