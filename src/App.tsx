import React, { useState } from 'react';
import { ModernBackground } from './components/ModernBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Journey } from './components/Journey';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenResume = () => {
    setIsResumeOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeOpen(false);
  };

  return (
    <div
      style={{
        backgroundColor: 'var(--bg)',
        color: 'var(--text-primary)',
        minHeight: '100vh',
      }}
      className="flex flex-col font-sans relative overflow-x-hidden"
    >
      {/* 1. Subtle Ambient Modern Background */}
      <ModernBackground />

      {/* 2. Top Navigation Bar (with Active Tabs, Resume Button & Smooth Scroll) */}
      <Navbar onOpenResume={handleOpenResume} />

      {/* 3. Main Continuous Scrolling Content */}
      <main className="flex-1 relative z-10 w-full flex flex-col">
        {/* Hero Section (#home) */}
        <Hero onOpenResume={handleOpenResume} />

        {/* About Section (#about) */}
        <About onOpenResume={handleOpenResume} />

        {/* Projects Section (#projects) */}
        <Projects />

        {/* Experience & Certifications Sections (#experience & #certificates) */}
        <Journey />

        {/* Skills & Tech Stack Section (#skills) */}
        <Skills />

        {/* Contact & Transmission Section (#contact) */}
        <Contact />
      </main>

      {/* 4. Professional Modern Footer */}
      <Footer />

      {/* 5. Interactive Resume Viewer & Download Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={handleCloseResume} />
    </div>
  );
};

export default App;
