import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  onScrollToWork: () => void;
}

export function Hero({ onScrollToWork }: HeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [currentWord, setCurrentWord] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  const words = ['Designer', 'Director', 'Strategist', 'Innovator'];

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearInterval(wordInterval);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen relative bg-black film-grain cinematic-bars overflow-hidden"
    >
      <div
        className="absolute inset-0 spotlight transition-all duration-1000"
        style={{
          '--mouse-x': `${mousePosition.x}%`,
          '--mouse-y': `${mousePosition.y}%`
        } as React.CSSProperties}
      />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-red-500 rounded-full animate-float opacity-60" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-20 w-1 h-1 bg-white rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-red-500 rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-float opacity-30" style={{ animationDelay: '3s' }} />
      </div>

      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      <div className="relative z-10 min-h-screen flex items-center parallax-container">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-12 parallax-element">
              <div className="space-y-8">
                <div className="text-reveal revealed">
                  <div className="text-reveal-inner">
                    <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white leading-[0.85] tracking-tighter">
                      Creative
                    </h1>
                  </div>
                </div>

                <div className="text-reveal revealed ml-8" style={{ animationDelay: '0.2s' }}>
                  <div className="text-reveal-inner">
                    <div className="relative inline-block">
                      <span
                        className="glitch text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-red-500 leading-[0.85] tracking-tighter font-bold"
                        data-text={words[currentWord]}
                      >
                        {words[currentWord]}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-reveal revealed" style={{ animationDelay: '0.4s' }}>
                <div className="text-reveal-inner">
                  <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl font-light">
                    Pushing the boundaries of digital design through
                    <span className="text-white italic"> experimental interfaces</span>,
                    data-driven solutions, and
                    <span className="text-red-500"> award-winning experiences</span>.
                  </p>
                </div>
              </div>

              <div className="text-reveal revealed" style={{ animationDelay: '0.6s' }}>
                <div className="text-reveal-inner">
                  <div className="grid grid-cols-3 gap-8 max-w-md">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-1">150+</div>
                      <div className="text-sm text-gray-400 uppercase tracking-wider">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-1">15+</div>
                      <div className="text-sm text-gray-400 uppercase tracking-wider">Awards</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-1">8+</div>
                      <div className="text-sm text-gray-400 uppercase tracking-wider">Years</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-reveal revealed" style={{ animationDelay: '0.8s' }}>
                <div className="text-reveal-inner">
                  <button
                    onClick={onScrollToWork}
                    className="group magnetic relative inline-flex items-center space-x-4 bg-gradient-to-r from-red-600 to-red-500 text-white px-12 py-6 text-lg font-medium overflow-hidden dramatic-shadow hover:scale-105 transition-all duration-500"
                  >
                    <span className="relative z-10">Explore My Work</span>
                    <ArrowDown size={24} className="relative z-10 group-hover:translate-y-1 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative parallax-element" style={{ transform: 'translateZ(50px)' }}>
              <div className="relative">
                <div className="liquid-shape aspect-[3/4] bg-gradient-to-br from-gray-900 to-black overflow-hidden dramatic-shadow">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1551902675-a415b7df1ba1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHdvcmtzcGFjZSUyMGRhcmt8ZW58MXx8fHwxNTc3NzkxOTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Creative Director"
                    className="w-full h-full object-cover grayscale contrast-125 brightness-110 group-hover:scale-110 transition-all duration-1000"
                  />
                </div>

                <div className="absolute -top-8 -right-8 w-16 h-16 bg-red-500 rotate-45 animate-float opacity-90" style={{ animationDelay: '0.5s' }} />
                <div className="absolute -bottom-8 -left-8 w-24 h-24 border-4 border-white border-opacity-20 rotate-12 animate-float" style={{ animationDelay: '1.5s' }} />
                <div className="absolute top-1/2 -right-12 w-8 h-8 bg-gradient-to-r from-red-500 to-transparent rotate-45 animate-float" style={{ animationDelay: '2.5s' }} />

                <div className="absolute inset-0 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500 to-transparent opacity-20 h-2 animate-pulse"
                    style={{ animation: 'slideInUp 3s ease-in-out infinite', transform: 'translateY(-100%)' }}
                  />
                </div>
              </div>

              <div className="absolute -top-4 left-4 bg-black bg-opacity-80 px-4 py-2 backdrop-blur-sm">
                <div className="text-xs text-red-500 font-mono uppercase tracking-wider">Currently</div>
                <div className="text-sm text-white font-medium">Available for Projects</div>
              </div>

              <div className="absolute -bottom-4 right-4 bg-black bg-opacity-80 px-4 py-2 backdrop-blur-sm">
                <div className="text-xs text-red-500 font-mono uppercase tracking-wider">Location</div>
                <div className="text-sm text-white font-medium">New York, NY</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-red-500 rounded-full mt-2 animate-pulse" />
          </div>
          <div className="text-xs text-gray-400 mt-2 font-mono uppercase tracking-wider">Scroll</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
