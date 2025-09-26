import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-teal-600 dark:text-teal-400">
          Entre em Contato
        </h2>
        
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Vamos trabalhar juntos! Entre em contato comigo através dos canais abaixo.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <a 
              href="mailto:arthursouza.fp@gmail.com" 
              className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="p-3 bg-teal-100 dark:bg-teal-900 rounded-full group-hover:bg-teal-200 dark:group-hover:bg-teal-800 transition-colors">
                <FaEnvelope className="text-2xl text-teal-600 dark:text-teal-400" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                <p className="text-gray-600 dark:text-gray-400">arthursouza.fp@gmail.com</p>
              </div>
            </a>
            
            <a 
              href="https://github.com/Arthur-Fialho" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="p-3 bg-teal-100 dark:bg-teal-900 rounded-full group-hover:bg-teal-200 dark:group-hover:bg-teal-800 transition-colors">
                <FaGithub className="text-2xl text-teal-600 dark:text-teal-400" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900 dark:text-white">GitHub</h3>
                <p className="text-gray-600 dark:text-gray-400">Arthur-Fialho</p>
              </div>
            </a>
            
            <a 
              href="https://linkedin.com/in/arthurfialho" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="p-3 bg-teal-100 dark:bg-teal-900 rounded-full group-hover:bg-teal-200 dark:group-hover:bg-teal-800 transition-colors">
                <FaLinkedin className="text-2xl text-teal-600 dark:text-teal-400" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900 dark:text-white">LinkedIn</h3>
                <p className="text-gray-600 dark:text-gray-400">arthurfialho</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
