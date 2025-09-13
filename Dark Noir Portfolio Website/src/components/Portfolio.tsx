import { forwardRef, useState, useRef, useEffect } from 'react';
import { ExternalLink, Eye, Award, TrendingUp, Users, Calendar } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
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
    description: 'Revolutionizing digital banking through AI-driven personalization and next-generation security protocols. Winner of the 2024 Digital Innovation Award.',
    image: 'https://images.unsplash.com/photo-1542837336-d14bdf342f9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwd2ViJTIwZGVzaWdufGVufDF8fHx8MTc1Nzc2NTk4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Product Strategy', 'UI/UX', 'Design Systems', 'User Research'],
    metrics: { users: '1.2M', conversion: '+65%', rating: '4.9/5' },
    featured: true,
    award: 'Design Excellence Award 2024'
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
    description: 'Complete brand transformation for a climate technology startup, from conception to global implementation across 12 countries.',
    image: 'https://images.unsplash.com/photo-1754681920848-d20733e4ef23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBncmFwaGljJTIwZGVzaWduJTIwcG9zdGVyfGVufDF8fHx8MTc1Nzc5MTkzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Brand Strategy', 'Visual Identity', 'Motion Graphics', 'Global Implementation'],
    metrics: { reach: '50M', engagement: '+180%', awards: '3' },
    featured: false
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
    description: 'Next-generation e-commerce platform leveraging machine learning for personalized shopping experiences and predictive analytics.',
    image: 'https://images.unsplash.com/photo-1633533452148-a9657d2c9a5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwZGVzaWdufGVufDF8fHx8MTc1NzcxMTY4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['E-commerce', 'AI Integration', 'Performance Optimization', 'Mobile-First'],
    metrics: { revenue: '+$2.3M', sessions: '+150%', retention: '+90%' },
    featured: true,
    award: 'UX Innovation Award 2023'
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
    description: 'Bridging traditional art with cutting-edge technology through immersive digital experiences and interactive installations.',
    image: 'https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0eXBvZ3JhcGh5JTIwZGVzaWduJTIwYmxhY2t8ZW58MXx8fHwxNzU3NzkxOTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Digital Installation', 'Interactive Design', 'Cultural Heritage', 'AR/VR'],
    metrics: { visitors: '+400%', time: '+250%', satisfaction: '96%' },
    featured: false
  }
];

