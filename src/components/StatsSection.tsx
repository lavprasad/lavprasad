import { useInView } from '../hooks/useInView';
import { useEffect, useState } from 'react';

const AnimatedCounter = ({
  end,
  duration = 2000,
  start,
}: {
  end: number;
  duration?: number;
  start: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [start, end, duration]);

  return <span>{count}</span>;
};

const StatsSection = () => {
  const { ref, isInView } = useInView(0.15);

  const stats = [
    { label: 'Public Repos', value: 11, icon: '📦' },
    { label: 'Technologies', value: 12, icon: '⚡' },
    { label: 'Years on GitHub', value: 5, icon: '📅' },
    { label: 'Following', value: 3, icon: '👥' },
  ];

  return (
    <section id="stats" className="relative py-24 px-6" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#21262d] to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#21262d] border border-[#30363d] text-[#d29922] text-sm font-mono mb-4">
            04. Stats
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            GitHub{' '}
            <span className="bg-gradient-to-r from-[#d29922] to-[#f78166] bg-clip-text text-transparent">
              Statistics
            </span>
          </h2>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center p-6 rounded-xl bg-[#161b22] border border-[#21262d] hover:border-[#30363d] transition-all duration-700 hover:-translate-y-1 ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-[#f0f6fc] mb-1">
                <AnimatedCounter end={stat.value} start={isInView} />
                <span className="text-[#58a6ff]">+</span>
              </div>
              <div className="text-[#8b949e] text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* GitHub Stats Cards */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-700 delay-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="rounded-xl overflow-hidden border border-[#21262d] bg-[#161b22] p-4 flex items-center justify-center">
            <img
              src="https://github-readme-stats.vercel.app/api?username=lavprasad&show_icons=true&locale=en&theme=github_dark&hide_border=true&bg_color=161b22"
              alt="GitHub Stats"
              className="w-full max-w-md"
              loading="lazy"
            />
          </div>
          <div className="rounded-xl overflow-hidden border border-[#21262d] bg-[#161b22] p-4 flex items-center justify-center">
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs?username=lavprasad&show_icons=true&locale=en&layout=compact&theme=github_dark&hide_border=true&bg_color=161b22"
              alt="Top Languages"
              className="w-full max-w-md"
              loading="lazy"
            />
          </div>
        </div>

        {/* Streak stats */}
        <div
          className={`mt-6 rounded-xl overflow-hidden border border-[#21262d] bg-[#161b22] p-4 flex items-center justify-center transition-all duration-700 delay-900 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=lavprasad&theme=github-dark-blue&hide_border=true&background=161b22"
            alt="GitHub Streak"
            className="w-full max-w-2xl"
            loading="lazy"
          />
        </div>

        {/* Contribution Graph */}
        <div
          className={`mt-6 rounded-xl overflow-hidden border border-[#21262d] bg-[#161b22] p-4 flex items-center justify-center transition-all duration-700 delay-[1100ms] ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <img
            src="https://github-profile-trophy.vercel.app/?username=lavprasad&theme=darkhub&no-frame=true&no-bg=true&column=7"
            alt="GitHub Trophies"
            className="w-full max-w-3xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
