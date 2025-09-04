function ProjectCard({ title, description, technologies }) {
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
    </div>
  );
}

export default ProjectCard;