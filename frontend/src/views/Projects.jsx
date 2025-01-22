import React, { useState, useEffect } from 'react';
import api from '../utils/api';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  // Cargar proyectos desde el backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get('/projects'); // Ruta para obtener proyectos
        setProjects(response.data);
      } catch (err) {
        setError('Error al cargar los proyectos');
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <h1>Proyectos</h1>
      {error && <p>{error}</p>}
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
              Ver código fuente
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
