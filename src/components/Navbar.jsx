import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X, Download } from 'lucide-react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white dark:bg-dark-800 shadow-lg border-b border-gray-200 dark:border-dark-700 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Purushothaman V
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-dark-700 dark:hover:bg-dark-600 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            <a
              href="/purushothaman_resume.pdf"
              download
              className="btn-primary flex items-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-dark-700 dark:hover:bg-dark-600 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-dark-700 dark:hover:bg-dark-600 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-dark-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-primary-600 bg-primary-50 dark:text-primary-400 dark:bg-dark-700'
                      : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-primary-400 dark:hover:bg-dark-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="/assets/purushothaman_resume.pdf"
                download
                className="block px-3 py-2 rounded-md text-base font-medium text-primary-600 hover:bg-primary-50 dark:text-primary-400 dark:hover:bg-dark-700 transition-colors duration-200"
              >
                Download Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 
