import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-50 shadow-lg backdrop-blur-sm bg-opacity-95">
      <div className="max-w-full mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">Srikanth</div>
          
          <div className="hidden md:flex items-center ml-auto">
            <div className="flex items-center space-x-2 bg-gray-800 rounded-full px-2 py-2">
              <a href="#home" className="px-5 py-2 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all font-medium">Home</a>
              <a href="#about" className="px-5 py-2 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all font-medium">About</a>
              <a href="#education" className="px-5 py-2 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all font-medium">Education</a>
              <a href="#experience" className="px-5 py-2 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all font-medium">Experience</a>
              <a href="#skills" className="px-5 py-2 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all font-medium">Skills</a>
              <a href="#projects" className="px-5 py-2 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all font-medium">Projects</a>
              <a href="#contact" className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all font-medium">Contact</a>
            </div>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 hover:bg-purple-600 rounded-lg transition-all">Home</a>
            <a href="#about" className="block px-3 py-2 hover:bg-purple-600 rounded-lg transition-all">About</a>
            <a href="#education" className="block px-3 py-2 hover:bg-purple-600 rounded-lg transition-all">Education</a>
            <a href="#experience" className="block px-3 py-2 hover:bg-purple-600 rounded-lg transition-all">Experience</a>
            <a href="#skills" className="block px-3 py-2 hover:bg-purple-600 rounded-lg transition-all">Skills</a>
            <a href="#projects" className="block px-3 py-2 hover:bg-purple-600 rounded-lg transition-all">Projects</a>
            <a href="#contact" className="block px-3 py-2 hover:bg-purple-600 rounded-lg transition-all">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
