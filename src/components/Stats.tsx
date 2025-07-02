
const Stats = () => {
  const stats = [
    { number: "14", label: "Years of Experience", color: "text-purple-600" },
    { number: "50+", label: "Projects Completed", color: "text-pink-600" },
    { number: "1.5K", label: "Happy Clients", color: "text-blue-600" },
    { number: "14", label: "Awards Won", color: "text-green-600" },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
              <div className={`text-4xl sm:text-5xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
