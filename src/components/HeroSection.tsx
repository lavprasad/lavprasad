import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiLocationMarker, HiMail } from 'react-icons/hi';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const fullText = 'Full Stack Web Developer';

  useEffect(() => {
    setLoaded(true);
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 80);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => {
      clearInterval(typeInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20"
    >
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#58a6ff]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#bc8cff]/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Avatar */}
        <div
          className={`mb-8 transition-all duration-1000 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#58a6ff] to-[#bc8cff] blur-lg opacity-50 animate-pulse" />
            <img
              src="https://avatars.githubusercontent.com/u/81746494?v=4"
              alt="Lav Prasad"
              className="relative w-36 h-36 rounded-full border-4 border-[#30363d] shadow-2xl object-cover"
            />
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-[#238636] rounded-full border-4 border-[#0d1117] flex items-center justify-center">
              <span className="text-xs">✓</span>
            </div>
          </div>
        </div>

        {/* Status badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#21262d] border border-[#30363d] mb-6 transition-all duration-1000 delay-200 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#3fb950] animate-pulse" />
          <span className="text-[#8b949e] text-sm">🎯 Focusing</span>
        </div>

        {/* Name */}
        <h1
          className={`text-5xl md:text-7xl font-bold mb-4 transition-all duration-1000 delay-300 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Hi 👋, I'm{' '}
          <span className="bg-gradient-to-r from-[#58a6ff] via-[#bc8cff] to-[#f778ba] bg-clip-text text-transparent">
            Lav
          </span>
        </h1>

        {/* Typing effect */}
        <div
          className={`text-xl md:text-2xl text-[#8b949e] mb-8 font-mono h-8 transition-all duration-1000 delay-500 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-[#58a6ff]">&gt; </span>
          <span>{typedText}</span>
          <span
            className={`ml-0.5 ${showCursor ? 'opacity-100' : 'opacity-0'}`}
          >
            |
          </span>
        </div>

        {/* Location */}
        <div
          className={`flex items-center justify-center gap-2 text-[#8b949e] mb-8 transition-all duration-1000 delay-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <HiLocationMarker className="text-[#58a6ff]" />
          <span>Navi Mumbai, India</span>
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-wrap items-center justify-center gap-4 mb-10 transition-all duration-1000 delay-[900ms] ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a
            href="https://github.com/lavprasad"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-[#238636] hover:bg-[#2ea043] transition-all font-medium shadow-lg shadow-[#238636]/25 hover:shadow-[#238636]/40"
          >
            <FaGithub className="text-lg" />
            View Profile
          </a>
          <a
            href="mailto:lavprasad78@gmail.com"
            className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-[#21262d] hover:bg-[#30363d] border border-[#30363d] hover:border-[#58a6ff] transition-all font-medium"
          >
            <HiMail className="text-lg text-[#58a6ff]" />
            Get in Touch
          </a>
        </div>

        {/* Social Links */}
        <div
          className={`flex items-center justify-center gap-4 transition-all duration-1000 delay-[1100ms] ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {[
            { icon: FaGithub, url: 'https://github.com/lavprasad', label: 'GitHub' },
            { icon: FaLinkedin, url: 'https://linkedin.com/in/lav-prasad-704200108', label: 'LinkedIn' },
            { icon: FaTwitter, url: 'https://twitter.com/lavprasda', label: 'Twitter' },
          ].map(({ icon: Icon, url, label }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[#21262d] hover:bg-[#30363d] border border-[#30363d] hover:border-[#58a6ff] transition-all hover:scale-110 hover:-translate-y-1"
              title={label}
            >
              <Icon className="text-xl text-[#8b949e] hover:text-[#58a6ff]" />
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-[#30363d] flex items-start justify-center p-1">
            <div className="w-1.5 h-3 rounded-full bg-[#58a6ff] animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
