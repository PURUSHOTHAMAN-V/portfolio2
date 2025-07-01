import { Trophy, Medal, Award, Calendar, MapPin, ExternalLink, Download } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "Xceed & Carnivals Coordinator",
      organization: "CTF - CEG",
      date: "2024",
      description: "Successfully coordinated technical events and carnivals, managing teams and ensuring smooth execution of cybersecurity competitions.",
      category: "Leadership",
      icon: Trophy,
      image: "/cert1.png",
      downloadUrl: "/cert1.png"
    }
  ];

  const AchievementCard = ({ achievement }) => (
    <div className="card group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Achievement Image */}
      <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-blue-100 dark:from-primary-900 dark:to-blue-900 rounded-lg mb-6 flex items-center justify-center">
        <img
          src={achievement.image}
          alt={achievement.title + ' Achievement'}
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
        />
      </div>
      {/* Achievement Info */}
      <div className="space-y-4">
        <div>
          <span className="inline-block px-3 py-1 bg-primary-50 dark:bg-primary-900 text-primary-600 dark:text-primary-400 text-xs rounded-full mb-3">
            {achievement.category}
          </span>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
            <achievement.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
            {achievement.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            {achievement.organization}
          </p>
          <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
            <Calendar className="w-4 h-4" />
            <span>{achievement.date}</span>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          {achievement.description}
        </p>
        {/* Action Buttons */}
        <div className="flex space-x-3 pt-4">
          <a
            href={achievement.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>View</span>
          </a>
          <a
            href={achievement.downloadUrl}
            download
            className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Download</span>
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
              <span className="gradient-text">Achievements</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Recognition and accomplishments from hackathons, competitions, and leadership roles 
              that demonstrate my skills and dedication.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="section-padding bg-white dark:bg-dark-800">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <AchievementCard key={index} achievement={achievement} />
            ))}
          </div>
        </div>
      </section>

      {/* Statistics
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Achievement Statistics
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">6</div>
                <p className="text-gray-600 dark:text-gray-400">Achievements</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">4</div>
                <p className="text-gray-600 dark:text-gray-400">Categories</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">100+</div>
                <p className="text-gray-600 dark:text-gray-400">Hours of Effort</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">100%</div>
                <p className="text-gray-600 dark:text-gray-400">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Achievements; 