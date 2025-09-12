import React from 'react';

const allSkills = [
    { name: "HTML", category: "Linguagens", status: "Proficient" },
    { name: "CSS", category: "Linguagens", status: "Proficient" },
    { name: "JavaScript", category: "Linguagens", status: "Proficient" },
    { name: "Python", category: "Linguagens", status: "Proficient" },
    { name: "Java", category: "Linguagens", status: "Proficient" },
    { name: "TypeScript", category: "Linguagens", status: "Proficient" },
    { name: "Solidity", category: "Blockchain", status: "Proficient" },
    { name: "Motoko", category: "Blockchain", status: "Proficient" },
    { name: "Blockchain", category: "Conceitos", status: "Proficient" },
    { name: "Criptoativos", category: "Conceitos", status: "Proficient" },
    { name: "WordPress", category: "CMS & Plataformas", status: "Proficient" },
    { name: "React", category: "Frameworks & Bibliotecas", status: "Proficient" },
    { name: "Spring Boot", category: "Frameworks & Bibliotecas", status: "Proficient" },
    { name: "Foundry", category: "Ferramentas & DevOps", status: "Proficient" },
    { name: "PostgreSQL", category: "Bases de Dados", status: "Proficient" },
    { name: "Linux", category: "Sistemas Operativos", status: "Proficient" },
    { name: "Windows", category: "Sistemas Operativos", status: "Proficient" },
    { name: "Git", category: "Ferramentas & DevOps", status: "Proficient" },
    { name: "Docker", category: "Ferramentas & DevOps", status: "Proficient" },
    { name: "Rust", category: "Em Aprendizado", status: "Learning" },
    { name: "C#", category: "Em Aprendizado", status: "Learning" },
    { name: ".NET", category: "Em Aprendizado", status: "Learning" },
    { name: "AWS", category: "Em Aprendizado", status: "Learning" },
];

const groupSkillsByCategory = (skills) => {
    return skills.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
    }, {});
};

const categorizedSkills = groupSkillsByCategory(allSkills);

function SkillsSection() {
    return (
        <section id="skills" className="py-16 bg-gray-900 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-extrabold text-center mb-12 text-blue-400">
                    Minhas Habilidades & Tecnologias
                </h2>

                <div className="space-y-10"> {/* Espaçamento entre as categorias */}
                    {Object.entries(categorizedSkills).map(([category, skillsList]) => (
                        <div key={category} className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
                            <h3 className="text-2xl font-bold mb-6 text-blue-300 border-b border-gray-600 pb-3">
                                {category}
                            </h3>
                            <div className="flex flex-wrap gap-3"> {/* Espaçamento entre as tags */}
                                {skillsList
                                    .sort((a, b) => a.name.localeCompare(b.name)) // Ordena por nome
                                    .map((skill, index) => (
                                        <span
                                            key={index}
                                            className={`
                                                px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300
                                                ${skill.status === "Learning"
                                                    ? "bg-purple-600 text-white hover:bg-purple-700 shadow-md" // Estilo para "Em Aprendizado"
                                                    : "bg-gray-700 text-gray-100 hover:bg-gray-600 shadow-md" // Estilo padrão
                                                }
                                            `}
                                        >
                                            {skill.name}
                                        </span>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SkillsSection;