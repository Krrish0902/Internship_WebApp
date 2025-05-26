import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Refs for scroll triggered animations
  const headerRef = useRef(null);
  const formRef = useRef(null);
  const contactInfoRef = useRef(null);
  const followRef = useRef(null);
  
  // InView states
  const headerInView = useInView(headerRef, { once: false, amount: 0.3 });
  const formInView = useInView(formRef, { once: false, amount: 0.2 });
  const contactInfoInView = useInView(contactInfoRef, { once: false, amount: 0.3 });
  const followInView = useInView(followRef, { once: false, amount: 0.3 });

  const emailFormRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState('');

  // EmailJS configuration from environment variables
  const emailJsPublicKey = process.env.REACT_APP_USER_ID;
  const emailJsServiceId = process.env.REACT_APP_SERVICE_ID;
  const emailJsTemplateId = process.env.REACT_APP_TEMPLATE_ID;

  console.log(emailJsPublicKey, emailJsServiceId, emailJsTemplateId);

  // Initialize EmailJS
  useEffect(() => {
    if (emailJsPublicKey) {
      emailjs.init(emailJsPublicKey);
    }
  }, [emailJsPublicKey]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    
    // Check if EmailJS is configured
    if (!emailJsPublicKey || !emailJsServiceId || !emailJsTemplateId) {
      setErrorMessage('Email service is not configured. Please contact the administrator.');
      return;
    }
    
    setIsSubmitting(true);
    setErrorMessage('');
    
    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message
    };
    
    // Send email using EmailJS
    emailjs.send(
      emailJsServiceId,
      emailJsTemplateId,
      templateParams
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    })
    .catch((err) => {
      console.log('FAILED...', err);
      setIsSubmitting(false);
      setErrorMessage('Something went wrong. Please try again later.');
    });
  };

  const socials = [
    {
        title: "GitHub",
        icon: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
        href: "https://github.com/Krrish0902"
    },
    {
        title: "LinkedIn",
        icon: "M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM15 3h-4v4h4V3zm-2 16v-4h-2v4h2zM7 19V9h4v10H7z",
        href: "https://www.linkedin.com/in/ananthakrrishnan"
    },
    {
        title: "Twitter",
        icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1a10.66 10.66 0 01-9-4.53s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
        href: "https://x.com/I_Am_Krrish2002"
    },
    {
        title: "Instagram",
        icon: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01 M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z",
        href: "https://www.instagram.com/yourusername"
    }
  ]

  const contactInfo = [
    {
      icon: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
      title: "Email",
      content: "contact@example.com"
    },
    {
      icon: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z",
      title: "Phone",
      content: "+91 99999 99999"
    },
    {
      icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
      title: "Location",
      content: "KOCHI, IN"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: -20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="text-secondary">Touch</span>
          </h1>
          <p className="text-gray-300 max-w-3xl">
            I'm interested in freelance opportunities and collaborations. If you have a project that needs some creative work, don't hesitate to contact me.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div 
            ref={formRef}
            className="md:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            
            {isSubmitted ? (
              <motion.div 
                className="bg-black/30 border border-secondary rounded-xl p-8 text-center hover-gradient"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-secondary mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-techno mb-2">Message Sent!</h3>
                <p className="text-gray-300">Thank you for your message. I'll get back to you as soon as possible.</p>
              </motion.div>
            ) : (
              <form ref={emailFormRef} onSubmit={handleSubmit} className="space-y-6">
                {errorMessage && (
                  <div className="bg-red-500/20 border border-red-500 text-white p-4 rounded-lg mb-4">
                    {errorMessage}
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                  >
                    <label className="block text-sm font-medium mb-2" htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/30 border border-secondary/30 rounded-lg focus:outline-none focus:border-secondary transition-colors hover:shadow-glow"
                      placeholder="John Doe"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <label className="block text-sm font-medium mb-2" htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/30 border border-secondary/30 rounded-lg focus:outline-none focus:border-secondary transition-colors hover:shadow-glow"
                      placeholder="johndoe@example.com"
                    />
                  </motion.div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <label className="block text-sm font-medium mb-2" htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/30 border border-secondary/30 rounded-lg focus:outline-none focus:border-secondary transition-colors hover:shadow-glow"
                    placeholder="Project Inquiry"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <label className="block text-sm font-medium mb-2" htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-black/30 border border-secondary/30 rounded-lg focus:outline-none focus:border-secondary transition-colors hover:shadow-glow focus:shadow-inner-glow"
                    placeholder="Hello, I would like to talk about..."
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn hover-gradient w-full sm:w-auto text-white ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </motion.div>
              </form>
            )}
          </motion.div>
          
          <motion.div
            ref={contactInfoRef}
            initial={{ opacity: 0, x: 20 }}
            animate={contactInfoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={contactInfoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-start hover-gradient rounded-lg p-3 relative"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex-shrink-0 bg-black/30 border border-secondary/30 rounded-lg p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-secondary">
                      <path strokeLinecap="round" strokeLinejoin="round" d={info.icon} />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-techno text-lg mb-1 group-hover:text-secondary">{info.title}</h3>
                    <p className="text-gray-300 group-hover:text-black">{info.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              ref={followRef}
              initial={{ opacity: 0, y: 20 }}
              animate={followInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="mt-12"
            >
              <h3 className="text-xl font-bold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                {socials.map((social, index) => (
                  <motion.a
                    key={social.icon}
                    href={social.href}
                    className="bg-black/30 border border-secondary/30 rounded-full p-3 hover:border-secondary transition-all duration-300 hover-gradient"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={followInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-secondary">
                      <path strokeLinecap="round" strokeLinejoin="round" d={social.icon} />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 