function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <h2 className="text-2xl font-bold">Arthur Fialho</h2>
        <ul className="flex space-x-6">
          <li><a href="#projects" className="hover:text-gray-300 transition-colors">Projetos</a></li>
          <li><a href="#experience" className="hover:text-gray-300 transition-colors">Experiência</a></li>
          <li><a href="#contact" className="hover:text-gray-300 transition-colors">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;