export function PageHeader({ title, description }) {
  return (
    <div className="bg-gray-950 py-14 border-b border-gray-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-brand-600 rounded-full blur-[120px] opacity-15"></div>
    </div>
  );
}
