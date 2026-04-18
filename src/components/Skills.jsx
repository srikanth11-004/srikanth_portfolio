const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
        { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
        { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Fortran', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fortran/fortran-original.svg' }
      ]
    },
    {
      title: 'AI/ML Libraries & Frameworks',
      skills: [
        { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
        { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
        { name: 'scikit-learn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' },
        { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
        { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
        { name: 'Matplotlib', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg' },
        { name: 'Transformers', icon: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg' }
      ]
    },
    {
      title: 'Developer Tools',
      skills: [
        { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
        { name: 'Jupyter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg' },
        { name: 'Google Colab', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg' },
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'Solid Edge', icon: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png' }
      ]
    },
    {
      title: 'Documentation & Presentation',
      skills: [
        { name: 'Word', icon: 'https://img.icons8.com/color/96/microsoft-word-2019--v2.png' },
        { name: 'Excel', icon: 'https://img.icons8.com/color/96/microsoft-excel-2019--v1.png' },
        { name: 'PowerPoint', icon: 'https://img.icons8.com/color/96/microsoft-powerpoint-2019--v1.png' },
        { name: 'Keynote', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg' },
        { name: 'LaTeX', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/latex/latex-original.svg' }
      ]
    },
    {
      title: 'Problem Solving',
      type: 'special',
      platforms: [
        { name: 'LeetCode', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png', link: 'https://leetcode.com/u/srikanth15_04/' },
        { name: 'GeeksforGeeks', logo: 'https://media.geeksforgeeks.org/gfg-gg-logo.svg', link: 'https://www.geeksforgeeks.org/profile/srikanth15_04' }
      ],
      count: '400+ Problems Solved'
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Teamwork' },
        { name: 'Leadership' },
        { name: 'Adaptability' },
        { name: 'Dedication' },
        { name: 'Work Ethic' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-transparent bg-clip-text">
            Skills & Expertise
          </span>
        </h2>
        
        <div className="space-y-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-200 hover:border-purple-400 hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-bold mb-3 text-purple-700">{category.title}</h3>
              
              {category.type === 'special' ? (
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-3">
                    {category.platforms.map((platform) => (
                      <a 
                        key={platform.name}
                        href={platform.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white rounded-lg px-4 py-3 border border-purple-200 hover:border-purple-500 hover:shadow-md transition-all cursor-pointer flex items-center justify-center"
                      >
                        <img 
                          src={platform.logo} 
                          alt={platform.name} 
                          className="h-6 object-contain"
                        />
                      </a>
                    ))}
                  </div>
                  <p className="text-sm font-semibold text-purple-600">{category.count}</p>
                </div>
              ) : (
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill.name} 
                      className="bg-white p-2 rounded-lg border border-purple-200 hover:border-purple-500 hover:shadow-md hover:scale-105 transition-all flex flex-col items-center justify-center gap-1 group"
                    >
                      {skill.icon && (
                        <img 
                          src={skill.icon} 
                          alt={skill.name} 
                          className="w-8 h-8 object-contain group-hover:scale-110 transition-transform" 
                        />
                      )}
                      <span className="text-[10px] font-medium text-gray-700 text-center">{skill.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
