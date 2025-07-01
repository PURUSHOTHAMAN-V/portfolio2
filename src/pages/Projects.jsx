import { Github, ExternalLink, Calendar, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with user authentication, product management, and payment integration.",
      techStack: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      image: "/project1.jpg",
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.com",
      features: [
        "User authentication and authorization",
        "Product catalog with search and filters",
        "Shopping cart and checkout process",
        "Payment integration with Stripe",
        "Admin dashboard for product management"
      ],
      date: "Dec 2024"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      techStack: ["React", "Firebase", "Tailwind CSS", "Socket.io"],
      image: "/project2.jpg",
      githubUrl: "https://github.com/yourusername/task-manager",
      liveUrl: "https://task-manager-demo.com",
      features: [
        "Real-time task updates",
        "Team collaboration",
        "Task categorization and priority levels",
        "Progress tracking and analytics",
        "Mobile responsive design"
      ],
      date: "Nov 2024"
    },
    {
      title: "Weather Dashboard",
      description: "A weather application that displays current weather and forecasts using multiple weather APIs.",
      techStack: ["JavaScript", "HTML5", "CSS3", "Weather API", "Chart.js"],
      image: "/project3.jpg",
      githubUrl: "https://github.com/yourusername/weather-dashboard",
      liveUrl: "https://weather-demo.com",
      features: [
        "Current weather display",
        "5-day weather forecast",
        "Location-based weather",
        "Interactive weather maps",
        "Weather alerts and notifications"
      ],
      date: "Oct 2024"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website built with modern web technologies and professional design.",
      techStack: ["React", "Tailwind CSS", "Vite", "Lucide Icons"],
      image: "/project4.jpg",
      githubUrl: "https://github.com/yourusername/portfolio",
      liveUrl: "https://portfolio-demo.com",
      features: [
        "Responsive design for all devices",
        "Dark/Light mode toggle",
        "Smooth animations and transitions",
        "Contact form integration",
        "SEO optimized"
      ],
      date: "Sep 2024"
    },
    {
      title: "Blog Platform",
      description: "A content management system for creating and managing blog posts with markdown support.",
      techStack: ["Python", "Flask", "SQLite", "Markdown", "Bootstrap"],
      image: "/project5.jpg",
      githubUrl: "https://github.com/yourusername/blog-platform",
      liveUrl: "https://blog-demo.com",
      features: [
        "Markdown editor for blog posts",
        "User authentication system",
        "Comment system",
        "Search functionality",
        "Admin panel for content management"
      ],
      date: "Aug 2024"
    }
  ];

  const ProjectCard = ({ project }) => (
    <div className="card group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Project Image Placeholder */}
      <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-blue-100 dark:from-primary-900 dark:to-blue-900 rounded-lg mb-6 flex items-center justify-center">
        <div className="text-center">
          <Code className="w-12 h-12 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
          <p className="text-sm text-gray-600 dark:text-gray-400">Project Screenshot</p>
        </div>
      </div>

      {/* Project Info */}
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {project.title}
          </h3>
          <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
            <Calendar className="w-4 h-4" />
            <span>{project.date}</span>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-primary-50 dark:bg-primary-900 text-primary-600 dark:text-primary-400 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Features */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
            Key Features:
          </h4>
          <ul className="space-y-1">
            {project.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3 pt-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>Code</span>
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-900 dark:to-dark-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A collection of projects showcasing my skills in web development, 
              full-stack applications, and modern technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      {/* <section className="section-padding bg-white dark:bg-dark-800">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section> */}

      {/* Project Statistics
      <section className="section-padding bg-gray-50 dark:bg-dark-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Project Statistics
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">5</div>
                <p className="text-gray-600 dark:text-gray-400">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">15+</div>
                <p className="text-gray-600 dark:text-gray-400">Technologies Used</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">100%</div>
                <p className="text-gray-600 dark:text-gray-400">Responsive Design</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">4.8★</div>
                <p className="text-gray-600 dark:text-gray-400">Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-900 dark:to-dark-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Interested in Working Together?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              I'm always open to discussing new opportunities and exciting projects. 
              Let's create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:vpurushothaman46@gmail.com"
                className="btn-primary inline-flex items-center justify-center space-x-2"
              >
                <span>Get In Touch</span>
              </a>
              <a
                href="https://github.com/PURUSHOTHAMAN-V"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center space-x-2"
              >
                <Github className="w-4 h-4" />
                <span>View GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects; 