import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

const Home = () => {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/PURUSHOTHAMAN-V', icon: Github },
    { name: 'LinkedIn', url:  "https://www.linkedin.com/in/purushothaman-v-40166928a/", icon: Linkedin },
    { name: 'Email', url: 'mailto:vpurushothaman46@gmail.com', icon: Mail }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-900 dark:to-dark-800">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  Hi, I'm <span className="gradient-text">Purushothaman V</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                  Aspiring Software Engineer | ML Enthusiast | Web Developer | Cybersecurity Enthusiast
                </p>
              </div>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Final-year B.Tech Information Technology student at College of Engineering Guindy. 
                Passionate about creating innovative web solutions, Machine Learning and exploring cybersecurity.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/projects" className="btn-primary flex items-center justify-center space-x-2 group">
                  <span>View My Work</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <a href="/purushothaman_resume.pdf" download className="btn-secondary flex items-center justify-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
              </div>

              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-white dark:bg-dark-300 shadow-md border border--600 dark:border-dark-700 transition-all duration-200 hover:scale-105"
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="w-80 h-80 bg-gradient-to-br  rounded-full flex items-center justify-center shadow-2xl relative">
                {/* Profile Photo */}
                <img
                  src="/profile.jpg"
                  alt="Profile"
                  className="w-72 h-72 object-cover rounded-full border-4 border-white dark:border-dark-700 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
                  style={{ display: 'block' }}
                />
                {/* Fallback Initials */}
                {/* <div style={{ display: 'none' }} className="text-center fallback-initials">
                  <div className="text-6xl font-bold gradient-text mb-2">PV</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">B.Tech IT</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats
      <section className="section-padding bg-white dark:bg-dark-800">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">5+</div>
              <p className="text-gray-600 dark:text-gray-400">Projects</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">3+</div>
              <p className="text-gray-600 dark:text-gray-400">Years</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">10+</div>
              <p className="text-gray-600 dark:text-gray-400">Technologies</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">100%</div>
              <p className="text-gray-600 dark:text-gray-400">Dedication</p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Home; 