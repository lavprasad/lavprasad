import { useInView } from '../hooks/useInView';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDev,
  FaStackOverflow,
  FaInstagram,
  FaHackerrank,
} from 'react-icons/fa';
import { SiCodechef, SiCodeforces, SiGeeksforgeeks } from 'react-icons/si';
import { HiMail } from 'react-icons/hi';

const ConnectSection = () => {
  const { ref, isInView } = useInView(0.15);

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/lavprasad',
      color: '#f0f6fc',
      bg: 'hover:bg-[#333]',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/lav-prasad-704200108',
      color: '#0a66c2',
      bg: 'hover:bg-[#0a66c2]/10',
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      url: 'https://twitter.com/lavprasda',
      color: '#1da1f2',
      bg: 'hover:bg-[#1da1f2]/10',
    },
    {
      name: 'Dev.to',
      icon: FaDev,
      url: 'https://dev.to/lavprasad',
      color: '#f0f6fc',
      bg: 'hover:bg-[#333]',
    },
    {
      name: 'Stack Overflow',
      icon: FaStackOverflow,
      url: 'https://stackoverflow.com/users/19806676',
      color: '#f48024',
      bg: 'hover:bg-[#f48024]/10',
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://instagram.com/lav_prasad',
      color: '#e4405f',
      bg: 'hover:bg-[#e4405f]/10',
    },
    {
      name: 'CodeChef',
      icon: SiCodechef,
      url: 'https://www.codechef.com/users/lav_prasad',
      color: '#5b4638',
      bg: 'hover:bg-[#5b4638]/10',
    },
    {
      name: 'HackerRank',
      icon: FaHackerrank,
      url: 'https://www.hackerrank.com/lavprasad78',
      color: '#2ec866',
      bg: 'hover:bg-[#2ec866]/10',
    },
    {
      name: 'Codeforces',
      icon: SiCodeforces,
      url: 'https://codeforces.com/profile/lavprasad',
      color: '#1f8acb',
      bg: 'hover:bg-[#1f8acb]/10',
    },
    {
      name: 'GeeksforGeeks',
      icon: SiGeeksforgeeks,
      url: 'https://auth.geeksforgeeks.org/user/lavprasad78/profile',
      color: '#2f8d46',
      bg: 'hover:bg-[#2f8d46]/10',
    },
  ];

  return (
    <section id="connect" className="relative py-24 px-6" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#21262d] to-transparent" />

      <div className="max-w-4xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#21262d] border border-[#30363d] text-[#f778ba] text-sm font-mono mb-4">
            05. Connect
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Let's{' '}
            <span className="bg-gradient-to-r from-[#f778ba] to-[#ff7b72] bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-[#8b949e] max-w-2xl mx-auto text-lg">
            Find me across the internet. Let's build something amazing together!
          </p>
        </div>

        {/* Social Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-12">
          {socialLinks.map((social, index) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col items-center gap-3 p-5 rounded-xl bg-[#161b22] border border-[#21262d] hover:border-[#30363d] transition-all duration-700 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/20 ${social.bg} ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${150 + index * 80}ms` }}
            >
              <social.icon
                className="text-3xl transition-transform group-hover:scale-125"
                style={{ color: social.color }}
              />
              <span className="text-[#8b949e] text-xs font-medium text-center group-hover:text-[#f0f6fc] transition-colors">
                {social.name}
              </span>
            </a>
          ))}
        </div>

        {/* Email CTA */}
        <div
          className={`text-center transition-all duration-700 delay-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-[#161b22] to-[#0d1117] border border-[#21262d]">
            <HiMail className="text-4xl text-[#58a6ff] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Drop me an email</h3>
            <a
              href="mailto:lavprasad78@gmail.com"
              className="text-[#58a6ff] hover:underline font-mono text-lg"
            >
              lavprasad78@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
