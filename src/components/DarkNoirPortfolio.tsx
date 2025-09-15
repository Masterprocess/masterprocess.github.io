import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { Calendar, ExternalLink, Eye, Award, TrendingUp, Users } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  client: string;
  duration: string;
  team: string;
  impact: string;
  description: string;
  image: string;
  tags: string[];
  metrics: Record<string, string>;
  featured?: boolean;
  award?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'FinTech Revolution',
    subtitle: 'Neo Banking Platform',
    category: 'Product Design',
    year: '2024',
    client: 'TechCorp',
    duration: '6 months',
    team: '8 people',
    impact: '+40% user engagement',
    description:
      'Revolutionizing digital banking through AI-driven personalization and next-generation security protocols. Winner of the 2024 Digital Innovation Award.',
    image:
      'https://images.unsplash.com/photo-1542837336-d14bdf342f9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwd2ViJTIwZGVzaWdufGVufDF8fHx8MTc1Nzc2NTk4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Product Strategy', 'UI/UX', 'Design Systems', 'User Research'],
    metrics: { users: '1.2M', conversion: '+65%', rating: '4.9/5' },
    featured: true,
    award: 'Design Excellence Award 2024',
  },
  {
    id: 2,
    title: 'Sustainable Future',
    subtitle: 'Climate Tech Brand Identity',
    category: 'Brand Design',
    year: '2024',
    client: 'GreenTech',
    duration: '4 months',
    team: '5 people',
    impact: '+200% brand recognition',
    description:
      'Complete brand transformation for a climate technology startup, from conception to global implementation across 12 countries.',
    image:
      'https://images.unsplash.com/photo-1754681920848-d20733e4ef23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBncmFwaGljJTIwZGVzaWduJTIwcG9zdGVyfGVufDF8fHx8MTc1Nzc5MTkzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Brand Strategy', 'Visual Identity', 'Motion Graphics', 'Global Implementation'],
    metrics: { reach: '50M', engagement: '+180%', awards: '3' },
    featured: false,
  },
  {
    id: 3,
    title: 'E-Commerce 3.0',
    subtitle: 'AI-Powered Shopping Experience',
    category: 'Digital Experience',
    year: '2023',
    client: 'RetailGiant',
    duration: '8 months',
    team: '12 people',
    impact: '+85% conversion rate',
    description:
      'Next-generation e-commerce platform leveraging machine learning for personalized shopping experiences and predictive analytics.',
    image:
      'https://images.unsplash.com/photo-1633533452148-a9657d2c9a5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwZGVzaWdufGVufDF8fHx8MTc1NzcxMTY4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['E-commerce', 'AI Integration', 'Performance Optimization', 'Mobile-First'],
    metrics: { revenue: '+$2.3M', sessions: '+150%', retention: '+90%' },
    featured: true,
    award: 'UX Innovation Award 2023',
  },
  {
    id: 4,
    title: 'Cultural Renaissance',
    subtitle: 'Museum Digital Transformation',
    category: 'Cultural Design',
    year: '2023',
    client: 'Metropolitan Arts',
    duration: '5 months',
    team: '7 people',
    impact: '+300% digital engagement',
    description:
      'Bridging traditional art with cutting-edge technology through immersive digital experiences and interactive installations.',
    image:
      'https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0eXBvZ3JhcGh5JTIwZGVzaWduJTIwYmxhY2t8ZW58MXx8fHwxNzU3NzkxOTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Digital Installation', 'Interactive Design', 'Cultural Heritage', 'AR/VR'],
    metrics: { visitors: '+400%', time: '+250%', satisfaction: '96%' },
    featured: false,
  },
];

