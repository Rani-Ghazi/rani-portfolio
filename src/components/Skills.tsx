
const Skills = () => {
  const skills = [
    { name: "React", level: 95, icon: "⚛️", color: "from-blue-500 to-cyan-500" },
    { name: "Node.js", level: 90, icon: "🟢", color: "from-green-500 to-emerald-500" },
    { name: "TypeScript", level: 88, icon: "📘", color: "from-blue-600 to-indigo-600" },
    { name: "Python", level: 85, icon: "🐍", color: "from-yellow-500 to-orange-500" },
    { name: "UI/UX Design", level: 92, icon: "🎨", color: "from-pink-500 to-rose-500" },
    { name: "MongoDB", level: 82, icon: "🍃", color: "from-green-600 to-teal-600" }
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            My Stack
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Tools and technologies I use to build great products.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300">{skill.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">{skill.name}</h3>
              </div>
              <div className="relative">
                <div className="bg-gray-200 rounded-full h-2 sm:h-3 mb-2 overflow-hidden">
                  <div 
                    className={`bg-gradient-to-r ${skill.color} h-2 sm:h-3 rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="text-right text-xs sm:text-sm font-medium text-purple-600 group-hover:text-purple-700 transition-colors duration-300">
                  {skill.level}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
