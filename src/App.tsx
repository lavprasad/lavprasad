import { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import StatsSection from './components/StatsSection';
import ConnectSection from './components/ConnectSection';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0d1117] text-white font-['Inter',sans-serif] overflow-x-hidden">
      <ParticleBackground />
      <Navbar scrollY={scrollY} />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <StatsSection />
      <ConnectSection />
      <Footer />
    </div>
  );
}

export default App;
