import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import profileImage from '../assets/profile.png';
import ThemeSwitcher from './ThemeSwitcher';
import Clock from './Clock';

function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-center px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="absolute top-6 right-6">
        <ThemeSwitcher />
      </div>
      <div className="absolute top-6 left-6 hidden min-[390px]:block">
        <Clock />
      </div>
      <div className="flex flex-col items-center gap-6 pb-24 md:pb-16">
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
          <h2 className="text-md md:text-lg font-medium text-gray-600 dark:text-gray-400 mt-2">
            Contatos:
          </h2>
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
      </div>
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer group" onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}>
        <p className="text-base md:text-lg font-medium text-gray-600 dark:text-gray-400 mb-2 md:mb-4 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-all duration-300 hidden min-[380px]:block">
          Mais sobre meu trabalho
        </p>
        <div className="transform group-hover:scale-110 transition-all duration-300">
          <svg 
            className="w-10 h-10 md:w-12 md:h-12 text-gray-500 dark:text-gray-400 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-all duration-300 animate-bounce" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;