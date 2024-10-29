import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, Download, ExternalLink, ChevronRight, Code, Database, Briefcase, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeTab, setActiveTab] = useState('all');

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section').forEach((section) => {
      if (section.id) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  const fadeInClass = "transition-all duration-1000";
  const visibleClass = "opacity-100 translate-y-0";
  const hiddenClass = "opacity-0 translate-y-10";

  const skills = [
    {
      category: "Frontend",
      items: ["React", "HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX Principles"]
    },
    {
      category: "Backend",
      items: ["ASP.NET MVC", "Python", "Java", "RESTful APIs", "Entity Framework"]
    },
    {
      category: "Database",
      items: ["MS SQL Server", "Database Design", "Query Optimization", "Data Modeling"]
    },
    {
      category: "Tools & Methods",
      items: ["Git", "Visual Studio", "Agile", "Test-Driven Development", "CI/CD"]
    }
  ];

  const projects = [
    {
      title: "Drishti Application",
      description: "An innovative Android application designed to assist visually impaired individuals in currency management through advanced Deep Learning algorithms.",
      tech: ["Android", "Deep Learning", "Python", "TensorFlow"],
      duration: "May 2024 – Aug 2024",
      category: "mobile"
    },
    {
      title: "Bid Craft Mastery",
      description: "A data analytics platform analyzing IPL auction trends, providing insights into team strategies and player valuations using interactive visualizations.",
      tech: ["Python", "Data Analysis", "Visualization", "Web Development"],
      duration: "Jan 2024 - Mar 2024",
      category: "data"
    },
    {
      title: "Vote Wave",
      description: "Secure online voting platform with robust authentication and real-time result tracking. Features include voter verification and audit trails.",
      tech: ["PHP", "MySQL", "JavaScript", "Security"],
      duration: "Nov 2023 – Dec 2023",
      category: "web"
    },
    {
      title: "Drive Easy Rentals",
      description: "Modern vehicle rental platform with real-time availability tracking and automated booking system.",
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      duration: "Aug 2021 - Sep 2021",
      category: "web"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header/Hero Section with Parallax Effect */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-90" />
        <div className="relative z-10 text-white text-center transform transition-transform duration-1000 hover:scale-105">
          <h1 className="text-6xl font-bold mb-6">Prasanna M</h1>
          <p className="text-2xl mb-8">Full Stack Developer | MCA Student</p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="mailto:prasannagowdam24@gmail.com" 
              className="flex items-center gap-2 hover:text-blue-300 transition-colors"
            >
              <Mail size={24} /> Email
            </a>
            <a 
              href="tel:+918073635835" 
              className="flex items-center gap-2 hover:text-blue-300 transition-colors"
            >
              <Phone size={24} /> Call
            </a>
            <a 
              href="https://github.com/prasannagowdam24" 
              className="flex items-center gap-2 hover:text-blue-300 transition-colors"
            >
              <Github size={24} /> GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/prasanna-gowda-81b616237/" 
              className="flex items-center gap-2 hover:text-blue-300 transition-colors"
            >
              <Linkedin size={24} /> LinkedIn
            </a>
          </div>
          
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition-colors duration-300 flex items-center gap-2">
            <Download size={20} /> Download Resume
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* About Section */}
        <section id="about" className={`mb-16 ${fadeInClass} ${isVisible.about ? visibleClass : hiddenClass}`}>
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
                  <p className="text-gray-700 leading-relaxed">
                    I'm a passionate Full Stack Developer currently pursuing my Master's in Computer Applications. 
                    With a blend of academic excellence and practical experience, I specialize in creating 
                    innovative web solutions that combine robust functionality with intuitive user experiences.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">What I Do</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="text-blue-600" size={20} />
                      Full Stack Web Development
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="text-blue-600" size={20} />
                      Database Design & Optimization
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="text-blue-600" size={20} />
                      Mobile Application Development
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="text-blue-600" size={20} />
                      Data Analysis & Visualization
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Projects Section with Filtering */}
        <section id="projects" className={`mb-16 ${fadeInClass} ${isVisible.projects ? visibleClass : hiddenClass}`}>
          <h2 className="text-4xl font-bold mb-8 text-center">Featured Projects</h2>
          
          <div className="flex justify-center mb-8 space-x-4">
            {['all', 'web', 'mobile', 'data'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                  activeTab === tab 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects
              .filter(project => activeTab === 'all' || project.category === activeTab)
              .map((project, index) => (
                <Card 
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {project.title}
                      <ExternalLink size={20} className="text-blue-600" />
                    </CardTitle>
                    <CardDescription>{project.duration}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span 
                          key={i}
                          className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className={`mb-16 ${fadeInClass} ${isVisible.skills ? visibleClass : hiddenClass}`}>
          <h2 className="text-4xl font-bold mb-8 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillSet, index) => (
              <Card 
                key={index}
                className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {skillSet.category === "Frontend" && <Code className="text-blue-600" />}
                    {skillSet.category === "Backend" && <Database className="text-blue-600" />}
                    {skillSet.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillSet.items.map((skill, i) => (
                      <span 
                        key={i}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-blue-100 hover:text-blue-600 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className={`mb-16 ${fadeInClass} ${isVisible.education ? visibleClass : hiddenClass}`}>
          <h2 className="text-4xl font-bold mb-8 text-center">Education</h2>
          <div className="grid gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="text-blue-600" />
                  Master of Computer Application
                </CardTitle>
                <CardDescription>Maharaja Institute of Technology Mysore</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-lg">CGPA: 9.4</span>
                  <span className="text-gray-600">Dec 2022 to Sep 2024</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <a href="mailto:prasannagowdam24@gmail.com" className="hover:text-blue-200">
              <Mail size={24} />
            </a>
            <a href="https://github.com/prasannagowdam24" className="hover:text-blue-200">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/prasanna-gowda-81b616237/" className="hover:text-blue-200">
              <Linkedin size={24} />
            </a>
          </div>
          <p>© {new Date().getFullYear()} Prasanna M. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;

Version 3 of 3