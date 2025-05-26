import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.tsx';
import Home from './pages/Home.tsx';
import Projects from './pages/Projects.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Portfolio | Full Stack Developer</title>
          <meta name="description" content="Portfolio website showcasing my full stack development projects and skills" />
          <link rel="icon" href="stock1.svg" />
        </Helmet>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
    </HelmetProvider>
  );
}

export default App; 