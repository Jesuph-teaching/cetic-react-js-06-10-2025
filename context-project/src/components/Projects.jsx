import { Link } from 'react-router';
import { useProjects } from '../hooks/useProjects';

export default function Projects() {
	const { getFeaturedProjects } = useProjects();
	const featuredProjects = getFeaturedProjects();

	return (
		<section className="projects">
			<div className="container">
				<h2>Featured Projects</h2>
				<div className="projects-grid">
					{featuredProjects.map(project => (
						<div key={project.id} className="project-card">
							<h3>{project.name}</h3>
							<p>{project.description}</p>
							<div className="technologies">
								{project.technologies.map(tech => (
									<span key={tech} className="tech-tag">{tech}</span>
								))}
							</div>
							<a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
								View Project
							</a>
						</div>
					))}
				</div>
				<div className="projects-footer">
					<Link to="/projects" className="btn-primary">View All Projects</Link>
				</div>
			</div>
		</section>
	);
}