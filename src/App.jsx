// import Header from './components/Header';
// import EducationSection from './components/EducationSection';
// import ExperienceSection from './components/ExperienceSection';
import Footer from './components/Footer';
import ProjectsSection from './components/ProjectsSection';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-300">
      
      
      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}

export default App;