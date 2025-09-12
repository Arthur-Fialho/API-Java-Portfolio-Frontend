import React from 'react';

const allSkills = [
    "HTML", "CSS", "JavaScript", "TypeScript", "Solidity", "Motoko", 
    "Python", "Java", "Rust", "C#",
    "React", "Spring Boot", ".NET",
    "Foundry", "Git", "Docker", "PostgreSQL",
    "Blockchain", "Web3",
    "WordPress",
    "Linux", "Windows",
    "AWS"
];

function SkillsSection() {
    return (
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-extrabold text-center mb-12 text-teal-600 dark:text-teal-400">
                    Minhas Habilidades
                </h2>
                
                {/* Um único container para todas as tags, centralizado e com espaçamento */}
                <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4 text-center">
                    
                    {allSkills
                        .sort((a, b) => a.localeCompare(b)) // Ordena as habilidades alfabeticamente
                        .map((skill, index) => (
                            <span
                                key={index}
                                className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-base font-medium px-4 py-2 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-teal-100 dark:hover:bg-teal-500 hover:text-teal-800 dark:hover:text-white hover:border-teal-300 dark:hover:border-teal-400 transition-all duration-300 cursor-pointer"
                            >
                                {skill}
                            </span>
                        ))}
                </div>
            </div>
        </section>
    );
}

export default SkillsSection;