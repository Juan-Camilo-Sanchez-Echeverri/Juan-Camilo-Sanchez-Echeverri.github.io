import React from 'react';
import { useState } from 'react';
import { AiOutlineHome, AiOutlineStar,AiOutlineAppstore } from 'react-icons/ai';
import { BiEnvelope } from 'react-icons/bi';
import { IoPersonOutline } from 'react-icons/io5';
const Nav = () => {
	const [activeNav, setActiveNav] = useState('#');
	return (
		<nav> 
			<a
				href="#"
				onClick={() => setActiveNav('#')}
				className={activeNav === '#' ? 'active' : ''}
			>
				<AiOutlineHome />
			</a>
			<a
				href="#about"
				onClick={() => setActiveNav('#about')}
				className={activeNav === '#about' ? 'active' : ''}
			>
				<IoPersonOutline />
			</a>
			<a
				href="#experience"
				onClick={() => setActiveNav('#experience')}
				className={activeNav === '#experience' ? 'active' : ''}
			>
				<AiOutlineStar />
			</a>
			<a
				href="#services"
				onClick={() => setActiveNav('#services')}
				className={activeNav === '#services' ? 'active' : ''}
			>
				<AiOutlineAppstore />
			</a>
			<a
				href="#contact"
				onClick={() => setActiveNav('#contact')}
				className={activeNav === '#contact' ? 'active' : ''}
			>
				<BiEnvelope />
			</a>
		</nav>
	);
};

export default Nav;
