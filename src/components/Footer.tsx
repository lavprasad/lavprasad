import { FaGithub, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative py-12 px-6 border-t border-[#21262d]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[#8b949e] text-sm">
            <span>Built with</span>
            <FaHeart className="text-[#f85149] animate-pulse" />
            <span>by</span>
            <a
              href="https://github.com/lavprasad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#58a6ff] hover:underline font-medium"
            >
              Lav Prasad
            </a>
          </div>

          <div className="flex items-center gap-2 text-[#8b949e] text-sm">
            <FaGithub />
            <a
              href="https://github.com/lavprasad"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#58a6ff] transition-colors"
            >
              github.com/lavprasad
            </a>
          </div>

          <div className="text-[#484f58] text-xs">
            © {new Date().getFullYear()} Lav Prasad. All rights reserved.
          </div>
        </div>

        {/* Decorative bottom gradient */}
        <div className="mt-8 flex justify-center">
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-[#58a6ff] via-[#bc8cff] to-[#f778ba]" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
