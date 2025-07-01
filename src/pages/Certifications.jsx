import { Award, ExternalLink, Calendar, Download } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "MATLAB Onramp",
      provider: "MathWorks Training Services",
      date: "18 December 2024",
      description: "Completed the MATLAB Onramp self-paced course offered by MathWorks, covering the basics of MATLAB programming.",
      image: "/mat1.png",
      downloadUrl: "/mat1.png",
      category: "Programming"
    },
    {
      title: "Statistics Onramp",
      provider: "MathWorks Training Services",
      date: "1 April 2025",
      description: "Completed the Statistics Onramp self-paced course offered by MathWorks, focusing on data analysis and statistical methods in MATLAB.",
      image: "/mat2.png",
      downloadUrl: "/mat2.png",
      category: "Data Science"
    },
    
  ];

  const categories = ["All", "Programming", "Web Development", "Cybersecurity", "Database"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-900 dark:to-dark-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="gradient-text">Certifications</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Professional certifications and courses that demonstrate my commitment to continuous learning 
              and skill development in various technology domains.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="section-padding bg-white dark:bg-dark-800">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="card group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Certificate Image Placeholder */}
                <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-blue-100 dark:from-primary-900 dark:to-blue-900 rounded-lg mb-6 flex items-center justify-center">
                  <img
                    src={cert.image}
                    alt={cert.title + ' Certificate'}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Certificate Info */}
                <div className="space-y-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-primary-50 dark:bg-primary-900 text-primary-600 dark:text-primary-400 text-xs rounded-full mb-3">
                      {cert.category}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {cert.provider}
                    </p>
                    <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-4">
                    <a
                      href={cert.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View</span>
                    </a>
                    <a
                      href={cert.downloadUrl}
                      download
                      className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Certification Statistics
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">5</div>
                <p className="text-gray-600 dark:text-gray-400">Certifications</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">4</div>
                <p className="text-gray-600 dark:text-gray-400">Categories</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">200+</div>
                <p className="text-gray-600 dark:text-gray-400">Hours of Learning</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">100%</div>
                <p className="text-gray-600 dark:text-gray-400">Completion Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      
    </div>
  );
};

export default Certifications; 