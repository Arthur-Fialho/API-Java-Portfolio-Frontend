import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    // Tenta obter o tema do localStorage. Se não existir, usa 'dark' como padrão.
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark'); // Limpa classes antigas
    root.classList.add(theme); // Adiciona a classe do tema atual ('light' ou 'dark')

    localStorage.setItem('theme', theme); // Guarda a preferência no localStorage
  }, [theme]); // Este efeito executa sempre que o 'theme' muda

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return [theme, toggleTheme];
};