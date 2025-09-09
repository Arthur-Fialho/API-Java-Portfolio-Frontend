function ProjectCard({ title, description, technologies, repositoryUrl }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-xl hover:bg-gray-700 transition-colors duration-300">     
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>      
      <p className="text-gray-400 mb-4">{description}</p>      
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span key={tech} className="bg-gray-700 text-sm font-semibold text-teal-300 px-3 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex-grow" />
      <div className="flex justify-center">
        {repositoryUrl && (
            <a 
                href={repositoryUrl} 
                target="_blank"
                rel="noopener noreferrer"
              className="github-repo-link"
              style={{ display: 'inline-block', marginTop: '15px', color: '#2dd4bf', textDecoration: 'underline', fontWeight: 'bold', transition: 'transform 0.2s' }}
          >
              {repositoryUrl.includes("github") ? "Ver no GitHub" : "Acessar"}
          </a>
      )}
      </div>
    </div>
  );
}

export default ProjectCard;