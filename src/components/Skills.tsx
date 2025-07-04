
const Skills = () => {
  const skills = [
    { 
      name: "React", 
      level: 95, 
      icon: "https://www.flaticon.com/free-icon/physics_1126012?term=react&page=1&position=3&origin=search&related_id=1126012", 
      color: "from-blue-500 to-cyan-500" 
    },
    { 
      name: "Flutter", 
      level: 88, 
      icon: "https://img.icons8.com/?size=100&id=pCvIfmctRaY8&format=png&color=000000", 
      color: "from-blue-600 to-indigo-600" 
    },
    { 
      name: "Next.js", 
      level: 92, 
      icon: "https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000", 
      color: "from-gray-700 to-gray-900" 
    },
    { 
      name: "TypeScript", 
      level: 90, 
      icon: "https://img.icons8.com/?size=100&id=vMqgHSToxrJR&format=png&color=000000", 
      color: "from-blue-600 to-blue-800" 
    },
    { 
      name: "Node.js", 
      level: 87, 
      icon: "https://img.icons8.com/?size=100&id=54087&format=png&color=000000", 
      color: "from-green-500 to-emerald-500" 
    },
    { 
      name: "Supabase", 
      level: 85, 
      icon: "https://img.icons8.com/?size=100&id=sH0rW2TvYdr9&format=png&color=000000", 
      color: "from-green-600 to-teal-600" 
    },
    { 
      name: "PostgreSQL", 
      level: 82, 
      icon: "https://img.icons8.com/?size=100&id=38561&format=png&color=000000", 
      color: "from-blue-700 to-indigo-800" 
    },
    { 
      name: "React Native", 
      level: 89, 
      icon: "https://img.icons8.com/?size=100&id=pCvIfmctRaY8&format=png&color=000000", 
      color: "from-cyan-500 to-blue-500" 
    },
    { 
      name: "Figma", 
      level: 93, 
      icon: "https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000", 
      color: "from-pink-500 to-rose-500" 
    },
    { 
      name: "Tailwind CSS", 
      level: 94, 
      icon: "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000", 
      color: "from-cyan-400 to-blue-500" 
    },
    { 
      name: "Firebase", 
      level: 83, 
      icon: "https://img.icons8.com/?size=100&id=62452&format=png&color=000000", 
      color: "from-yellow-500 to-orange-500" 
    },
    { 
      name: "Docker", 
      level: 78, 
      icon: "https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000", 
      color: "from-blue-600 to-cyan-600" 
    },
    { 
      name: "Git", 
      level: 91, 
      icon: "https://www.flaticon.com/free-icon/github_4926624?term=git&page=1&position=4&origin=search&related_id=4926624", 
      color: "from-orange-500 to-red-500" 
    }
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-pink-50 relative overflow-hidden">
      {/* Background decoration with slower animations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-16 right-16 w-48 h-48 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full filter blur-2xl animate-pulse-slow"></div>
        <div className="absolute bottom-16 left-16 w-56 h-56 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full filter blur-2xl animate-pulse-slow animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-slow">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 hover:text-purple-700 transition-colors duration-700 transform hover:scale-105">
            My Stack
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4 hover:text-gray-800 transition-colors duration-500">
            Tools and technologies I use to build great products.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-1000 hover:scale-105 hover:-translate-y-2 animate-fade-in-ultra-slow group cursor-pointer transform hover:rotate-1"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 transform">
                  <img 
                    src={skill.icon} 
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-500">{skill.name}</h3>
              </div>
              <div className="relative">
                <div className="bg-gray-200 rounded-full h-2 sm:h-3 mb-2 overflow-hidden">
                  <div 
                    className={`bg-gradient-to-r ${skill.color} h-2 sm:h-3 rounded-full transition-all duration-1500 ease-out group-hover:animate-pulse-slow hover:scale-105 transform origin-left`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="text-right text-xs sm:text-sm font-medium text-purple-600 group-hover:text-purple-700 transition-colors duration-500 hover:scale-105 transform">
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
