import { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCard from './ProjectCard';

function ProjectsSection() {
  const [projects, setProjects] = useState([]);

  // useEffect para buscar os dados da API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Faz a requisição GET para a API
        const response = await axios.get('http://localhost:8080/projects');
        // Atualiza o state 'projects' com os dados recebidos da API
        setProjects(response.data);
      } catch (error) {
        console.error("Erro ao buscar projetos:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Meus Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              // O campo 'technologies' na API é uma string, aqui dividimos ela em um array
              technologies={project.technologies ? project.technologies.split(', ') : []}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;