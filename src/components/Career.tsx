import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Career = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('courses');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const courses = [
    {
      id: 1,
      title: "Web Development Bootcamp",
      category: "Web Development",
      level: "Beginner",
      description: "Learn modern web development with React, Node.js, and MongoDB. Build real-world projects and get certified.",
      technologies: ["React", "Node.js", "MongoDB", "JavaScript", "HTML/CSS"],
      originalPrice: 49999,
      finalPrice: 29999,
      discountCode: "WEB40",
      duration: "8 weeks",
      projects: 5,
      features: [
        "Live sessions",
        "Project-based learning",
        "Certificate on completion",
        "24/7 support",
        "Job placement assistance"
      ]
    },
    {
      id: 2,
      title: "AI & Machine Learning",
      category: "AI/ML",
      level: "Intermediate",
      description: "Master AI and ML fundamentals with Python, TensorFlow, and real-world applications.",
      technologies: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "NumPy"],
      originalPrice: 59999,
      finalPrice: 39999,
      discountCode: "AI33",
      duration: "12 weeks",
      projects: 6,
      features: [
        "Hands-on AI projects",
        "Industry expert mentors",
        "Certificate on completion",
        "Portfolio building",
        "Career guidance"
      ]
    },
    {
      id: 3,
      title: "Mobile App Development",
      category: "Mobile Development",
      level: "Intermediate",
      description: "Build iOS and Android apps with React Native and Flutter. Launch your app on app stores.",
      technologies: ["React Native", "Flutter", "Dart", "Firebase", "Redux"],
      originalPrice: 54999,
      finalPrice: 34999,
      discountCode: "MOBILE36",
      duration: "10 weeks",
      projects: 4,
      features: [
        "Cross-platform development",
        "App store deployment",
        "Certificate on completion",
        "UI/UX design",
        "Monetization strategies"
      ]
    },
    {
      id: 4,
      title: "Data Science & Analytics",
      category: "Data Science",
      level: "Beginner",
      description: "Learn data analysis, visualization, and machine learning with Python and popular libraries.",
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
      originalPrice: 44999,
      finalPrice: 27999,
      discountCode: "DATA38",
      duration: "9 weeks",
      projects: 5,
      features: [
        "Real dataset projects",
        "Statistical analysis",
        "Certificate on completion",
        "Industry tools",
        "Career support"
      ]
    },
    {
      id: 5,
      title: "DevOps & Cloud Computing",
      category: "DevOps",
      level: "Advanced",
      description: "Master DevOps practices, cloud platforms, and automation tools for modern software deployment.",
      technologies: ["Docker", "Kubernetes", "AWS", "Jenkins", "Terraform"],
      originalPrice: 64999,
      finalPrice: 44999,
      discountCode: "DEVOPS31",
      duration: "14 weeks",
      projects: 7,
      features: [
        "Cloud deployment",
        "CI/CD pipelines",
        "Certificate on completion",
        "Infrastructure as code",
        "Industry mentorship"
      ]
    },
    {
      id: 6,
      title: "Cybersecurity Fundamentals",
      category: "Cybersecurity",
      level: "Beginner",
      description: "Learn ethical hacking, network security, and cybersecurity best practices.",
      technologies: ["Kali Linux", "Wireshark", "Metasploit", "Python", "Nmap"],
      originalPrice: 52999,
      finalPrice: 32999,
      discountCode: "CYBER38",
      duration: "11 weeks",
      projects: 6,
      features: [
        "Hands-on labs",
        "Ethical hacking",
        "Certificate on completion",
        "Security tools",
        "Career guidance"
      ]
    }
  ];

  const trainingPrograms = [
    {
      id: 1,
      title: "Web Development Bootcamp",
      duration: "8 weeks",
      description: "Learn modern web development with React, Node.js, and MongoDB. Build real-world projects and get certified.",
      features: ["Live sessions", "Project-based learning", "Certificate on completion", "24/7 support", "Job placement assistance"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop&crop=center"
    },
    {
      id: 2,
      title: "AI & Machine Learning",
      duration: "12 weeks",
      description: "Master AI and ML fundamentals with Python, TensorFlow, and real-world applications.",
      features: ["Hands-on AI projects", "Industry expert mentors", "Certificate on completion", "Portfolio building", "Career guidance"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "Mobile App Development",
      duration: "10 weeks",
      description: "Build iOS and Android apps with React Native and Flutter. Launch your app on app stores.",
      features: ["Cross-platform development", "App store deployment", "Certificate on completion", "UI/UX design", "Monetization strategies"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&crop=center"
    }
  ];

  const internshipPrograms = [
    {
      id: 1,
      title: "Software Development Internship",
      duration: "3-6 months",
      description: "Work on real client projects and gain industry experience. Get mentored by senior developers.",
      benefits: ["Professional certificate", "Letter of recommendation", "Potential job offer", "Networking opportunities"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center"
    },
    {
      id: 2,
      title: "AI Research Internship",
      duration: "4-8 months",
      description: "Contribute to cutting-edge AI research projects and publish papers.",
      benefits: ["Research experience", "Publication opportunities", "Professional certificate", "Academic credit", "Conference attendance"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "UI/UX Design Internship",
      duration: "3-6 months",
      description: "Design user interfaces and experiences for web and mobile applications.",
      benefits: ["Design portfolio", "Professional certificate", "Creative freedom", "Client interaction", "Design tools access"],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&crop=center"
    }
  ];

  const tabs = [
    { id: 'courses', label: 'Our Courses', icon: '📚' },
    { id: 'training', label: 'Training Programs', icon: '🎓' },
    { id: 'internship', label: 'Internship Programs', icon: '💼' },
    { id: 'projects', label: 'Project Ideas', icon: '💡' }
  ];

  const categories = ['all', 'Web Development', 'AI/ML', 'Mobile Development', 'Data Science', 'DevOps', 'Cybersecurity'];
  const levels = ['all', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredCourses = courses.filter(course => {
    const categoryMatch = selectedCategory === 'all' || course.category === selectedCategory;
    const levelMatch = selectedLevel === 'all' || course.level === selectedLevel;
    return categoryMatch && levelMatch;
  });

  const handleEnrollNow = (courseId) => {
    navigate(`/student-registration/${courseId}`);
  };

  const projectIdeas = [
    {
      id: 1,
      title: "E-Learning Platform",
      domain: "Education Technology",
      difficulty: "Advanced",
      description: "Build a comprehensive e-learning platform with video streaming, quizzes, and progress tracking.",
      problem: "Students need affordable, accessible learning platforms with interactive features.",
      certificate: "Full-stack Development Certificate",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop&crop=center"
    },
    {
      id: 2,
      title: "Healthcare Management System",
      domain: "Healthcare",
      difficulty: "Intermediate",
      description: "Create a system for managing patient records, appointments, and medical inventory.",
      problem: "Healthcare facilities need efficient digital systems for patient management.",
      certificate: "Healthcare Technology Certificate",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "Smart City IoT Dashboard",
      domain: "Internet of Things",
      difficulty: "Advanced",
      description: "Develop a dashboard for monitoring city infrastructure using IoT sensors.",
      problem: "Cities need real-time monitoring systems for infrastructure management.",
      certificate: "IoT Development Certificate",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&crop=center"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
            <span className="text-gray-400 text-sm">• Career Opportunities</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Launch Your Career
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join our comprehensive programs designed to accelerate your career in technology. 
            <span className="text-green-400 font-semibold"> Starting Soon!</span>
          </p>
        </div>

        {/* Course Platform Banner */}
        <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl p-8 mb-16 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse mr-3"></div>
            <h2 className="text-2xl font-bold text-blue-400">Training Programs Now Available!</h2>
          </div>
          <p className="text-gray-300 text-lg mb-6">
            Start your learning journey with our comprehensive courses. From beginner to advanced levels, 
            master frontend, full-stack, and mobile app development with practical projects and certifications.
          </p>
          <button
            onClick={() => navigate('/courses')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Browse Courses →
          </button>
        </div>

        {/* Coming Soon Banner */}
        <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-2xl p-8 mb-16 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-3"></div>
            <h2 className="text-2xl font-bold text-green-400">Internship Programs Starting Soon!</h2>
          </div>
          <p className="text-gray-300 text-lg">
            Our comprehensive internship programs will be launching in the next few weeks. 
            Get ready to gain hands-on experience and professional certifications.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-900 rounded-full p-2 flex space-x-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-white text-black font-semibold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        {activeTab === 'courses' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Courses</h2>
              <p className="text-gray-300 text-lg">Master in-demand skills with our comprehensive courses</p>
            </div>
            
            {/* Filters */}
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <div className="flex flex-wrap gap-2">
                <span className="text-gray-400 text-sm font-medium">Category:</span>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {category === 'all' ? 'All Categories' : category}
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-gray-400 text-sm font-medium">Level:</span>
                {levels.map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                      selectedLevel === level
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {level === 'all' ? 'All Levels' : level}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <div key={course.id} className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
                        <div className="flex gap-2 mb-2">
                          <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full">{course.category}</span>
                          <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">{course.level}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 text-sm">{course.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-blue-400 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-1">
                        {course.technologies.map((tech, index) => (
                          <span key={index} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <div className="text-2xl font-bold text-green-400">₹{course.finalPrice.toLocaleString()}</div>
                        <div className="text-sm text-gray-500 line-through">₹{course.originalPrice.toLocaleString()}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">{course.duration}</div>
                        <div className="text-sm text-gray-400">{course.projects} Projects</div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-xs bg-yellow-500 text-black px-2 py-1 rounded inline-block mb-2">
                        Use code: {course.discountCode}
                      </div>
                    </div>
                    
                    <ul className="space-y-1 mb-6">
                      {course.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center text-xs text-gray-400">
                          <svg className="w-3 h-3 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <button 
                      disabled
                      className="w-full bg-gray-500 cursor-not-allowed text-white py-3 rounded-lg font-semibold transition-all duration-300"
                    >
                      Coming Soon
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'training' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Affordable Training Programs</h2>
              <p className="text-gray-300 text-lg">Learn from industry experts at student-friendly prices</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trainingPrograms.map((program) => (
                <div key={program.id} className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-green-500/50 transition-all duration-300 hover:scale-105">
                  <div className="h-48 overflow-hidden">
                    <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                                         <div className="mb-4">
                       <h3 className="text-xl font-bold text-white mb-2">{program.title}</h3>
                       <div className="text-sm text-gray-400">{program.duration}</div>
                     </div>
                    <p className="text-gray-300 mb-4">{program.description}</p>
                    <ul className="space-y-2 mb-6">
                      {program.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-400">
                          <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="w-full bg-green-500 text-black py-3 rounded-lg font-semibold hover:bg-green-400 transition-colors">
                      Coming Soon
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'internship' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Paid Internship Programs</h2>
              <p className="text-gray-300 text-lg">Gain real-world experience with stipend and certificates</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {internshipPrograms.map((program) => (
                <div key={program.id} className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                  <div className="h-48 overflow-hidden">
                    <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-2">{program.title}</h3>
                      <div className="text-sm text-gray-400">{program.duration}</div>
                    </div>
                    <p className="text-gray-300 mb-4">{program.description}</p>
                    <ul className="space-y-2 mb-6">
                      {program.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-400">
                          <svg className="w-4 h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <button className="w-full bg-blue-500 text-black py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors">
                      Coming Soon
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Project Ideas & Problem Statements</h2>
              <p className="text-gray-300 text-lg">Build real applications and earn certificates upon completion</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectIdeas.map((project) => (
                <div key={project.id} className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                  <div className="h-48 overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <div className="text-right">
                        <div className="text-sm bg-purple-500 text-white px-3 py-1 rounded-full">{project.difficulty}</div>
                        <div className="text-xs text-gray-400 mt-1">{project.domain}</div>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-purple-400 mb-2">Problem Statement:</h4>
                      <p className="text-sm text-gray-400">{project.problem}</p>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-green-400 mb-2">Certificate:</h4>
                      <p className="text-sm text-gray-400">{project.certificate}</p>
                    </div>
                    <button className="w-full bg-purple-500 text-white py-3 rounded-lg font-semibold hover:bg-purple-400 transition-colors">
                      Coming Soon
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-20 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Career?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join our programs and gain the skills, experience, and certifications you need to succeed in the tech industry. 
            Our affordable programs are designed specifically for students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-green-400 transition-colors">
              Get Notified When Programs Start
            </button>
            <button className="bg-transparent border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
