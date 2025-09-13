import { useState, useEffect } from 'react';
import { Menu, X, Circle } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const navItems = [
    { id: 'home', label: 'Work', index: '01' },
    { id: 'about', label: 'About', index: '02' },
    { id: 'contact', label: 'Contact', index: '03' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-xl border-b border-red-500/20' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Advanced Logo */}
            <button
              onClick={() => onPageChange('home')}
              className="group relative overflow-hidden"
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Circle className="w-8 h-8 text-red-500 animate-pulse" />
                  <div className="absolute inset-0 w-8 h-8 border-2 border-white rounded-full animate-spin" style={{ animationDuration: '3s' }} />
                </div>
                <div className="relative">
                  <span className="text-2xl font-bold text-white tracking-tight group-hover:text-red-500 transition-colors duration-300">
                    CD
                  </span>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300" />
                </div>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onPageChange(item.id)}
                  className="group relative magnetic"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-xs text-gray-500 font-mono">{item.index}</span>
                    <span className={`text-lg font-medium tracking-wide transition-all duration-300 ${
                      currentPage === item.id
                        ? 'text-red-500'
                        : 'text-gray-300 group-hover:text-white'
                    }`}>
                      {item.label}
                    </span>
                  </div>
                  {currentPage === item.id && (
                    <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 animate-pulse" />
                  )}
                  <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
                </button>
              ))}
              
              {/* Status Indicator */}
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-gray-400 font-mono">Available</span>
              </div>
            </div>

            {/* Advanced Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center group"
              aria-label="Toggle menu"
            >
              <div className="relative">
                {isMenuOpen ? (
                  <X size={24} className="text-white group-hover:text-red-500 transition-colors duration-300" />
                ) : (
                  <Menu size={24} className="text-white group-hover:text-red-500 transition-colors duration-300" />
                )}
              </div>
              <div className="absolute inset-0 border border-gray-600 group-hover:border-red-500 transition-colors duration-300" />
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-red-500/20">
              <div className="py-8 px-6">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onPageChange(item.id);
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left py-4 group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-500 font-mono">{item.index}</span>
                      <span className={`text-2xl font-medium transition-all duration-300 ${
                        currentPage === item.id
                          ? 'text-red-500'
                          : 'text-gray-300 group-hover:text-white'
                      }`}>
                        {item.label}
                      </span>
                    </div>
                    <div className="w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300 mt-2" />
                  </button>
                ))}
                
                {/* Mobile Status */}
                <div className="mt-8 pt-6 border-t border-gray-800">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-gray-400 font-mono">Currently Available for Projects</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Custom Cursor */}
      <div 
        className="fixed pointer-events-none z-50 w-4 h-4 bg-red-500 rounded-full mix-blend-difference transition-transform duration-150 ease-out hidden lg:block"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
        }}
      />
    </>
  );
}