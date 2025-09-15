import React, { useEffect, useState } from 'react';
import { Link, navigate } from 'gatsby';
import { Circle, Menu, X } from 'lucide-react';

export interface NavigationProps {
  currentSection?: string;
  onNavigate?: (sectionId: string) => void;
}

const primaryNavItems = [
  { id: 'work', label: 'Work', index: '01' },
  { id: 'about', label: 'About', index: '02' },
  { id: 'contact', label: 'Contact', index: '03' },
];

const secondaryLinks = [
  { id: 'blog', label: 'Blog', to: '/blog' },
  { id: 'resume', label: 'Resume', to: '/resume' },
];

const DarkNoirNavigation: React.FC<NavigationProps> = ({ currentSection, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (onNavigate) {
      event.preventDefault();
      onNavigate('home');
      setIsMenuOpen(false);
    }
  };

  const handlePrimaryNav = (sectionId: string) => {
    if (onNavigate) {
      onNavigate(sectionId);
      setIsMenuOpen(false);
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/95 backdrop-blur-xl border-b border-red-500/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            onClick={handleLogoClick}
            className="group relative overflow-hidden"
            aria-label="Navigate home"
          >
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Circle className="h-8 w-8 text-red-500 animate-pulse" />
                <div
                  className="absolute inset-0 h-8 w-8 rounded-full border-2 border-white animate-spin"
                  style={{ animationDuration: '3s' }}
                />
              </div>
              <div className="relative">
                <span className="text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-red-500">
                  CD
                </span>
                <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-full" />
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-12">
            {primaryNavItems.map(item => {
              const isActive = currentSection === item.id;
              const sharedContent = (
                <div className="flex items-center space-x-3">
                  <span className="text-xs font-mono text-gray-500">{item.index}</span>
                  <span
                    className={`text-lg font-medium tracking-wide transition-all duration-300 ${
                      isActive ? 'text-red-500' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </span>
                </div>
              );

              return onNavigate ? (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handlePrimaryNav(item.id)}
                  className="group relative"
                >
                  {sharedContent}
                  {isActive && (
                    <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 animate-pulse" />
                  )}
                  <div className="absolute -bottom-2 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full" />
                </button>
              ) : (
                <Link key={item.id} to={`/#${item.id}`} className="group relative" onClick={() => handlePrimaryNav(item.id)}>
                  {sharedContent}
                  {isActive && (
                    <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 animate-pulse" />
                  )}
                  <div className="absolute -bottom-2 left-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full" />
                </Link>
              );
            })}

            <div className="flex items-center space-x-6">
              {secondaryLinks.map(link => (
                <Link
                  key={link.id}
                  to={link.to}
                  className="text-sm font-mono uppercase tracking-wider text-gray-400 transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-2 text-sm">
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              <span className="font-mono text-gray-400">Available</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen(previous => !previous)}
            className="relative flex h-10 w-10 items-center justify-center md:hidden"
            aria-label="Toggle navigation menu"
          >
            <div className="relative">
              {isMenuOpen ? (
                <X size={24} className="text-white transition-colors duration-300" />
              ) : (
                <Menu size={24} className="text-white transition-colors duration-300" />
              )}
            </div>
            <div className="absolute inset-0 border border-gray-600 transition-colors duration-300" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 border-b border-red-500/20 bg-black/95 backdrop-blur-xl md:hidden">
            <div className="space-y-6 px-6 py-8">
              {primaryNavItems.map(item => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handlePrimaryNav(item.id)}
                  className="group block w-full text-left"
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-mono text-gray-500">{item.index}</span>
                    <span
                      className={`text-2xl font-medium transition-all duration-300 ${
                        currentSection === item.id ? 'text-red-500' : 'text-gray-300 group-hover:text-white'
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                  <div className="mt-2 h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-full" />
                </button>
              ))}

              <div className="border-t border-gray-800 pt-6">
                <div className="mb-4 text-xs font-mono uppercase tracking-wider text-gray-500">Explore</div>
                <div className="flex flex-col space-y-3">
                  {secondaryLinks.map(link => (
                    <Link
                      key={link.id}
                      to={link.to}
                      className="text-lg text-gray-300 transition-colors duration-300 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-800 pt-6">
                <div className="flex items-center space-x-3">
                  <div className="h-3 w-3 animate-pulse rounded-full bg-green-500" />
                  <span className="font-mono text-gray-400">Currently Available for Projects</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div
        className="pointer-events-none fixed hidden h-4 w-4 rounded-full bg-red-500 mix-blend-difference transition-transform duration-150 ease-out lg:block"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
        }}
      />
    </nav>
  );
};

export default DarkNoirNavigation;
