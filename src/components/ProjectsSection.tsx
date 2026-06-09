import { useInView } from '../hooks/useInView';
import { FiExternalLink, FiGitBranch, FiStar, FiCalendar } from 'react-icons/fi';
import { FaCodeBranch } from 'react-icons/fa';

interface Repo {
  name: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
  url: string;
  updated: string;
  isFork?: boolean;
}

const ProjectsSection = () => {
  const { ref, isInView } = useInView(0.05);

  const repos: Repo[] = [
    {
      name: 'hobby_collector_app',
      description: 'A full-stack app that saves and organizes video links for your hobbies and interests.',
      language: 'TypeScript',
      languageColor: '#3178c6',
      stars: 0,
      forks: 0,
      url: 'https://github.com/lavprasad/hobby_collector_app',
      updated: 'May 2026',
    },
    {
      name: 'react_projects',
      description: 'Collection of React.js projects showcasing various frontend concepts and UI patterns.',
      language: 'JavaScript',
      languageColor: '#f1e05a',
      stars: 0,
      forks: 0,
      url: 'https://github.com/lavprasad/react_projects',
      updated: 'Apr 2025',
    },
    {
      name: 'Alert-System',
      description: 'A Python-based alert system for web applications with real-time notifications.',
      language: 'Python',
      languageColor: '#3572A5',
      stars: 0,
      forks: 0,
      url: 'https://github.com/lavprasad/Alert-System',
      updated: 'Apr 2024',
    },
    {
      name: 'projects',
      description: 'Multi-purpose Python projects repository — exploring algorithms and scripting.',
      language: 'Python',
      languageColor: '#3572A5',
      stars: 0,
      forks: 0,
      url: 'https://github.com/lavprasad/projects',
      updated: 'Apr 2025',
    },
    {
      name: 'html-media-assignment',
      description: 'PWSkills assignment for Full Stack Development — HTML & media elements showcase.',
      language: 'HTML',
      languageColor: '#e34c26',
      stars: 0,
      forks: 0,
      url: 'https://github.com/lavprasad/html-media-assignment',
      updated: 'Feb 2025',
    },
    {
      name: 'IBM_SkillBased_Learning_porject',
      description: 'Semantic Analysis of Restaurant Reviews using NLP — IBM Skills Network capstone project.',
      language: 'Jupyter Notebook',
      languageColor: '#DA5B0B',
      stars: 0,
      forks: 0,
      url: 'https://github.com/lavprasad/IBM_SkillBased_Learning_porject',
      updated: 'Sep 2023',
    },
    {
      name: 'CodeChef',
      description: 'CodeChef competitive programming solutions in Python — problem-solving practice.',
      language: 'Python',
      languageColor: '#3572A5',
      stars: 0,
      forks: 0,
      url: 'https://github.com/lavprasad/CodeChef',
      updated: 'Aug 2022',
    },
    {
      name: 'Certificates',
      description: 'Repository of all professional certifications and course completion badges.',
      language: '',
      languageColor: '',
      stars: 0,
      forks: 0,
      url: 'https://github.com/lavprasad/Certificates',
      updated: 'Sep 2024',
    },
  ];

  return (
    <section id="projects" className="relative py-24 px-6" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#21262d] to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#21262d] border border-[#30363d] text-[#3fb950] text-sm font-mono mb-4">
            03. Projects
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured{' '}
            <span className="bg-gradient-to-r from-[#3fb950] to-[#58a6ff] bg-clip-text text-transparent">
              Repositories
            </span>
          </h2>
          <p className="text-[#8b949e] max-w-2xl mx-auto text-lg">
            A curated collection of my open-source projects and contributions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {repos.map((repo, index) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block p-6 rounded-xl bg-[#161b22] border border-[#21262d] hover:border-[#388bfd] transition-all duration-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#58a6ff]/5 ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${150 + index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <FaCodeBranch className="text-[#8b949e] text-sm" />
                  <h3 className="text-[#58a6ff] font-semibold group-hover:underline">
                    {repo.name}
                  </h3>
                </div>
                <FiExternalLink className="text-[#8b949e] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <p className="text-[#8b949e] text-sm mb-4 leading-relaxed line-clamp-2">
                {repo.description}
              </p>

              <div className="flex items-center gap-4 text-xs text-[#8b949e]">
                {repo.language && (
                  <span className="flex items-center gap-1.5">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: repo.languageColor }}
                    />
                    {repo.language}
                  </span>
                )}
                {repo.stars > 0 && (
                  <span className="flex items-center gap-1">
                    <FiStar className="text-sm" />
                    {repo.stars}
                  </span>
                )}
                {repo.forks > 0 && (
                  <span className="flex items-center gap-1">
                    <FiGitBranch className="text-sm" />
                    {repo.forks}
                  </span>
                )}
                <span className="flex items-center gap-1 ml-auto">
                  <FiCalendar className="text-sm" />
                  {repo.updated}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* View all repos link */}
        <div
          className={`text-center mt-10 transition-all duration-700 delay-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a
            href="https://github.com/lavprasad?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#30363d] hover:border-[#58a6ff] text-[#58a6ff] hover:bg-[#58a6ff]/10 transition-all font-medium"
          >
            View All Repositories
            <FiExternalLink />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
