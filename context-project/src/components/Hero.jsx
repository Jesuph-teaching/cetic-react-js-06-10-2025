import { Link } from 'react-router';

export default function Hero() {
	const scrollToSection = (sectionId) => {
		const element = document.querySelector(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<section className="hero">
			<div className="hero-content">
				<h1>Youcef Madadi</h1>
				<p className="hero-description">
					A freelancer and a React JS trainer with extensive experience in modern web development and teaching.
				</p>
				<div className="hero-buttons">
					<Link to="/projects" className="btn-primary">View Projects</Link>
					<button
						className="btn-secondary"
						onClick={() => scrollToSection('.contact')}
					>
						Contact Me
					</button>
				</div>
			</div>
		</section>
	);
}