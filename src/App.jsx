import Header from './components/Header';
import Footer from './components/Footer';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="bg-gray-900 text-gray-300">
      
      
      <main>
        <HeroSection />
        <ProjectsSection />
      </main>

      <Footer />
    </div>
  )
}

export default App;