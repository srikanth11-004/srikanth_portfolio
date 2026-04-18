const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Photo */}
          <div className="flex justify-center">
            <div className="relative group">
              {/* Animated gradient border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 animate-gradient"></div>
              
              {/* Photo */}
              <div className="relative">
                <img 
                  src="/images/srikanth15.jpg" 
                  alt="Srikanth" 
                  className="relative w-80 h-80 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="flex flex-col justify-center">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I'm a passionate developer specializing in <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">AI/ML</span> and <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Software Development</span>. 
              I thrive on building intelligent systems and scalable applications that solve real-world problems.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              With expertise in machine learning algorithms, deep learning frameworks, and full-stack development, 
              I bridge the gap between cutting-edge AI research and production-ready software solutions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Currently exploring opportunities in AI/ML engineering and software development roles where I can 
              leverage data-driven insights and robust engineering practices to create impactful products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
