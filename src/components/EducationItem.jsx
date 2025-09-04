function EducationalItem({ institution, course, startDate, endDate, description }) {
  const formatDate = (dateString) => {
    if (!dateString) return "Presente";
    const options = { year: 'numeric', month: 'long' };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
  };

  return (
    <div className="relative pl-8 sm:pl-12 py-4 group">
      <div className="absolute left-0 top-6 w-px h-full bg-gray-700 sm:left-4"></div>
      <div className="absolute left-[-5px] top-6 w-3.5 h-3.5 bg-gray-600 rounded-full border-2 border-gray-900 group-hover:bg-teal-500 transition-colors sm:left-[9px]"></div>
      
      <p className="text-sm text-gray-500">{formatDate(startDate)} - {formatDate(endDate)}</p>
      <h3 className="text-xl font-bold text-white mt-1">{course}</h3>
      <h4 className="text-md font-semibold text-gray-400 mb-2">{institution}</h4>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

export default EducationalItem;