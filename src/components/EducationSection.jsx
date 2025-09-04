import { useState, useEffect } from 'react';
import axios from 'axios';
import EducationalItem from './EducationItem';

function EducationSection() {
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    const fetchEducations = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/educations`);
        // Ordena as experiências da mais recente para a mais antiga
        const sortedEducations = response.data.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
        setEducations(sortedEducations);
      } catch (error) {
        console.error("Erro ao buscar experiências:", error);
      }
    };
    fetchEducations();
  }, []);

  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Educação</h2>
        <div className="relative">
          {educations.map(edu => (
            <EducationalItem
              key={edu.id}
              institution={edu.institution}
              course={edu.course}
              startDate={edu.startDate}
              endDate={edu.endDate}
              description={edu.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default EducationSection;