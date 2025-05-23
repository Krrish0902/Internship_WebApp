import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.tsx';
import Cursor from './Cursor.tsx';

const Layout = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile or tablet (no cursor)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) || window.innerWidth < 768
      );
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      {!isMobile && <Cursor />}
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer className="py-8 border-t border-secondary/20">
        <div className="container text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} - Portfolio. All rights reserved.</p>
          <p className="mt-2 text-gray-500 text-sm">Designed and built with React, TypeScript, and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 
 