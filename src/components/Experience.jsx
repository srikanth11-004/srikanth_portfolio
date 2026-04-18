const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-transparent bg-clip-text">
            Experience
          </span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Position Header */}
          <div className="border-l-4 border-purple-500 pl-6">
            <h3 className="text-2xl font-bold text-gray-800">Research Intern</h3>
            <p className="text-gray-600 mt-1">IIT Hyderabad • Jan 2025 - May 2025</p>
          </div>

          {/* Project */}
          <div className="pl-6">
            <h4 className="text-lg font-semibold text-purple-600 mb-2">Complete Blood Count using Machine Learning</h4>
            <p className="text-gray-700 leading-relaxed">
              Developed an advanced ML system for automated blood cell detection and counting, 
              achieving high accuracy in identifying and classifying different blood cell types.
            </p>
          </div>

          {/* Responsibilities */}
          <div className="pl-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-700">
                <span className="text-purple-500 mt-1">•</span>
                <span>Implemented YOLO-based object detection models for precise identification of blood cells in microscopic images</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="text-purple-500 mt-1">•</span>
                <span>Developed custom data preprocessing pipelines using OpenCV for image enhancement and augmentation</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="text-purple-500 mt-1">•</span>
                <span>Optimized model performance through hyperparameter tuning and architecture modifications using PyTorch</span>
              </li>
            </ul>
          </div>

          {/* Technologies */}
          <div className="pl-6">
            <div className="flex flex-wrap gap-2">
              {['PyTorch', 'YOLO', 'Python', 'OpenCV', 'Deep Learning'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
