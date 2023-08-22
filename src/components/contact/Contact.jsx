import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import './contact.css';

const Contact = () => {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_sqa3iwu',
				'template_mdlop3c',
				form.current,
				'mIKp7vVSO4nUpZqNg'
			)
			.then(
				(result) => {
					console.log(result.text);
					form.current.reset();
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<section id="contact">
			<h5>Déjame un mensaje</h5>
			<h2>Contacto</h2>

			<div class="container contact__container">
				<div class="contact__options">
					<article class="contact__option">
						<MdOutlineEmail className="contact__option-icon" />
						<h4>Correo</h4>
						<h5>Tu correo electrónico</h5>
						<a href="mailto:juancamilosanche65@gmail.com" target="_blank">
							Enviar mensaje
						</a>
					</article>
					<article class="contact__option">
						<RiMessengerLine className="contact__option-icon" />
						<h4>Messenger</h4>
						<a href="#" target="_blank">
							{' '}
							Enviar mensaje
						</a>
					</article>
					<article class="contact__option">
						<BsWhatsapp className="contact__option-icon" />
						<h4>Whatsapp</h4>
						<h5>Tu número de whatsapp</h5>
						<a href="https://wa.me/573008348956" target="_blank">
							Enviar Mensaje
						</a>
					</article>
				</div>

				<form ref={form} onSubmit={sendEmail}>
					<input
						type="text"
						name="user_name"
						placeholder="Escriba su nombre"
						required
					/>
					<input
						type="email"
						name="user_email"
						placeholder="Escriba su correo"
						required
					/>
					<textarea
						name="message"
						rows="7"
						placeholder="Escriba su mensaje"
						required
					></textarea>
					<button type="submit" class="btn btn-primary" value="Send">
						Enviar mensaje
					</button>
					<span></span>
				</form>
			</div>
		</section>
	);
};

export default Contact;
