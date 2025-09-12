import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import profileImage from '../assets/profile.png';

function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center px-4 bg-gray-900">
      <div className="flex flex-col items-center gap-6">
        <div className="w-48 h-48 rounded-full ring-4 ring-gray-700 ring-offset-8 ring-offset-gray-900 shadow-xl">
          <img 
            src={profileImage} 
            alt="Foto de Perfil de Arthur Fialho"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-teal-400 leading-tight">
            Arthur Fialho
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-300 mt-2">
            Desenvolvedor Full-Stack | Web2 & Web3
          </h2>
          <h2 className="text-md md:text-lg font-medium text-gray-400 mt-2">
            Apaixonado por tecnologia, inovação e soluções digitais.
          </h2>
        </div>

        <div className="flex items-center justify-center gap-6 mt-4">
          <a href="mailto:arthursouza.fp@gmail.com" className="text-gray-400 hover:text-teal-400 transition-colors" aria-label="Email">
            <FaEnvelope size={28} />
          </a>
          <a href="https://github.com/Arthur-Fialho" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors" aria-label="GitHub">
            <FaGithub size={28} />
          </a>
          <a href="https://linkedin.com/in/arthurfialho" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors" aria-label="LinkedIn">
            <FaLinkedin size={28} />
          </a>
        </div>
        <div className="mt-12 cursor-pointer" onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}>
          <span className="text-gray-400 hover:text-teal-400 transition-colors animate-bounce text-5xl">↓</span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;