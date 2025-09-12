import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../hooks/useTheme';

function ThemeSwitcher() {
  const [theme, toggleTheme] = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
      aria-label="Alternar tema"
    >
      {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
    </button>
  );
}

export default ThemeSwitcher;