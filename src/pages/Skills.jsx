import { Code, Globe, Database, Wrench, Star } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        { name: "C", level: 85, color: "bg-blue-500" },
        { name: "C++", level: 80, color: "bg-blue-600" },
        { name: "Python", level: 90, color: "bg-yellow-500" },
        { name: "JavaScript", level: 88, color: "bg-yellow-400" }
      ]
    },
    {
      icon: Globe,
      title: "Web Technologies",
      skills: [
        { name: "HTML5", level: 95, color: "bg-orange-500" },
        { name: "CSS3", level: 90, color: "bg-blue-500" },
        { name: "React", level: 85, color: "bg-blue-400" },
        { name: "Flask", level: 75, color: "bg-gray-600" }
      ]
    },
    {
      icon: Database,
      title: "Databases",
      skills: [
        { name: "MySQL", level: 80, color: "bg-blue-600" },
        { name: "PostgreSQL", level: 75, color: "bg-blue-700" }
      ]
    },
    {
      icon: Wrench,
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 85, color: "bg-orange-600" },
        { name: "VS Code", level: 90, color: "bg-blue-500" },
        { name: "Figma", level: 70, color: "bg-purple-500" },
        { name: "Postman", level: 80, color: "bg-orange-500" },
        { name: "Linux", level: 75, color: "bg-yellow-600" },
        { name: "REST APIs", level: 85, color: "bg-green-500" },
        { name: "Cybersecurity", level: 70, color: "bg-red-500" }
      ]
    }
  ];

  const SkillBar = ({ skill }) => (
    <div className="mb-3">
      <span className="block text-base font-medium text-gray-800 dark:text-gray-200 text-center">
        {skill.name}
      </span>
    </div>
  );

  const SkillCard = ({ category }) => (
    <div className="card bg-white dark:bg-dark-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 flex flex-col items-center border border-gray-100 dark:border-dark-700 max-w-xs w-full mx-auto">
      <div className="flex flex-col items-center mb-4">
        <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-xl flex items-center justify-center mb-2">
          <category.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
        </div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white text-center">
          {category.title}
        </h3>
      </div>
      <div className="w-full space-y-2">
        {category.skills.map((skill, index) => (
          <SkillBar key={index} skill={skill} />
        ))}
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
              Technical <span className="gradient-text">Skills</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise across programming languages, 
              web technologies, databases, and development tools.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="section-padding bg-white dark:bg-dark-800">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <SkillCard key={index} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="section-padding bg-gray-50 dark:bg-dark-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Skills Overview
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-10 h-10 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Programming
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Strong foundation in C, C++, Python, and JavaScript with focus on problem-solving and algorithm design.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-10 h-10 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Web Development
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Full-stack development with React, Flask, HTML5, CSS3, and modern web technologies.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-10 h-10 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Tools & DevOps
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Proficient with Git, VS Code, Linux, and various development tools and practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Goals */}
      <section className="section-padding bg-white dark:bg-dark-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Currently Learning
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card border-l-4 border-primary-500">
                <div className="flex items-center mb-3">
                  <Star className="w-5 h-5 text-primary-500 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Advanced React Patterns
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Exploring advanced React concepts including hooks, context, and performance optimization.
                </p>
              </div>

              <div className="card border-l-4 border-green-500">
                <div className="flex items-center mb-3">
                  <Star className="w-5 h-5 text-green-500 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Machine Learning
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Learning ML algorithms and implementing them using Python libraries like TensorFlow and scikit-learn.
                </p>
              </div>

              <div className="card border-l-4 border-purple-500">
                <div className="flex items-center mb-3">
                  <Star className="w-5 h-5 text-purple-500 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Cloud Computing
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Exploring AWS services and cloud deployment strategies for scalable applications.
                </p>
              </div>

              <div className="card border-l-4 border-orange-500">
                <div className="flex items-center mb-3">
                  <Star className="w-5 h-5 text-orange-500 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Cybersecurity
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Deepening knowledge in ethical hacking, penetration testing, and secure coding practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills; 