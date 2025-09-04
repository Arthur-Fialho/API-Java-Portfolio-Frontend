import Header from './components/Header';
import Footer from './components/Footer';
import ProjectsSection from './components/ProjectsSection';

function App() {
  return (
    <div className="bg-gray-900 text-gray-300 min-h-screen">
      <Header />
      
      <main>
        <ProjectsSection />
      </main>

      <Footer />
    </div>
  )
}

export default App;