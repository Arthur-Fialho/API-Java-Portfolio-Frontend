import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import profileImage from '../assets/profile.png';
import ThemeSwitcher from './ThemeSwitcher';

function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-center px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="absolute top-6 right-6">
        <ThemeSwitcher />
      </div>
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-48 h-48">
          {/* Ring de luz com brilho pulsante */}
          <div className="absolute inset-0 rounded-full ring-4 ring-gray-300 dark:ring-gray-700 ring-offset-8 ring-offset-white dark:ring-offset-gray-900 shadow-xl glow-pulse">
            <img 
              src={profileImage} 
              alt="Foto de Perfil de Arthur Fialho"
              className="w-full h-full object-cover rounded-full relative z-10"
            />
          </div>
          
          {/* Efeito de partículas girando */}
          <div className="absolute -inset-2 rounded-full animate-spin" style={{
            background: 'conic-gradient(from 0deg, transparent 70%, rgba(20, 184, 166, 0.3) 80%, transparent 90%)',
            animation: 'spin 6s linear infinite'
          }}></div>
        </div>

        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-teal-500 dark:text-teal-400 leading-tight">
            Arthur Fialho
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300 mt-2">
            Desenvolvedor Web2 & Web3
          </h2>
          <h2 className="text-md md:text-lg font-medium text-gray-600 dark:text-gray-400 mt-2">
            Estudante de ciência da computação, <br /> aprendendo e evoluindo a cada código!
          </h2>
        </div>

        <div className="flex items-center justify-center gap-6 mt-4">
          <a href="mailto:arthursouza.fp@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors" aria-label="Email">
            <FaEnvelope size={28} />
          </a>
          <a href="https://github.com/Arthur-Fialho" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors" aria-label="GitHub">
            <FaGithub size={28} />
          </a>
          <a href="https://linkedin.com/in/arthurfialho" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors" aria-label="LinkedIn">
            <FaLinkedin size={28} />
          </a>
        </div>
        <div className="mt-12 cursor-pointer" onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}>
          <span className="text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors animate-bounce text-5xl">↓</span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;