const DarkNoirPortfolio = forwardRef<HTMLElement>((_, forwardedRef) => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const localRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof document === 'undefined') {
      return undefined;
    }

    const handleMouseMove = (event: MouseEvent) => {
      if (localRef.current) {
        const rect = localRef.current.getBoundingClientRect();
        setMousePosition({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const setRefs = (node: HTMLElement | null) => {
    localRef.current = node;
    if (typeof forwardedRef === 'function') {
      forwardedRef(node);
    } else if (forwardedRef) {
      forwardedRef.current = node;
    }
  };

  return (
    <section
      ref={setRefs}
      id="work"
      className="relative overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black py-32 film-grain scroll-mt-28"
    >
      <div
        className="absolute h-96 w-96 rounded-full bg-red-500 opacity-[0.03] blur-3xl transition-all duration-1000"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative mb-32 text-center">
          <div className="text-reveal revealed">
            <div className="text-reveal-inner">
              <div className="mb-4 inline-block">
                <span className="border border-red-500 border-opacity-30 px-4 py-2 text-sm font-mono uppercase tracking-[0.3em] text-red-500">
                  Portfolio Selection
                </span>
              </div>
              <h2 className="mb-8 text-6xl tracking-tight text-white md:text-7xl lg:text-8xl">
                Featured
                <span className="block italic text-gray-400">Projects</span>
              </h2>
              <p className="mx-auto max-w-4xl text-xl font-light leading-relaxed text-gray-300 md:text-2xl">
                Award-winning work that pushes boundaries, drives innovation, and delivers measurable impact for global brands and startups.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-48">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            const isActive = activeProject === project.id;

            return (
              <div
                key={project.id}
                className="group relative items-center lg:grid lg:grid-cols-12 lg:gap-16"
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div className={`relative mb-12 lg:col-span-7 lg:mb-0 ${isEven ? '' : 'lg:col-start-6'}`}>
                  <div className="relative">
                    <div className="dramatic-shadow overflow-hidden transition-all duration-1000 group-hover:scale-105 aspect-[16/10]">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="h-full w-full object-cover contrast-125 grayscale transition-all duration-1000 group-hover:grayscale-0"
                      />

                      <div className="absolute inset-0 overflow-hidden">
                        <div
                          className="absolute inset-0 w-2 opacity-0 transition-all duration-1000 group-hover:opacity-30 bg-gradient-to-r from-transparent via-red-500 to-transparent"
                          style={{
                            animation: isActive ? 'slideInUp 2s ease-in-out infinite' : 'none',
                            transform: 'translateX(-100%)',
                          }}
                        />
                      </div>
                    </div>

                    {project.featured && (
                      <div className="dramatic-shadow absolute -top-6 -right-6 rotate-12 bg-red-500 px-4 py-2 text-white">
                        <div className="flex items-center space-x-2">
                          <Award size={16} />
                          <span className="text-sm font-bold">Featured</span>
                        </div>
                      </div>
                    )}

                    <div className="absolute -bottom-8 -left-8 flex h-16 w-16 items-center justify-center border-2 border-red-500 bg-black text-xl font-bold text-red-500">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center bg-black/80 opacity-0 transition-all duration-500 group-hover:opacity-100">
                      <div className="flex space-x-6">
                        <button
                          type="button"
                          className="dramatic-shadow magnetic bg-white p-6 text-black transition-all duration-300 hover:bg-red-500 hover:text-white"
                        >
                          <Eye size={24} />
                        </button>
                        <a
                          href="#"
                          className="dramatic-shadow magnetic bg-white p-6 text-black transition-all duration-300 hover:bg-red-500 hover:text-white"
                        >
                          <ExternalLink size={24} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`space-y-8 lg:col-span-5 ${isEven ? '' : 'lg:col-start-1'}`}>
                  <div className="space-y-2">
                    <span className="text-sm font-mono uppercase tracking-[0.3em] text-red-500">{project.category}</span>
                    <h3 className="text-4xl text-white">{project.title}</h3>
                    <p className="text-lg text-gray-400">{project.subtitle}</p>
                  </div>

                  <p className="text-gray-300">{project.description}</p>

                  <div className="grid grid-cols-2 gap-6 text-sm text-gray-400">
                    <div>
                      <div className="mb-1 font-mono uppercase tracking-wide text-gray-500">Client</div>
                      <div className="text-white">{project.client}</div>
                    </div>
                    <div>
                      <div className="mb-1 font-mono uppercase tracking-wide text-gray-500">Year</div>
                      <div className="text-white">{project.year}</div>
                    </div>
                    <div>
                      <div className="mb-1 font-mono uppercase tracking-wide text-gray-500">Duration</div>
                      <div className="text-white">{project.duration}</div>
                    </div>
                    <div>
                      <div className="mb-1 font-mono uppercase tracking-wide text-gray-500">Team</div>
                      <div className="text-white">{project.team}</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.tags.map(tag => (
                      <span key={tag} className="border border-white/10 px-3 py-1 text-xs uppercase tracking-widest text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="grid gap-4 rounded border border-white/10 p-6 md:grid-cols-3">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="flex items-center space-x-3 text-sm text-gray-400">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white">
                          {key === 'users' && <Users size={18} />}
                          {key === 'conversion' && <TrendingUp size={18} />}
                          {key === 'rating' && <Award size={18} />}
                          {key === 'reach' && <TrendingUp size={18} />}
                          {key === 'engagement' && <Users size={18} />}
                          {key === 'awards' && <Award size={18} />}
                          {key === 'revenue' && <TrendingUp size={18} />}
                          {key === 'sessions' && <Users size={18} />}
                          {key === 'retention' && <Calendar size={18} />}
                          {key === 'visitors' && <Users size={18} />}
                          {key === 'time' && <Calendar size={18} />}
                          {key === 'satisfaction' && <Award size={18} />}
                        </div>
                        <div>
                          <div className="text-xs uppercase tracking-wider text-gray-500">{key}</div>
                          <div className="text-white">{value}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2 text-gray-400">
                      <TrendingUp size={18} className="text-red-500" />
                      <span>{project.impact}</span>
                    </div>
                    {project.award && (
                      <div className="flex items-center space-x-2 text-gray-400">
                        <Award size={18} className="text-red-500" />
                        <span>{project.award}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

DarkNoirPortfolio.displayName = 'DarkNoirPortfolio';

export default DarkNoirPortfolio;
