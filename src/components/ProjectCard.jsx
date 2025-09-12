function ProjectCard({ title, description, technologies, repositoryUrl }) {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 border border-gray-200 dark:border-gray-700 flex flex-col h-full">     
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>      
      <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{description}</p>      
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span key={tech} className="bg-gray-200 dark:bg-gray-700 text-sm font-semibold text-teal-600 dark:text-teal-300 px-3 py-1 rounded-full border border-gray-300 dark:border-gray-600">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-center mt-auto">
        {repositoryUrl && (
            <a 
                href={repositoryUrl} 
                target="_blank"
                rel="noopener noreferrer"
              className="inline-block text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 underline font-bold transition-all duration-200 hover:scale-105"
          >
              {repositoryUrl.includes("github") ? "Ver no GitHub" : "Acessar"}
          </a>
      )}
      </div>
    </div>
  );
}

export default ProjectCard;