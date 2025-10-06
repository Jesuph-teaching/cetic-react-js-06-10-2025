import { Link } from 'react-router';
import { useProjects } from '../hooks/useProjects';

export default function ProjectsPage() {
	const { getAllProjects } = useProjects();
	const allProjects = getAllProjects();

	return (
		<div className="projects-page">
			<div className="container">
				<header className="page-header">
					<Link to="/" className="back-link">← Back to Home</Link>
					<h1>All Projects</h1>
					<p>A collection of my work as a React JS trainer and freelancer</p>
				</header>

				<div className="projects-list">
					{allProjects.map(project => (
						<article key={project.id} className="project-item">
							<div className="project-image">
								<img src={project.image} alt={project.name} />
							</div>
							<div className="project-details">
								<h2>{project.name}</h2>
								<p className="project-description">{project.description}</p>

								<div className="project-technologies">
									<h4>Technologies Used:</h4>
									<div className="tech-list">
										{project.technologies.map(tech => (
											<span key={tech} className="tech-tag">{tech}</span>
										))}
									</div>
								</div>

								<div className="project-features">
									<h4>Key Features:</h4>
									<ul>
										{project.features.map(feature => (
											<li key={feature}>{feature}</li>
										))}
									</ul>
								</div>

								<div className="project-actions">
									<a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-primary">
										View on GitHub
									</a>
									<button className="btn-secondary">Live Demo</button>
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</div>
	);
}