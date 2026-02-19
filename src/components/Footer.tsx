import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-4">
              Gowtham Raj S
            </h3>
            <p className="text-gray-600 dark:text-gray-400">AI & Data Science Student | Building intelligent solutions for tomorrow</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-500 transition-colors">
                About
              </a>
              <a href="#projects" className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-500 transition-colors">
                Projects
              </a>
              <a href="#experience" className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-500 transition-colors">
                Experience
              </a>
              <a href="#contact" className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-500 transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 dark:bg-gray-700 flex items-center justify-center hover:bg-blue-600 dark:hover:bg-cyan-500 transition-colors"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="mailto:sgowthamraj14@gmail.com"
                className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center hover:shadow-lg transition-all"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-300 dark:border-gray-700">
          <p className="text-center text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
            <span>&copy; {currentYear} Gowtham Raj S.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
