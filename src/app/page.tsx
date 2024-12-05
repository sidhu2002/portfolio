'use client';

import Image from 'next/image';
import { Github, Linkedin, Mail, ExternalLink, Send, Download, ViewIcon, View, Grid2X2, Grid3X3, GridIcon, LayoutGrid } from 'lucide-react';
import ParticlesComponent from './components/Particles';
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';
import {
  SiJavascript,
  SiTypescript,
  SiDart,
  SiOpenjdk,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiFlutter,
  SiAndroidstudio,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiAwslambda,
  SiGit,
  SiDocker,
  SiAmazondynamodb
} from 'react-icons/si';
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';

// Initialize EmailJS
emailjs.init({
  publicKey: 'hzZc8uRBtLlnW2aQ-'
});

const projects = [
  {
    title: "CuisineHub",
    description: "A comprehensive full-stack platform where users can register, login, search recipes, view detailed recipe information, and bookmark their favorites.",
    tech: ['React', 'Express', 'Node.js', 'MongoDB', 'JWT'],
    image: "/recipe.png",
    github: "https://github.com/sidhu2002",
    demo: "#"
  },
  {
    title: "ShapeSync",
    description: "A Workout Planner application with MERN stack for user registration, custom workout plans, and meal tracking.",
    tech: ['React', 'Express', 'MongoDB', 'Node.js'],
    image: "/Screenshot 2024-12-05 191500.png",
    github: "https://github.com/sidhu2002",
    demo: "#"
  },
  {
    title: "BlogApp",
    description: "A feature-rich blogging app using the MERN stack with content management and CRUD functionality.",
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    image: "/Screenshot 2024-12-05 191706.png",
    github: "https://github.com/sidhu2002",
    demo: "#"
  }
];

const iconComponents = {
  SiJavascript,
  SiTypescript,
  SiDart,
  SiOpenjdk,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiFlutter,
  SiAndroidstudio,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiAwslambda,
  SiGit,
  SiDocker,
  SiAmazondynamodb
};

const skillsData = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: "SiJavascript" },
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "Dart", icon: "SiDart" },
      { name: "Java", icon: "SiOpenjdk" }
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "SiReact" },
      { name: "Next.js", icon: "SiNextdotjs" },
      { name: "HTML5", icon: "SiHtml5" },
      { name: "Tailwind", icon: "SiTailwindcss" },
      { name: "Redux", icon: "SiRedux" }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "SiNodedotjs" },
      { name: "Express", icon: "SiExpress" },
      { name: "AWS HealthLake", icon: "SiAwslambda" },
      { name: "DynamoDB", icon: "SiAmazondynamodb" }
    ]
  },
  {
    title: "Mobile",
    skills: [
      { name: "React Native", icon: "SiReact" },
      { name: "Flutter", icon: "SiFlutter" },
      { name: "Android Studio", icon: "SiAndroidstudio" }
    ]
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: "SiMongodb" },
      { name: "PostgreSQL", icon: "SiPostgresql" },
      { name: "MySQL", icon: "SiMysql" }
    ]
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git", icon: "SiGit" },
      { name: "Docker", icon: "SiDocker" }
    ]
  }
];

