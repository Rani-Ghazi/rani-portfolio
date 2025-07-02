
const Experience = () => {
  const experiences = [
    {
      role: "LEAD DEVELOPER",
      company: "Web Design Company",
      period: "2020 - Present",
      description: "Leading a team of developers in creating innovative web solutions"
    },
    {
      role: "FULL STACK WEB DEVELOPER",
      company: "Digital Agency Co.",
      period: "2018 - 2020",
      description: "Developed comprehensive web applications using modern technologies"
    },
    {
      role: "UI DESIGNER",
      company: "Creative Studio",
      period: "2016 - 2018",
      description: "Designed user interfaces for web and mobile applications"
    },
    {
      role: "JUNIOR GRAPHICS DESIGNER",
      company: "Design Agency",
      period: "2014 - 2016",
      description: "Created visual designs for various marketing materials"
    }
  ];

  const education = [
    {
      degree: "PROGRAMMING COURSE",
      school: "University of Toronto",
      period: "2016 - 2020",
      description: "Specialized in modern web development frameworks"
    },
    {
      degree: "GRAPHIC DESIGN COURSE",
      school: "University of Toronto",
      period: "2014 - 2016",
      description: "Focused on visual design principles and digital arts"
    },
    {
      degree: "WEB DESIGN COURSE",
      school: "College Institute",
      period: "2012 - 2014",
      description: "Foundation in web design and user experience"
    },
    {
      degree: "DESIGN & TECHNOLOGY",
      school: "Technical Institute",
      period: "2010 - 2012",
      description: "Basic design principles and technology fundamentals"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience */}
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">My Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-purple-200 hover:border-purple-400 transition-colors">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-600 rounded-full"></div>
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="font-bold text-gray-900 mb-1">{exp.role}</h3>
                    <p className="text-purple-600 font-medium mb-2">{exp.company}</p>
                    <p className="text-sm text-gray-500 mb-3">{exp.period}</p>
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">My Education</h2>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-purple-200 hover:border-purple-400 transition-colors">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-600 rounded-full"></div>
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="font-bold text-gray-900 mb-1">{edu.degree}</h3>
                    <p className="text-purple-600 font-medium mb-2">{edu.school}</p>
                    <p className="text-sm text-gray-500 mb-3">{edu.period}</p>
                    <p className="text-gray-600">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
