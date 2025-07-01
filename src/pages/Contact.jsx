import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "vpurushothaman46@gmail.com",
      link: "mailto:vpurushothaman46@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9677257928",
      link: "tel:+919677257928"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+91 9677257928",
      link: "https://wa.me/919677257928"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Chennai, Tamil Nadu, India",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/PURUSHOTHAMAN-V",
      icon: Github,
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      icon: Linkedin,
      color: "hover:text-blue-600"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/yourusername",
      icon: Twitter,
      color: "hover:text-blue-400"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-900 dark:to-dark-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              I'm always open to discussing new opportunities, exciting projects, 
              or just having a chat about technology and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-white dark:bg-dark-800">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information Only */}
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h2>
              <p className="mb-4 text-gray-600 dark:text-gray-400">Click an item below to contact me directly via email, phone, or WhatsApp.</p>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {info.title}
                      </h3>
                      <a
                        href={info.link}
                        className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links and About */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Follow Me
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg bg-gray-100 dark:bg-dark-700 transition-all duration-200 ${link.color}`}
                      aria-label={link.name}
                    >
                      <link.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Let's Work Together
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  I'm currently available for freelance work, internships, and full-time opportunities. 
                  Whether you have a project in mind or just want to chat about technology, 
                  I'd love to hear from you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 