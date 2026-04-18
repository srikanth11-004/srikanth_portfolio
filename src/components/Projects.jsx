const Projects = () => {
  const projects = [
    {
      title: 'Context-Aware Video RAG Agent',
      description: 'Retrieval-Augmented Generation application with Streamlit UI for YouTube transcript extraction, enabling timestamp-aware Q&A and automated summarization.',
      features: [
        'Optimized retrieval latency using all-MiniLM-L6-v2 vector embeddings',
        'ChromaDB vector database for efficient indexing',
        'Google Gemini API integration with 1000-char overlapping chunking',
        'Maintains contextual integrity and minimizes AI hallucinations'
      ],
      tech: ['Python', 'LangChain', 'Gemini API', 'ChromaDB', 'Streamlit', 'HuggingFace'],
      github: 'https://github.com/srikanth11-004/Context-Aware-Video-RAG-Agent',
      image: '/images/Rag_model.png'
    },
    {
      title: 'Green-Tech Inventory Assistant',
      description: 'AI-powered inventory web application leveraging Gemini API to predict stockouts and automate reorder recommendations, saving managers 15-20 hours per week.',
      features: [
        'Natural language chatbot for real-time inventory querying',
        'Deterministic rule-based fallback system for continuous uptime',
        'Sustainability scoring algorithm analyzing turnover and expiry patterns',
        'Projected to reduce food waste by 60-70% for small businesses'
      ],
      tech: ['Python', 'Gemini API', 'AI/ML', 'Web Integration'],
      github: 'https://github.com/srikanth11-004/Green-Tech-Inventory-Assistant',
      image: '/images/Greentech_assistant.png'
    },
    {
      title: 'Real Estate Home Sales Website',
      description: 'Full-stack real estate platform with user authentication, property management, and advanced search functionality.',
      features: [
        'User authentication with Google OAuth integration for secure access',
        'Responsive UI using Tailwind CSS for seamless experience across devices',
        'Robust CRUD functionality for efficient property listing management',
        'Advanced search and filter by location, price, and bedrooms'
      ],
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'OAuth'],
      github: 'https://github.com/srikanth11-004',
      image: '/images/real_estate_image.png'
    },
    {
      title: 'Heart Disease Risk Prediction Model',
      description: 'Machine learning model trained on UCI Cleveland dataset achieving ~90% classification accuracy with strong ROC-AUC performance.',
      features: [
        'Comprehensive data preprocessing with categorical encoding and feature standardization',
        'Logistic Regression model with ~90% accuracy',
        'Benchmarked against 100-tree Random Forest classifier',
        'Evaluated trade-offs between interpretability and predictive accuracy'
      ],
      tech: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
      github: 'https://github.com/srikanth11-004',
      image: '/images/heart_image.png'
    },
    {
      title: 'HTTP Key-Value Store with Caching',
      description: 'Multi-tier HTTP key-value storage system with intelligent caching layer to reduce request-response latency.',
      features: [
        'Python socket programming for GET, PUT, DELETE operations',
        'In-memory caching layer for frequently accessed data',
        'Network performance benchmarking with PCAP trace analysis',
        'Quantified latency reductions and throughput improvements'
      ],
      tech: ['Python', 'Socket Programming', 'HTTP', 'Caching', 'PCAP'],
      github: 'https://github.com/srikanth11-004',
      image: '/images/http_image.png'
    },
    {
      title: 'Reliable Data Transfer (RDT) over UDP',
      description: 'Robust file transfer systems implementing Stop-and-Wait (RDT 3.0) and Go-Back-N protocols for 100% ordered and lossless delivery.',
      features: [
        'Custom sender/receiver with message segmentation and sequence numbering',
        'Acknowledgment tracking for guaranteed lossless delivery',
        'Stress-tested under simulated network constraints',
        'Optimized throughput and minimized retransmissions'
      ],
      tech: ['Python', 'UDP', 'RDT', 'Go-Back-N', 'Network Protocols'],
      github: 'https://github.com/srikanth11-004',
      image: '/images/UDP_image.png'
    },
    {
      title: 'NewsNow',
      description: 'Online news application allowing users to browse latest news organized into categories with responsive UI.',
      features: [
        'Real-time news fetching using NewsAPI',
        'News organized into various categories',
        'Responsive and user-friendly interface',
        'Convenient browsing experience'
      ],
      tech: ['React', 'NewsAPI', 'Bootstrap'],
      github: 'https://github.com/srikanth11-004',
      image: '/images/newsnow_image.png'
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-transparent bg-clip-text">
            Projects
          </span>
        </h2>
        
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl overflow-hidden border border-purple-200 hover:border-purple-400 hover:shadow-xl transition-all flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Project Image */}
              <div className="md:w-2/5 h-64 md:h-auto bg-white flex items-center justify-center">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-purple-300 text-6xl">📁</div>
                )}
              </div>
              
              {/* Project Content */}
              <div className="md:w-3/5 p-6">
                <h3 className="text-xl font-bold mb-2 text-purple-700">{project.title}</h3>
                <p className="text-gray-700 mb-3 text-sm leading-relaxed">{project.description}</p>
                
                {/* Features */}
                <ul className="mb-3 space-y-1">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-gray-700 flex items-start">
                      <span className="text-purple-500 mr-2 mt-0.5">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub Link */}
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all font-semibold text-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>View on GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
