import { useState, useEffect } from 'react';
import axios from 'axios';
import ExperienceItem from './ExperienceItem';

function ExperienceSection() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await axios.get('http://localhost:8080/experiences');
        // Ordena as experiências da mais recente para a mais antiga
        const sortedExperiences = response.data.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
        setExperiences(sortedExperiences);
      } catch (error) {
        console.error("Erro ao buscar experiências:", error);
      }
    };
    fetchExperiences();
  }, []);

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Experiência Profissional</h2>
        <div className="relative">
          {experiences.map(exp => (
            <ExperienceItem
              key={exp.id}
              title={exp.title}
              company={exp.company}
              startDate={exp.startDate}
              endDate={exp.endDate}
              description={exp.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;