export const Portfolio = forwardRef<HTMLElement>((props, ref) => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={ref} 
      className="py-32 bg-gradient-to-b from-black via-gray-950 to-black film-grain relative overflow-hidden"
    >
      {/* Dynamic Background */}
      <div 
        className="absolute w-96 h-96 bg-red-500 rounded-full opacity-[0.03] blur-3xl transition-all duration-1000"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={sectionRef}>
        {/* Advanced Header */}
        <div className="mb-32 text-center relative">
          <div className="text-reveal revealed">
            <div className="text-reveal-inner">
              <div className="inline-block mb-4">
                <span className="text-sm text-red-500 font-mono uppercase tracking-[0.3em] px-4 py-2 border border-red-500 border-opacity-30">
                  Portfolio Selection
                </span>
              </div>
              <h2 className="text-6xl md:text-7xl lg:text-8xl text-white mb-8 tracking-tight">
                Featured
                <span className="block text-gray-400 italic">Projects</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
                Award-winning work that pushes boundaries, drives innovation, 
                and delivers measurable impact for global brands and startups.
              </p>
            </div>
          </div>
        </div>

        {/* Advanced Projects Layout */}
        <div className="space-y-48">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            const isActive = activeProject === project.id;
            
            return (
              <div
                key={project.id}
                className={`group relative ${
                  isEven ? 'lg:grid lg:grid-cols-12 lg:gap-16' : 'lg:grid lg:grid-cols-12 lg:gap-16'
                } items-center`}
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
                {/* Project Image */}
                <div className={`relative lg:col-span-7 ${isEven ? '' : 'lg:col-start-6'} mb-12 lg:mb-0`}>
                  <div className="relative">
                    {/* Main Image Container */}
                    <div className="aspect-[16/10] overflow-hidden dramatic-shadow group-hover:scale-105 transition-all duration-1000">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-1000"
                      />
                      
                      {/* Scan Line Effect */}
                      <div className="absolute inset-0 overflow-hidden">
                        <div 
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-30 w-2 transition-all duration-1000"
                          style={{
                            animation: isActive ? 'slideInUp 2s ease-in-out infinite' : 'none',
                            transform: 'translateX(-100%)'
                          }}
                        />
                      </div>
                    </div>

                    {/* Floating Elements */}
                    {project.featured && (
                      <div className="absolute -top-6 -right-6 bg-red-500 text-white px-4 py-2 rotate-12 dramatic-shadow">
                        <div className="flex items-center space-x-2">
                          <Award size={16} />
                          <span className="text-sm font-bold">Featured</span>
                        </div>
                      </div>
                    )}

                    {/* Project Number */}
                    <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-black border-2 border-red-500 flex items-center justify-center text-red-500 font-bold text-xl">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                      <div className="flex space-x-6">
                        <button className="magnetic p-6 bg-white text-black hover:bg-red-500 hover:text-white transition-all duration-300 dramatic-shadow">
                          <Eye size={24} />
                        </button>
                        <a
                          href="#"
                          className="magnetic p-6 bg-white text-black hover:bg-red-500 hover:text-white transition-all duration-300 dramatic-shadow"
                        >
                          <ExternalLink size={24} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:col-start-8' : 'lg:col-start-1'} space-y-8`}>
                  {/* Category & Year */}
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="text-red-500 font-mono uppercase tracking-wider">{project.category}</span>
                    <div className="w-px h-4 bg-gray-600"></div>
                    <span className="text-gray-400">{project.year}</span>
                    {project.award && (
                      <>
                        <div className="w-px h-4 bg-gray-600"></div>
                        <span className="text-yellow-400 flex items-center space-x-1">
                          <Award size={14} />
                          <span>Award Winner</span>
                        </span>
                      </>
                    )}
                  </div>
                  
                  {/* Title */}
                  <div>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight tracking-tight mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xl text-gray-400 italic">{project.subtitle}</p>
                  </div>
                  
                  {/* Description */}
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Project Meta */}
                  <div className="grid grid-cols-2 gap-6 py-6 border-t border-b border-gray-800">
                    <div className="flex items-center space-x-3">
                      <Users size={18} className="text-red-500" />
                      <div>
                        <div className="text-sm text-gray-400">Team</div>
                        <div className="text-white font-medium">{project.team}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar size={18} className="text-red-500" />
                      <div>
                        <div className="text-sm text-gray-400">Duration</div>
                        <div className="text-white font-medium">{project.duration}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <TrendingUp size={18} className="text-red-500" />
                      <div>
                        <div className="text-sm text-gray-400">Impact</div>
                        <div className="text-white font-medium">{project.impact}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                      <div>
                        <div className="text-sm text-gray-400">Client</div>
                        <div className="text-white font-medium">{project.client}</div>
                      </div>
                    </div>
                  </div>

                  {/* Key Metrics */}
                  <div className="bg-gray-900 bg-opacity-50 p-6 backdrop-blur-sm border border-gray-800">
                    <h4 className="text-sm text-red-500 uppercase tracking-wider mb-4">Key Metrics</h4>
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-xl font-bold text-white mb-1">{value}</div>
                          <div className="text-xs text-gray-400 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 text-sm text-gray-400 border border-gray-700 hover:border-red-500 hover:text-red-500 transition-all duration-300 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Advanced CTA */}
        <div className="text-center mt-32">
          <div className="inline-block">
            <button className="group magnetic relative px-12 py-6 bg-gradient-to-r from-red-600 to-red-500 text-white text-lg font-medium overflow-hidden dramatic-shadow hover:scale-105 transition-all duration-500">
              <span className="relative z-10">View All Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </button>
          </div>
          <p className="text-gray-400 mt-4 text-sm">
            50+ projects • 15+ awards • 8+ years experience
          </p>
        </div>
      </div>
    </section>
  );
});