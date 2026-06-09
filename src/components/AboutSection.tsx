import { useInView } from '../hooks/useInView';
import { HiCode, HiAcademicCap, HiLightningBolt, HiBookOpen } from 'react-icons/hi';

const AboutSection = () => {
  const { ref, isInView } = useInView(0.15);

  const highlights = [
    {
      icon: HiCode,
      title: 'Currently Building',
      description: 'Venolp — a cutting-edge project pushing boundaries',
      color: 'from-[#58a6ff] to-[#388bfd]',
    },
    {
      icon: HiAcademicCap,
      title: 'Currently Learning',
      description: "Computer Networks — expanding backend knowledge",
      color: 'from-[#bc8cff] to-[#8957e5]',
    },
    {
      icon: HiLightningBolt,
      title: 'Ask Me About',
      description: 'HTML, Python, C — core technologies I love',
      color: 'from-[#f778ba] to-[#db61a2]',
    },
    {
      icon: HiBookOpen,
      title: 'Fun Fact',
      description: 'I read Manga, watch Anime & enjoy Novels 📚',
      color: 'from-[#3fb950] to-[#238636]',
    },
  ];

  return (
    <section id="about" className="relative py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#21262d] border border-[#30363d] text-[#58a6ff] text-sm font-mono mb-4">
            01. About Me
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get to know{' '}
            <span className="bg-gradient-to-r from-[#58a6ff] to-[#bc8cff] bg-clip-text text-transparent">
              me
            </span>
          </h2>
          <p className="text-[#8b949e] max-w-2xl mx-auto text-lg">
            A passionate Full Stack Web Developer from Navi Mumbai, India.
            Building digital experiences that make a difference.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className={`group p-6 rounded-xl bg-[#161b22] border border-[#21262d] hover:border-[#30363d] transition-all duration-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-lg bg-gradient-to-br ${item.color} shadow-lg`}
                >
                  <item.icon className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-[#58a6ff] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#8b949e] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Terminal-style about */}
        <div
          className={`mt-12 rounded-xl overflow-hidden border border-[#21262d] transition-all duration-700 delay-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-[#21262d]">
            <div className="w-3 h-3 rounded-full bg-[#f85149]" />
            <div className="w-3 h-3 rounded-full bg-[#d29922]" />
            <div className="w-3 h-3 rounded-full bg-[#3fb950]" />
            <span className="ml-2 text-[#8b949e] text-sm font-mono">
              ~/lavprasad
            </span>
          </div>
          <div className="p-6 bg-[#0d1117] font-mono text-sm leading-relaxed">
            <p className="text-[#8b949e]">
              <span className="text-[#3fb950]">lavprasad@dev</span>
              <span className="text-white">:</span>
              <span className="text-[#58a6ff]">~</span>
              <span className="text-white">$ </span>
              <span className="text-[#f0f6fc]">cat about.json</span>
            </p>
            <div className="mt-3 text-[#f0f6fc]">
              <p>{'{'}</p>
              <p className="ml-4">
                <span className="text-[#ff7b72]">"name"</span>
                <span className="text-white">: </span>
                <span className="text-[#a5d6ff]">"Lav Prasad"</span>,
              </p>
              <p className="ml-4">
                <span className="text-[#ff7b72]">"role"</span>
                <span className="text-white">: </span>
                <span className="text-[#a5d6ff]">"Full Stack Web Developer"</span>,
              </p>
              <p className="ml-4">
                <span className="text-[#ff7b72]">"location"</span>
                <span className="text-white">: </span>
                <span className="text-[#a5d6ff]">"Navi Mumbai, India"</span>,
              </p>
              <p className="ml-4">
                <span className="text-[#ff7b72]">"public_repos"</span>
                <span className="text-white">: </span>
                <span className="text-[#79c0ff]">11</span>,
              </p>
              <p className="ml-4">
                <span className="text-[#ff7b72]">"member_since"</span>
                <span className="text-white">: </span>
                <span className="text-[#a5d6ff]">"April 2021"</span>,
              </p>
              <p className="ml-4">
                <span className="text-[#ff7b72]">"open_to_work"</span>
                <span className="text-white">: </span>
                <span className="text-[#79c0ff]">true</span>
              </p>
              <p>{'}'}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
