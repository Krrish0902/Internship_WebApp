import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setPosition(newPosition);
    };

    const handleMouseOver = (e: MouseEvent) => {
      // Check if the element or its parents are clickable
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        getComputedStyle(target).cursor === 'pointer';
      
      setIsHovering(isClickable);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
        style={{
          backgroundColor: isClicking ? 'rgba(2, 247, 141, 0.8)' : 'rgba(2, 247, 141, 0.5)',
          backdropFilter: 'blur(2px)',
          width: isClicking ? '20px' : '24px',
          height: isClicking ? '20px' : '24px',
          mixBlendMode: 'difference'
        }}
        animate={{
          x: position.x - (isClicking ? 10 : 12),
          y: position.y - (isClicking ? 10 : 12),
          scale: isHovering ? 1.5 : 1
        }}
        transition={{
          type: 'spring',
          damping: 20,
          stiffness: 300,
          mass: 0.5
        }}
      />
      
      {/* Smaller inner cursor */}
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-secondary pointer-events-none z-[9999]"
        style={{
          width: isClicking ? '6px' : '8px',
          height: isClicking ? '6px' : '8px',
        }}
        animate={{
          x: position.x - (isClicking ? 3 : 4),
          y: position.y - (isClicking ? 3 : 4),
          scale: isHovering ? 0.5 : 1
        }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 400,
          mass: 0.3
        }}
      />
    </>
  );
};

export default Cursor; 