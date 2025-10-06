import React, { useState } from 'react';
import ProjectsContext from '../contexts/ProjectsContext';

export default function ProjectsProvider({ children }) {
	const [projects] = useState([
		{
			id: 1,
			name: "E-Commerce Dashboard",
			description: "A comprehensive admin dashboard for managing online stores built with React, TypeScript, and Material-UI.",
			technologies: ["React 18", "TypeScript", "Material-UI", "React Query", "Chart.js"],
			features: ["Real-time sales analytics", "Product inventory management", "Customer relationship management", "Order tracking system"],
			link: "https://github.com/youcef/ecommerce-dashboard",
			image: "/images/ecommerce-dashboard.jpg",
			featured: true
		},
		{
			id: 2,
			name: "Task Management Application",
			description: "A collaborative project management tool similar to Trello, designed for remote teams.",
			technologies: ["React", "Redux Toolkit", "Styled Components", "Socket.io", "Node.js"],
			features: ["Drag and drop task boards", "Real-time collaboration", "Team member assignments", "Progress tracking"],
			link: "https://github.com/youcef/task-manager",
			image: "/images/task-manager.jpg",
			featured: true
		},
		{
			id: 3,
			name: "Learning Management System",
			description: "An educational platform for online courses with video streaming and progress tracking.",
			technologies: ["React", "Context API", "React Router", "Video.js", "Firebase"],
			features: ["Course catalog", "Video player with bookmarks", "Student progress tracking", "Quiz system", "Certificate generation"],
			link: "https://github.com/youcef/lms-platform",
			image: "/images/lms-platform.jpg",
			featured: true
		},
		{
			id: 4,
			name: "Weather Forecast App",
			description: "A responsive weather application with location-based forecasts and interactive maps.",
			technologies: ["React Hooks", "OpenWeather API", "Leaflet Maps", "CSS Modules", "PWA"],
			features: ["Current weather conditions", "7-day forecast", "Interactive weather maps", "Offline functionality", "Push notifications"],
			link: "https://github.com/youcef/weather-app",
			image: "/images/weather-app.jpg",
			featured: false
		},
		{
			id: 5,
			name: "Social Media Analytics Tool",
			description: "A dashboard for social media managers to track engagement across multiple platforms.",
			technologies: ["React", "D3.js", "Tailwind CSS", "REST APIs", "JWT Authentication"],
			features: ["Multi-platform integration", "Engagement metrics", "Content scheduling", "Performance reports", "Team collaboration"],
			link: "https://github.com/youcef/social-analytics",
			image: "/images/social-analytics.jpg",
			featured: false
		}
	]);

	const getFeaturedProjects = () => projects.filter(project => project.featured);
	const getAllProjects = () => projects;
	const getProjectById = (id) => projects.find(project => project.id === id);

	const value = {
		projects,
		getFeaturedProjects,
		getAllProjects,
		getProjectById
	};

	return <ProjectsContext.Provider value={value}>{children}</ProjectsContext.Provider>;
}