// Add these animation variants before the Home component
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function Home() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [gridView, setGridView] = useState(2);
  const [currentGridPage, setCurrentGridPage] = useState(0);
  const [slideDirection, setSlideDirection] = useState(0);
  const projectsPerPage = 4;
  const totalGridPages = Math.ceil(projects.length / projectsPerPage);

  const paginate = (newDirection: number) => {
    const newPage = page + newDirection;
    if (newPage < 0) {
      setPage([projects.length - 1, newDirection]);
    } else if (newPage >= projects.length) {
      setPage([0, newDirection]);
    } else {
      setPage([newPage, newDirection]);
    }
  };

  useEffect(() => {
    if (gridView !== 1) return;
    
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [gridView, page]);

  const getGridProjects = () => {
    const start = currentGridPage * projectsPerPage;
    return projects.slice(start, start + projectsPerPage);
  };

  const nextGridPage = () => {
    setSlideDirection(1);
    setCurrentGridPage((prev) => 
      prev === totalGridPages - 1 ? 0 : prev + 1
    );
  };

  const prevGridPage = () => {
    setSlideDirection(-1);
    setCurrentGridPage((prev) => 
      prev === 0 ? totalGridPages - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-dark-300 relative overflow-hidden">
        <ParticlesComponent />
        <div className="section-container relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <h2 className="text-2xl text-primary mb-4">Hi There! 👋</h2>
              <h1 className="heading text-4xl md:text-6xl font-bold mb-4 whitespace-nowrap">
                I&apos;m K Siddeshwar Reddy
              </h1>
              <div className="text-xl md:text-2xl text-primary mb-6 h-[60px]">
                <Typewriter
                  options={{
                    strings: [
                      'Full Stack Developer',
                      'Mobile App Developer',
                      'MERN Stack Developer',
                      'AI Enthusiast'
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <div className="flex flex-wrap gap-4 mb-8">
                <a 
                  href="mailto:k.siddeshwarreddy@gmail.com" 
                  className="px-6 py-3 bg-primary hover:bg-primary/90 text-dark-300 rounded-full transition-all flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Contact Me
                </a>
                <a 
                  href="/K-SIDDESHWAR-REDDY-FlowCV-Resume-20241104 (1).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-primary text-primary hover:bg-primary/10 rounded-full transition-all flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
                <a 
                  href="#projects" 
                  className="px-6 py-3 border border-primary text-primary hover:bg-primary/10 rounded-full transition-all"
                >
                  View Projects
                </a>
              </div>
              <div className="flex gap-6">
                <a
                  href="https://github.com/sidhu2002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-primary transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/siddeshwar-reddy-6310a624b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-primary transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <Tilt>
                <div className="relative w-[300px] h-[300px] mx-auto rounded-full overflow-hidden border-4 border-primary/20">
                  <Image
                    src="/1721486773846.jpg"
                    alt="K Siddeshwar Reddy"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </Tilt>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-dark-100 py-20">
        <div className="section-container">
          <h2 className="heading mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-secondary/80">
              <p>
                I am a passionate Full Stack Developer with expertise in building scalable web and mobile applications.
                My journey in software development has equipped me with a strong foundation in modern technologies and best practices.
              </p>
              <p>
                I specialize in the MERN stack and have experience with cloud services like AWS. I have experience in
                healthcare technology and building user-centric applications that make a difference.
              </p>
              <p>
                When I'm not coding, I enjoy learning new technologies and contributing to open-source projects.
              </p>
              <div className="pt-4">
                <a 
                  href="/K-SIDDESHWAR-REDDY-FlowCV-Resume-20241104 (1).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-dark-300 rounded-full transition-all"
                >
                  <View className="w-5 h-5" />
                  View Resume
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="card">
                <h3 className="text-3xl font-bold text-primary mb-2">1</h3>
                <p className="text-secondary">Year of Experience</p>
              </div>
              <div className="card">
                <h3 className="text-3xl font-bold text-primary mb-2">10+</h3>
                <p className="text-secondary">Projects Completed</p>
              </div>
              <div className="card">
                <h3 className="text-3xl font-bold text-primary mb-2">5+</h3>
                <p className="text-secondary">Happy Clients</p>
              </div>
              <div className="card">
                <h3 className="text-3xl font-bold text-primary mb-2">10+</h3>
                <p className="text-secondary">Technologies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-dark-300 py-20">
        <div className="section-container">
          <h2 className="heading mb-12">Experience</h2>
          <div className="space-y-8">
            <div className="card group bg-dark-200">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors">Junior Developer</h3>
                  <p className="text-primary">VECTORSOFT</p>
                </div>
                <span className="text-primary">Aug 2024 - present</span>
              </div>
              <ul className="list-disc list-inside text-secondary/80 space-y-2">
                <li>Developing scalable Healthcare Mobile/web applications with AWS and latest web technologies using FHIR format data.</li>
                <li>Experience with cloud-based databases and healthcare data integration.</li>
                <li>Developed Mobile and Desktop apps with AI and Zoom.us integration.</li>
              </ul>
            </div>

            <div className="card group bg-dark">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors">Fullstack Intern</h3>
                  <p className="text-primary">TRIBUILDER</p>
                </div>
                <span className="text-primary">May 2024 - July 2024</span>
              </div>
              <ul className="list-disc list-inside text-secondary/80 space-y-2">
                <li>Developed a React video campaign app with carousels, popups, and responsive design.</li>
                <li>Implemented Cross-Origin Resource Sharing for secure data sharing.</li>
                <li>Seamlessly integrated APIs for integration and client requirements.</li>
              </ul>
            </div>

            <div className="card group bg-dark-200">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors">Machine Learning Intern</h3>
                  <p className="text-primary">GCE Research Center</p>
                </div>
                <span className="text-primary">Oct 2022 - Jan 2023</span>
              </div>
              <ul className="list-disc list-inside text-secondary/80 space-y-2">
                <li>Worked with the Research team to develop a cutting-edge 01/2023 image segmentation model.</li>
                <li>Model Training: Utilized Google Colab for efficient model training and experimentation.</li>
                <li>Data Processing: Employed NumPy and pandas for data preprocessing and analysis.</li>
                <li>Dataset Management: Used Roboflow for dataset augmentation and management, enhancing the model's performance.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-dark-100 py-20">
        <div className="section-container">
          <h2 className="heading mb-12">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsData.map((category) => (
              <Tilt key={category.title}>
                <SkillCard {...category} />
              </Tilt>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-dark-300 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-300 via-dark-200/50 to-dark-300"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
        
        <div className="section-container relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading mb-4">Projects</h2>
            <p className="text-xl text-primary/80 max-w-2xl mx-auto mb-8">
              Explore my latest works and side projects
            </p>
            
            {/* View Filter Buttons */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <button
                onClick={() => setGridView(1)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${
                  gridView === 1 
                    ? 'bg-primary text-dark-300' 
                    : 'bg-dark-200 text-secondary hover:bg-dark-100'
                }`}
                title="Single View"
              >
                <GridIcon className="w-5 h-5" />
                <span>Single View</span>
              </button>
              <button
                onClick={() => setGridView(2)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${
                  gridView === 2 
                    ? 'bg-primary text-dark-300' 
                    : 'bg-dark-200 text-secondary hover:bg-dark-100'
                }`}
                title="Grid View"
              >
                <Grid2X2 className="w-5 h-5" />
                <span>Grid View</span>
              </button>
            </div>
          </div>
          
          {gridView === 1 ? (
            <div className="relative h-[600px] overflow-hidden">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={page}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);

                    if (swipe < -swipeConfidenceThreshold) {
                      paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                      paginate(-1);
                    }
                  }}
                  className="absolute w-full"
                >
                  <Tilt
                    tiltMaxAngleX={5}
                    tiltMaxAngleY={5}
                    scale={1}
                    transitionSpeed={2000}
                    className="h-full"
                  >
                    <ProjectCard {...projects[page]} />
                  </Tilt>
                </motion.div>
              </AnimatePresence>

              {/* Carousel Navigation */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => paginate(-1)}
                  className="p-3 rounded-full bg-dark-200/80 text-secondary hover:bg-dark-100 transition-all duration-300 backdrop-blur-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </motion.button>

                <div className="flex gap-2">
                  {projects.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setPage([index, page > index ? -1 : 1])}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        page === index 
                          ? 'bg-primary w-6' 
                          : 'bg-dark-200/80 hover:bg-dark-100'
                      }`}
                    />
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => paginate(1)}
                  className="p-3 rounded-full bg-dark-200/80 text-secondary hover:bg-dark-100 transition-all duration-300 backdrop-blur-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </motion.button>
              </div>

              {/* Progress Bar */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear", repeat: Infinity }}
              />
            </div>
          ) : (
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentGridPage}
                  initial={{ opacity: 0, x: slideDirection > 0 ? 1000 : -1000 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: slideDirection > 0 ? -1000 : 1000 }}
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className="grid grid-cols-2 lg:grid-cols-4 gap-6"
                >
                  {getGridProjects().map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Tilt
                        tiltMaxAngleX={5}
                        tiltMaxAngleY={5}
                        scale={1}
                        transitionSpeed={2000}
                        className="h-full"
                      >
                        <ProjectCard {...project} />
                      </Tilt>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Grid Navigation */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    setSlideDirection(-1);
                    prevGridPage();
                  }}
                  className="p-3 rounded-full bg-dark-200/80 text-secondary hover:bg-dark-100 transition-all duration-300 backdrop-blur-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </motion.button>

                <div className="flex gap-2">
                  {Array.from({ length: totalGridPages }).map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => {
                        setSlideDirection(index > currentGridPage ? 1 : -1);
                        setCurrentGridPage(index);
                      }}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentGridPage === index 
                          ? 'bg-primary w-6' 
                          : 'bg-dark-200/80 hover:bg-dark-100'
                      }`}
                    />
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    setSlideDirection(1);
                    nextGridPage();
                  }}
                  className="p-3 rounded-full bg-dark-200/80 text-secondary hover:bg-dark-100 transition-all duration-300 backdrop-blur-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </motion.button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-dark-100 py-20">
        <div className="section-container">
          <h2 className="heading mb-8 text-center">Get In Touch</h2>
          <p className="text-xl text-primary mb-12 text-center max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary">Email</h3>
                  <a href="mailto:k.siddeshwarreddy@gmail.com" className="text-primary hover:text-primary/80 transition-colors">
                    k.siddeshwarreddy@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary">LinkedIn</h3>
                  <a 
                    href="https://www.linkedin.com/in/siddeshwar-reddy-6310a624b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    Connect with me
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Github className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary">GitHub</h3>
                  <a 
                    href="https://github.com/sidhu2002"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    Check out my repos
                  </a>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

interface Skill {
  name: string;
  icon: string;
}

interface SkillCardProps {
  title: string;
  skills: Skill[];
}

function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <div className="card group">
      <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors mb-6">{title}</h3>
      <div className="grid grid-cols-3 gap-4">
        {skills.map((skill) => {
          const Icon = iconComponents[skill.icon as keyof typeof iconComponents];
          return (
            <div
              key={skill.name}
              className="flex flex-col items-center gap-2 p-3 rounded-lg bg-dark-200 hover:bg-dark-300 transition-all duration-300 group/skill"
            >
              <Icon className="w-8 h-8 text-primary group-hover/skill:scale-110 transition-transform duration-300" />
              <span className="text-xs text-secondary/80 group-hover/skill:text-primary transition-colors text-center">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  demo: string;
}

function ProjectCard({
  title,
  description,
  tech,
  image,
  github,
  demo
}: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-dark-200 p-1">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-dark-300/90 to-transparent"></div>
      
      {/* Glowing border effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/50 to-secondary/50 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 group-hover:duration-200"></div>
      
      <div className="relative bg-dark-200 rounded-lg p-4 h-full flex flex-col transition-transform duration-500 group-hover:scale-[0.99]">
        <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        
        <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors duration-300 mb-2">
          {title}
        </h3>
        
        <p className="text-secondary/70 group-hover:text-secondary/90 transition-colors duration-300 mb-4 flex-grow">
          {description}
        </p>
        
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {tech.map((item) => (
              <span
                key={item}
                className="px-3 py-1 bg-dark-300/50 text-primary rounded-full text-sm border border-primary/20 
                         backdrop-blur-sm transition-all duration-300
                         hover:border-primary/50 hover:bg-primary/10"
              >
                {item}
              </span>
            ))}
          </div>
          
          <div className="flex gap-4 pt-2">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-secondary/80 hover:text-primary transition-colors duration-300
                       px-4 py-2 rounded-lg bg-dark-300/50 hover:bg-dark-300 border border-primary/10 hover:border-primary/30"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm">Code</span>
            </a>
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-secondary/80 hover:text-primary transition-colors duration-300
                       px-4 py-2 rounded-lg bg-dark-300/50 hover:bg-dark-300 border border-primary/10 hover:border-primary/30"
            >
              <ExternalLink className="w-5 h-5" />
              <span className="text-sm">Demo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await emailjs.sendForm(
        'service_1unyvzl',
        'template_oimkwik',
        formRef.current,
        'hzZc8uRBtLlnW2aQ-'
      );
      
      console.log('Success:', result.text);
      setSubmitStatus('success');
      setFormData({ from_name: '', from_email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 w-full">
      <div>
        <label htmlFor="from_name" className="block text-sm font-medium text-secondary mb-1">
          Name
        </label>
        <input
          type="text"
          id="from_name"
          name="from_name"
          required
          value={formData.from_name}
          onChange={(e) => setFormData(prev => ({ ...prev, from_name: e.target.value }))}
          className="w-full px-4 py-2 bg-dark-200 border border-dark-100 focus:border-primary rounded-lg outline-none transition-colors text-secondary"
          placeholder="John Doe"
        />
      </div>
      <div>
        <label htmlFor="from_email" className="block text-sm font-medium text-secondary mb-1">
          Email
        </label>
        <input
          type="email"
          id="from_email"
          name="from_email"
          required
          value={formData.from_email}
          onChange={(e) => setFormData(prev => ({ ...prev, from_email: e.target.value }))}
          className="w-full px-4 py-2 bg-dark-200 border border-dark-100 focus:border-primary rounded-lg outline-none transition-colors text-secondary"
          placeholder="john@example.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-secondary mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
          className="w-full px-4 py-2 bg-dark-200 border border-dark-100 focus:border-primary rounded-lg outline-none transition-colors text-secondary resize-none"
          placeholder="Your message here..."
        />
      </div>
      <input type="hidden" name="to_name" value="K Siddeshwar Reddy" />
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-3 bg-primary text-dark-300 rounded-full hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          'Sending...'
        ) : (
          <>
            Send Message
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
      {submitStatus === 'success' && (
        <p className="text-green-500 text-sm text-center">Message sent successfully!</p>
      )}
      {submitStatus === 'error' && (
        <p className="text-red-500 text-sm text-center">Failed to send message. Please try again.</p>
      )}
    </form>
  );
}
