function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-8 px-4 text-center border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="container mx-auto">
        <p className="text-sm font-medium">
          &copy; {currentYear} - Arthur Fialho. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;