import Header from './components/Header';
import Footer from './components/Footer';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';

function App() {
  return (
    <div className="bg-gray-900 text-gray-300">
      
      
      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
      </main>

      <Footer />
    </div>
  )
}

export default App;