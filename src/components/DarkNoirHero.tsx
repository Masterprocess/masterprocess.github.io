import React, { forwardRef, useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onScrollToWork: () => void;
}

const words = ['Designer', 'Director', 'Strategist', 'Innovator'];

const DarkNoirHero = forwardRef<HTMLElement, HeroProps>(({ onScrollToWork }, forwardedRef) => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [currentWord, setCurrentWord] = useState(0);
  const localRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const wordInterval = window.setInterval(() => {
      setCurrentWord(previous => (previous + 1) % words.length);
    }, 3000);

    return () => window.clearInterval(wordInterval);
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') {
      return undefined;
    }

    const handleMouseMove = (event: MouseEvent) => {
      if (localRef.current) {
        const rect = localRef.current.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
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
    <section ref={setRefs} id="home" className="min-h-screen relative overflow-hidden bg-black film-grain cinematic-bars">
      <div
        className="absolute inset-0 spotlight transition-all duration-1000"
        style={{
          '--mouse-x': `${mousePosition.x}%`,
          '--mouse-y': `${mousePosition.y}%`,
        } as CSSProperties}
      />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 h-2 w-2 animate-float rounded-full bg-red-500 opacity-60" />
        <div className="absolute top-40 right-20 h-1 w-1 animate-float rounded-full bg-white opacity-40" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-1/4 h-1.5 w-1.5 animate-float rounded-full bg-red-500 opacity-50" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/3 h-1 w-1 animate-float rounded-full bg-white opacity-30" style={{ animationDelay: '3s' }} />
      </div>

      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      <div className="parallax-container relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
            <div className="parallax-element space-y-12 lg:col-span-7">
              <div className="space-y-8">
                <div className="text-reveal revealed">
                  <div className="text-reveal-inner">
                    <h1 className="break-words text-[clamp(2.5rem,_5.5vw+1rem,_6.5rem)] leading-[0.85] tracking-tighter text-white">
                      Creative
                    </h1>
                  </div>
                </div>

                <div className="text-reveal revealed ml-8" style={{ animationDelay: '0.2s' }}>
                  <div className="text-reveal-inner">
                    <span
                      className="glitch break-words text-[clamp(2.5rem,_5.5vw+1rem,_6.5rem)] font-bold leading-[0.85] tracking-tighter text-red-500"
                      data-text={words[currentWord]}
                    >
                      {words[currentWord]}
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-reveal revealed" style={{ animationDelay: '0.4s' }}>
                <div className="text-reveal-inner">
                  <p className="max-w-2xl break-words text-[clamp(1rem,_1vw+1rem,_1.5rem)] font-light leading-relaxed text-gray-300">
                    Pushing the boundaries of digital design through
                    <span className="italic text-white"> experimental interfaces</span>, data-driven solutions, and
                    <span className="text-red-500"> award-winning experiences</span>.
                  </p>
                </div>
              </div>

              <div className="text-reveal revealed" style={{ animationDelay: '0.6s' }}>
                <div className="text-reveal-inner">
                  <div className="grid max-w-md grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="mb-1 break-words text-[clamp(1.75rem,_3vw,_2.5rem)] font-bold text-white">150+</div>
                      <div className="text-sm uppercase tracking-wider text-gray-400">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="mb-1 break-words text-[clamp(1.75rem,_3vw,_2.5rem)] font-bold text-white">15+</div>
                      <div className="text-sm uppercase tracking-wider text-gray-400">Awards</div>
                    </div>
                    <div className="text-center">
                      <div className="mb-1 break-words text-[clamp(1.75rem,_3vw,_2.5rem)] font-bold text-white">8+</div>
                      <div className="text-sm uppercase tracking-wider text-gray-400">Years</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-reveal revealed" style={{ animationDelay: '0.8s' }}>
                <div className="text-reveal-inner">
                  <button
                    type="button"
                    onClick={onScrollToWork}
                    className="magnetic group relative inline-flex items-center space-x-4 overflow-hidden bg-gradient-to-r from-red-600 to-red-500 px-12 py-6 text-[clamp(1rem,_0.5vw+0.95rem,_1.2rem)] font-medium text-white transition-all duration-500 hover:scale-105 dramatic-shadow"
                  >
                    <span className="relative z-10">Explore My Work</span>
                    <ArrowDown size={24} className="relative z-10 transition-transform duration-300 group-hover:translate-y-1" />
                    <div className="absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-red-500 to-red-400 transition-transform duration-500 group-hover:scale-x-100" />
                  </button>
                </div>
              </div>
            </div>

            <div className="parallax-element relative lg:col-span-5" style={{ transform: 'translateZ(50px)' }}>
              <div className="relative group">
                <div className="liquid-shape dramatic-shadow aspect-[3/4] overflow-hidden bg-gradient-to-br from-gray-900 to-black">
                  <img
                    src="https://images.unsplash.com/photo-1551902675-a415b7df1ba1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHdvcmtzcGFjZSUyMGRhcmt8ZW58MXx8fHwxNzU3NzkxOTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Creative Director"
                    className="h-full w-full object-cover brightness-110 contrast-125 grayscale transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                <div className="absolute -top-8 -right-8 h-16 w-16 animate-float rotate-45 bg-red-500 opacity-90" style={{ animationDelay: '0.5s' }} />
                <div className="absolute -bottom-8 -left-8 h-24 w-24 animate-float rotate-12 border-4 border-white border-opacity-20" style={{ animationDelay: '1.5s' }} />
                <div className="absolute top-1/2 -right-12 h-8 w-8 animate-float rotate-45 bg-gradient-to-r from-red-500 to-transparent" style={{ animationDelay: '2.5s' }} />

                <div className="absolute inset-0 overflow-hidden">
                  <div
                    className="absolute inset-0 h-2 bg-gradient-to-b from-transparent via-red-500 to-transparent opacity-20 animate-pulse"
                    style={{
                      animation: 'slideInUp 3s ease-in-out infinite',
                      transform: 'translateY(-100%)',
                    }}
                  />
                </div>
              </div>

              <div className="absolute -top-4 left-4 bg-black/80 px-4 py-2 backdrop-blur-sm">
                <div className="text-xs font-mono uppercase tracking-wider text-red-500">Currently</div>
                <div className="text-sm font-medium text-white">Available for Projects</div>
              </div>

              <div className="absolute -bottom-4 right-4 bg-black/80 px-4 py-2 backdrop-blur-sm">
                <div className="text-xs font-mono uppercase tracking-wider text-red-500">Location</div>
                <div className="text-sm font-medium text-white">New York, NY</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 transform text-center z-20">
        <div className="animate-bounce">
          <div className="flex h-10 w-6 justify-center rounded-full border-2 border-gray-600">
            <div className="mt-2 h-3 w-1 animate-pulse rounded-full bg-red-500" />
          </div>
          <div className="mt-2 text-xs font-mono uppercase tracking-wider text-gray-400">Scroll</div>
        </div>
      </div>
    </section>
  );
});

DarkNoirHero.displayName = 'DarkNoirHero';

export default DarkNoirHero;
