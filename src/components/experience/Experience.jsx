import React from 'react';
import {
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiReact,
	SiMongodb,
	SiExpress,
	SiNestjs,
	SiMysql,
	SiGit,
	SiMicrosoftazure,
	SiTypescript,
	SiDocker,
} from 'react-icons/si';
import './experience.css';

const Experience = () => {
	return (
		<section id="experience">
			<h5>Mis habilidades</h5>
			<h2>Mi experiencia</h2>

			<div className="container experience__container">
				<div className="experience__frontend">
					<h3>Desarrollo Frontend</h3>
					<div className="experience__content">
						<article className="experience__details">
							<SiHtml5 className="experience__details-icon" />
							<div>
								<h4>HTML</h4>
								<small className="text-light"> Avanzado </small>
							</div>
						</article>
						<article className="experience__details">
							<SiCss3 className="experience__details-icon" />
							<div>
								<h4>CSS</h4>
								<small className="text-light"> Intermedio </small>
							</div>
						</article>
						<article className="experience__details">
							<SiJavascript className="experience__details-icon" />
							<div>
								<h4>JavaScript</h4>
								<small className="text-light"> Intermedio </small>
							</div>
						</article>
						<article className="experience__details">
							<SiTypescript className="experience__details-icon" />
							<div>
								<h4>TypeScript</h4>
								<small className="text-light"> Intermedio </small>
							</div>
						</article>
						<article className="experience__details">
							<SiReact className="experience__details-icon" />
							<div>
								<h4>React</h4>
								<small className="text-light"> Basico </small>
							</div>
						</article>
						<article className="experience__details">
							<SiGit className="experience__details-icon" />
							<div>
								<h4>Git</h4>
								<small className="text-light"> Intermedio </small>
							</div>
						</article>
					</div>
				</div>
				<div className="experience__backend">
					<h3>Desarrollo Backend</h3>
					<div className="experience__content">
						<article className="experience__details">
							<SiExpress className="experience__details-icon" />
							<div>
								<h4>Express</h4>
								<small className="text-light"> Intermedio </small>
							</div>
						</article>
						<article className="experience__details">
							<SiNestjs className="experience__details-icon" />
							<div>
								<h4>Nest</h4>
								<small className="text-light"> Basico </small>
							</div>
						</article>
						<article className="experience__details">
							<SiMysql className="experience__details-icon" />
							<div>
								<h4>MySQL</h4>
								<small className="text-light"> Intermedio </small>
							</div>
						</article>
						<article className="experience__details">
							<SiMongodb className="experience__details-icon" />
							<div>
								<h4>MongoDB</h4>
								<small className="text-light"> Basico </small>
							</div>
						</article>
						<article className="experience__details">
							<SiDocker className="experience__details-icon" />
							<div>
								<h4>Docker</h4>
								<small className="text-light"> Basico </small>
							</div>
						</article>
						<article className="experience__details">
							<SiMicrosoftazure className="experience__details-icon" />
							<div>
								<h4>Azure</h4>
								<small className="text-light"> Basico </small>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
