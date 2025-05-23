import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import profile from '../assets/Profile_pic.jpg';

const About = () => {
  const skills = [
    { category: "Frontend", items: ["HTML/CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Firebase", "Figma", "Jest"] }
  ];

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      responsibilities: [
        "Lead frontend development for e-commerce platform serving over 100k users",
        "Implemented advanced animations and interactions using Framer Motion",
        "Reduced load times by 40% through code optimization and lazy loading"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd",
      period: "2018 - 2021",
      responsibilities: [
        "Developed and maintained multiple client web applications using React and Node.js",
        "Built RESTful APIs and integrated third-party services",
        "Implemented CI/CD pipelines to streamline deployment processes"
      ]
    },
    {
      title: "Junior Web Developer",
      company: "WebCreate Agency",
      period: "2016 - 2018",
      responsibilities: [
        "Created responsive websites for various clients using HTML, CSS, and JavaScript",
        "Collaborated with designers to implement UI/UX best practices",
        "Managed CMS-based websites and client relationships"
      ]
    }
  ];

  // Refs for scroll triggered animations
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);

  // InView states
  const aboutInView = useInView(aboutRef, { once: false, amount: 0.3 });
  const skillsInView = useInView(skillsRef, { once: false, amount: 0.3 });
  const experienceInView = useInView(experienceRef, { once: false, amount: 0.3 });
  const educationInView = useInView(educationRef, { once: false, amount: 0.3 });

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container">
        <motion.div
          ref={aboutRef}
          initial={{ opacity: 0, y: -20 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-secondary">Me</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-2">
              <motion.p 
                className="text-gray-300 mb-6 text-lg"
                initial={{ opacity: 0 }}
                animate={aboutInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                I'm a passionate full stack developer with over 5 years of experience building modern web applications. 
                My journey in tech started with a deep curiosity about how websites work, which led me to pursue 
                a degree in Computer Science.
              </motion.p>
              
              <motion.p 
                className="text-gray-300 mb-6 text-lg"
                initial={{ opacity: 0 }}
                animate={aboutInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                I specialize in building responsive, accessible, and performant web applications using 
                cutting-edge technologies. My approach combines technical expertise with a keen eye for design 
                and user experience.
              </motion.p>
              
              <motion.p 
                className="text-gray-300 text-lg"
                initial={{ opacity: 0 }}
                animate={aboutInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
                or enjoying outdoor activities. I believe in continuous learning and staying updated with 
                the latest industry trends.
              </motion.p>

              <motion.p 
                className="text-gray-300 mb-6 text-lg"
                initial={{ opacity: 0 }}
                animate={aboutInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Over the years, I've had the opportunity to work on a diverse range of projects—from scalable 
                SaaS platforms to intuitive e-commerce sites. This experience has sharpened my ability to adapt quickly, 
                communicate effectively with cross-functional teams, and deliver solutions that are both technically
                robust and aligned with business goals.
              </motion.p>

              <motion.p 
                className="text-gray-300 mb-6 text-lg"
                initial={{ opacity: 0 }}
                animate={aboutInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                I'm particularly passionate about mentoring and sharing knowledge with the developer community. 
                Whether it's through writing technical blogs, speaking at local meetups, or reviewing pull requests 
                in open source repositories, I find joy in helping others grow while continuing to expand my own perspective.
              </motion.p>
            </div>
            
            <motion.div 
              className="relative rounded-2xl overflow-hidden border border-secondary/30 h-[350px] md:h-full"
              initial={{ opacity: 0, x: 20 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <img 
                src= {profile} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-4">
                <div className="font-techno text-secondary">Full Stack Developer</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Skills Section */}
        <motion.div
          ref={skillsRef}
          initial={{ opacity: 0, y: 30 }}
          animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">
            My <span className="text-secondary">Skills</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div 
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                className="bg-black border border-secondary/20 rounded-xl p-6 hover:border-secondary transition-all duration-300"
              >
                <h3 className="text-xl font-techno text-secondary mb-4">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="flex items-center">
                      <span className="mr-2 text-secondary">▹</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Experience Section */}
        <motion.div
          ref={experienceRef}
          initial={{ opacity: 0, y: 30 }}
          animate={experienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">
            Work <span className="text-secondary">Experience</span>
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                animate={experienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                className="relative pl-8 pb-8 border-l border-secondary/30 last:pb-0"
              >
                <div className="absolute top-0 left-0 w-3 h-3 rounded-full bg-secondary transform -translate-x-[7px]"></div>
                <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                <div className="flex items-center mb-3">
                  <span className="font-techno text-secondary">{exp.company}</span>
                  <span className="mx-3">•</span>
                  <span className="text-gray-400">{exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.responsibilities.map((responsibility) => (
                    <li key={responsibility} className="text-gray-300 flex">
                      <span className="mr-2 text-secondary">▹</span>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Education Section */}
        <motion.div
          ref={educationRef}
          initial={{ opacity: 0, y: 30 }}
          animate={educationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">
            <span className="text-secondary">Education</span>
          </h2>
          
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={educationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative pl-8 pb-8 border-l border-secondary/30"
            >
              <div className="absolute top-0 left-0 w-3 h-3 rounded-full bg-secondary transform -translate-x-[7px]"></div>
              <h3 className="text-xl font-bold mb-1">Master of Computer Science</h3>
              <div className="flex items-center mb-3">
                <span className="font-techno text-secondary">Tech University</span>
                <span className="mx-3">•</span>
                <span className="text-gray-400">2014 - 2016</span>
              </div>
              <p className="text-gray-300">
                Specialized in Software Engineering and Web Technologies.
                Graduated with honors. Thesis on "Modern Web Application Architecture."
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={educationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="relative pl-8 border-l border-secondary/30"
            >
              <div className="absolute top-0 left-0 w-3 h-3 rounded-full bg-secondary transform -translate-x-[7px]"></div>
              <h3 className="text-xl font-bold mb-1">Bachelor of Science in Computer Science</h3>
              <div className="flex items-center mb-3">
                <span className="font-techno text-secondary">State University</span>
                <span className="mx-3">•</span>
                <span className="text-gray-400">2010 - 2014</span>
              </div>
              <p className="text-gray-300">
                Courses in algorithms, data structures, database management, and web development.
                Participated in multiple hackathons and coding competitions.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 