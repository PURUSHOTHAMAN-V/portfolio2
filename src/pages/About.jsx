import { GraduationCap, Code, Shield, Brain, MapPin, Calendar } from 'lucide-react';

const About = () => {
  const education = {
    degree: "B.Tech Information Technology",
    institution: "College of Engineering Guindy",
    duration: "2023 - 2027",
    location: "Chennai, Tamil Nadu"
  };

  const interests = [
    {
      icon: Code,
      title: "Web Development",
      description: "Building modern, responsive web applications using React, Node.js, and other cutting-edge technologies."
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Exploring security concepts, ethical hacking, and implementing secure coding practices."
    },
    {
      icon: Brain,
      title: "AI & DSA",
      description: "Working with artificial intelligence concepts and solving complex algorithmic problems."
    },
     {
      icon: Brain,
      title: "ML",
      description: "Working with Machine Learning"
    }
  ];

  const timeline = [
    {
      year: "2023",
      title: "Started B.Tech IT",
      description: "Began my journey in Information Technology at College of Engineering Guindy."
    },
    {
      year: "2024",
      title: "First Web Project",
      description: "Developed my first full-stack web application using React and Node.js."
    },
    {
      year: "2025",
      title: "Cybersecurity Focus",
      description: "Started exploring cybersecurity concepts and participated in CTF competitions."
    },
  
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-900 dark:to-dark-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A passionate pre-final-year B.Tech IT student with a strong foundation in web development, 
              cybersecurity, and problem-solving. Always eager to learn new technologies and contribute 
              to innovative projects.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-padding bg-white dark:bg-dark-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Education
            </h2>
            
            <div className="card">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {education.degree}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
                    {education.institution}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{education.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{education.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="section-padding bg-gray-50 dark:bg-dark-900">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Areas of Interest
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {interests.map((interest, index) => (
              <div key={index} className="card text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <interest.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {interest.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section-padding bg-white dark:bg-dark-800">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            My Journey
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-dark-600"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start mb-8">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-dark-800 -translate-x-1/2"></div>
                  
                  {/* Content */}
                  <div className="ml-16 flex-1">
                    <div className="card">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                        <span className="text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900 px-3 py-1 rounded-full">
                          {item.year}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personal Statement */}
      <section className="section-padding bg-gray-50 dark:bg-dark-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Personal Statement
            </h2>
            <div className="card">
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                As a pre-final-year B.Tech Information Technology student, I am passionate about leveraging 
                technology to solve real-world problems. My journey in tech has been driven by curiosity 
                and a desire to create meaningful impact through innovative solutions.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I believe in continuous learning and staying updated with the latest technologies. 
                Whether it's building web applications, exploring cybersecurity concepts, or working 
                on AI projects, I approach each challenge with enthusiasm and determination to deliver 
                high-quality results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 
