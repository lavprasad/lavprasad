import { FaGithub } from 'react-icons/fa';

interface NavbarProps {
  scrollY: number;
}

const Navbar = ({ scrollY }: NavbarProps) => {
  const isScrolled = scrollY > 50;

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Stats', href: '#stats' },
    { label: 'Connect', href: '#connect' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0d1117]/90 backdrop-blur-xl border-b border-[#21262d] shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-2 text-white font-bold text-xl hover:text-[#58a6ff] transition-colors"
        >
          <span className="text-[#58a6ff] text-2xl font-mono">&lt;</span>
          <span>Lav</span>
          <span className="text-[#58a6ff] font-mono">/&gt;</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#8b949e] hover:text-[#58a6ff] transition-colors text-sm font-medium relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#58a6ff] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <a
          href="https://github.com/lavprasad"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#21262d] hover:bg-[#30363d] border border-[#30363d] hover:border-[#58a6ff] transition-all text-sm font-medium"
        >
          <FaGithub className="text-lg" />
          <span className="hidden sm:inline">GitHub</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
