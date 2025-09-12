import { useState, useEffect } from 'react';

function Clock() {
  const [date, setDate] = useState(new Date());

  // Temporizador.
  useEffect(() => {
    // A função setInterval irá executar a cada 1000ms (1 segundo)
    const timerId = setInterval(() => {
      // A cada segundo, atualizamos o nosso state com a nova hora
      setDate(new Date());
    }, 1000);

    // A função de "limpeza" (cleanup) Evita memory leaks.
    return () => {
      clearInterval(timerId);
    };
  }, []);

  // Opções para formatar a data e a hora para o padrão local (ex: pt-BR)
  const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
      <div className="text-left text-sm font-mono">
        <p className="text-gray-400 dark:text-gray-500">{date.toLocaleDateString(undefined, dateOptions)}</p>
        <p className="text-gray-500 dark:text-gray-400">{date.toLocaleTimeString(undefined, timeOptions)}</p>
      </div>
    </div>
  );
}

export default Clock;