import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ReactNode } from '../types/index';

interface AnimateOnScrollProps {
  children: ReactNode;
  threshold?: number;
  once?: boolean;
  animation?: 'fadeIn' | 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'scale' | 'none';
  delay?: number;
  duration?: number;
  className?: string;
}

const animations = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 }
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  },
  none: {
    hidden: {},
    visible: {}
  }
};

const AnimateOnScroll = ({
  children,
  threshold = 0.3,
  once = false,
  animation = 'fadeInUp',
  delay = 0,
  duration = 0.6,
  className = ''
}: AnimateOnScrollProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    amount: threshold
  });

  const { hidden, visible } = animations[animation];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { ...hidden },
        visible: { 
          ...visible,
          transition: { 
            duration,
            delay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll; 