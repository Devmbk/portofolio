import React from 'react';
import project from "./project.css"

// Exemple de données de projets
const projects = [
    {
        title: "Site E-commerce",
        description: "Développement d'un site e-commerce avec React et Node.js.",
        link: "https://mon-ecommerce.com"
    },
    {
        title: "Application Portfolio",
        description: "Création de mon portfolio personnel en React.",
        link: "https://mon-portfolio.com"
    },
    {
        title: "Blog Technique",
        description: "Blog pour partager des articles sur le développement web.",
        link: "https://mon-blog.com"
    }
];

const ProjectSection = () => (
    <section>
        <h2>Mes Projets</h2>
        <ul>
            {projects.map((project, index) => (
                <li className='project-item' key={index} style={{marginBottom: '1.5rem'}}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        Voir le projet
                    </a>
                </li>
            ))}
        </ul>
    </section>
);

export default ProjectSection;