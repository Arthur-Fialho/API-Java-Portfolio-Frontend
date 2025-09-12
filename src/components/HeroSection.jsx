import { FaGithub, FaEnvelope } from 'react-icons/fa';

function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center px-4">
      <div className="max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
          Olá, eu sou <span className="text-teal-400">Arthur Fialho</span>.
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mt-4">
          Desenvolvedor Web2 / Web3
        </h2>
        <p className="text-lg text-gray-400 mt-6">
          Estudante de Ciências da Computação. Portfólio em construção.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <a href="https://github.com/Arthur-Fialho" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline"><FaGithub size={30} />
            {/* Meu GitHub */}
          </a>
        </div>
        <div className="mt-8 flex justify-center space-x-4">
          <a href="mailto:arthursouza.fp@gmail.com" className="text-teal-400 hover:underline"><FaEnvelope size={30} />
            {/* Meu Email */}
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;