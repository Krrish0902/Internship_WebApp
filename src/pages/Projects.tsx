import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Project } from '../types';
import ai from '../assets/ai.jpg';
import chat from '../assets/chat.jpg';
import dashboard from '../assets/dashboard.jpg';
import ecom from '../assets/ecom.jpg';
import fitness from '../assets/fitness.jpg';
import task from '../assets/task.jpg';



const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  // Refs for scroll triggered animations
  const headerRef = useRef(null);
  const filtersRef = useRef(null);
  const projectsRef = useRef(null);
  
  // InView states
  const headerInView = useInView(headerRef, { once: false, amount: 0.3 });
  const filtersInView = useInView(filtersRef, { once: false, amount: 0.3 });
  const projectsInView = useInView(projectsRef, { once: false, amount: 0.2 });

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product listings, user authentication, cart functionality, and payment processing.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: ecom,
      link: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity application for managing tasks, projects, and team collaboration with real-time updates.",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      image: task,
      link: "#"
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description: "Centralized dashboard to monitor and analyze social media metrics across multiple platforms.",
      technologies: ["TypeScript", "Chart.js", "Next.js"],
      image: dashboard,
      link: "#"
    },
    {
      id: 4,
      title: "AI Content Generator",
      description: "An application that leverages AI to generate various types of content for marketing purposes.",
      technologies: ["Python", "TensorFlow", "React"],
      image: ai,
      link: "#"
    },
    {
      id: 5,
      title: "Fitness Tracker",
      description: "Mobile-first application for tracking workouts, nutrition, and fitness progress.",
      technologies: ["React Native", "Express", "MongoDB"],
      image: fitness,
      link: "#"
    },
    {
      id: 6,
      title: "Real-time Chat Application",
      description: "Secure messaging platform with real-time updates, file sharing, and user presence indicators.",
      technologies: ["Socket.io", "Node.js", "React"],
      image: chat,
      link: "#"
    }
  ];

  const filters = ['All', 'React', 'TypeScript', 'Node.js', 'MongoDB'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.technologies.includes(activeFilter));

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: -20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-secondary">Projects</span>
          </h1>
          <p className="text-gray-300 max-w-3xl">
            A showcase of my work across various domains. Each project represents a unique challenge and solution.
          </p>
        </motion.div>

        <motion.div 
          ref={filtersRef}
          className="flex flex-wrap gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={filtersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter 
                  ? 'bg-secondary text-black' 
                  : 'bg-black text-white border border-secondary/30 hover:border-secondary'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={filtersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        <div 
          ref={projectsRef} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => {
            return (
              <ProjectCard 
                key={project.id.toString()}
                project={project} 
                index={index}
                inView={projectsInView}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
  inView: boolean;
}

const ProjectCard = ({ project, index, inView }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
      className="project-card relative hover:border-secondary transition-all duration-300"
    >
      <div className="relative overflow-hidden group">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <a 
              href={project.link}
              target="_blank" 
              rel="noopener noreferrer"
              className="btn hover-gradient w-full text-center block text-white"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map(tech => (
            <span 
              key={`${project.id}-${tech}`} 
              className="text-xs bg-black border border-secondary/30 text-secondary px-2 py-1 rounded-full hover:bg-gradient-to-r hover:from-secondary/10 hover:to-black transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects; 