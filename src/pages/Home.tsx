import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimateOnScroll from '../components/AnimateOnScroll.tsx';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <div className="container py-20 mt-16">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-4"
          >
            <span className="text-secondary font-techno">Hello, I'm</span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="block">Full Stack</span> 
            <span className="block">Developer<span className="text-secondary">.</span></span>
          </motion.h1>
          
          <motion.p 
            className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            I build exceptional digital experiences with modern technologies.
            Specialized in creating sleek, user-friendly interfaces and robust backend systems.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Link to="/projects">
              <motion.button 
                className="btn hover-gradient text-white gradient-border"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button 
                className="btn border border-secondary text-secondary hover:bg-secondary hover:text-black transition-all duration-300 gradient-border"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <div className="container pb-20">
        <AnimateOnScroll animation="fadeInUp" threshold={0.2}>
          <h2 className="text-2xl text-secondary font-techno mb-8">Tech Stack</h2>
        </AnimateOnScroll>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {['React', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind', 'AWS'].map((tech, index) => (
            <AnimateOnScroll 
              key={tech} 
              animation="fadeInUp" 
              delay={index * 0.1} 
              threshold={0.1}
            >
              <motion.div
                className="flex items-center justify-center h-20 bg-black border border-secondary/30 rounded-lg hover-gradient relative"
                whileHover={{ scale: 1.05, borderColor: '#02f78d' }}
              >
                <span className="font-techno text-white">{tech}</span>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home; 