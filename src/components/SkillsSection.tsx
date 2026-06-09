import { useInView } from '../hooks/useInView';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaLinux,
  FaDatabase,
  FaGitAlt,
  FaTerminal,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiDotnet,
  SiMysql,
} from 'react-icons/si';

const SkillsSection = () => {
  const { ref, isInView } = useInView(0.1);

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML5', icon: FaHtml5, color: '#e34f26' },
        { name: 'CSS3', icon: FaCss3Alt, color: '#1572b6' },
        { name: 'JavaScript', icon: FaJsSquare, color: '#f7df1e' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
        { name: 'React', icon: FaReact, color: '#61dafb' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
        { name: 'Python', icon: FaPython, color: '#3776ab' },
        { name: 'Java', icon: FaJava, color: '#ed8b00' },
        { name: '.NET', icon: SiDotnet, color: '#512bd4' },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'MySQL', icon: SiMysql, color: '#4479a1' },
        { name: 'Git', icon: FaGitAlt, color: '#f05032' },
        { name: 'Linux', icon: FaLinux, color: '#fcc624' },
        { name: 'Bash', icon: FaTerminal, color: '#4eaa25' },
        { name: 'Database', icon: FaDatabase, color: '#58a6ff' },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-24 px-6" ref={ref}>
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#21262d] to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#21262d] border border-[#30363d] text-[#bc8cff] text-sm font-mono mb-4">
            02. Skills
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Languages &{' '}
            <span className="bg-gradient-to-r from-[#bc8cff] to-[#f778ba] bg-clip-text text-transparent">
              Tools
            </span>
          </h2>
          <p className="text-[#8b949e] max-w-2xl mx-auto text-lg">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className={`p-6 rounded-xl bg-[#161b22] border border-[#21262d] transition-all duration-700 ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${200 + catIndex * 200}ms` }}
            >
              <h3 className="text-lg font-semibold text-[#f0f6fc] mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#58a6ff]" />
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className={`group flex items-center gap-3 p-3 rounded-lg hover:bg-[#21262d] transition-all duration-500 cursor-default ${
                      isInView
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 -translate-x-5'
                    }`}
                    style={{
                      transitionDelay: `${400 + catIndex * 200 + skillIndex * 100}ms`,
                    }}
                  >
                    <skill.icon
                      className="text-2xl transition-transform group-hover:scale-125"
                      style={{ color: skill.color }}
                    />
                    <span className="text-[#c9d1d9] font-medium">
                      {skill.name}
                    </span>
                    <div className="ml-auto flex-1 max-w-[100px]">
                      <div className="h-1.5 rounded-full bg-[#21262d] overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: isInView ? `${70 + Math.random() * 30}%` : '0%',
                            background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})`,
                            transitionDelay: `${600 + catIndex * 200 + skillIndex * 100}ms`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
