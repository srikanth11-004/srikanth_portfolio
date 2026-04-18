const Education = () => {
  const education = [
    {
      degree: 'B.Tech in Engineering Science',
      institution: 'IIT Hyderabad',
      year: '2022 - 2026',
      grade: 'CGPA: 7.50',
      icon: '🎓'
    },
    {
      degree: 'XII (State Board)',
      institution: 'Narayana Junior College',
      year: '2021',
      grade: '98.20%',
      icon: '📚'
    },
    {
      degree: 'X (SSC)',
      institution: 'Siddhartha Model High School',
      year: '2019',
      grade: '9.80 GPA',
      icon: '🏫'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Education
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-red-500"></div>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative pl-20">
                {/* Timeline dot */}
                <div className="absolute left-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-lg">
                  <span className="text-lg">{edu.icon}</span>
                </div>
                
                {/* Content card */}
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all hover:scale-105 border-l-4 border-purple-500">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
                    <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-gray-600 font-medium mb-2">{edu.institution}</p>
                  <p className="text-sm font-semibold text-pink-600">{edu.grade}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
