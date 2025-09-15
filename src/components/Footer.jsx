import React from 'react';
import { Link } from 'gatsby';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const navigationLinks = [
  { label: 'Home', to: '/' },
  { label: 'Work', to: '/#work' },
  { label: 'About', to: '/#about' },
  { label: 'Contact', to: '/#contact' },
  { label: 'Blog', to: '/blog' },
  { label: 'Resume', to: '/resume' },
];

const socialLinks = [
  { label: 'LinkedIn', href: '#', icon: Linkedin },
  { label: 'Twitter', href: '#', icon: Twitter },
  { label: 'GitHub', href: '#', icon: Github },
  { label: 'Email', href: 'mailto:hello@creative-director.com', icon: Mail },
];

const Footer = () => (
  <footer className="relative border-t border-red-500/20 bg-black text-white">
    <div className="absolute inset-0 opacity-[0.02]">
      <div
        className="h-full w-full"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)` ,
          backgroundSize: '80px 80px',
        }}
      />
    </div>

    <div className="relative mx-auto max-w-6xl px-6 py-16 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-3">
        <div className="space-y-6">
          <div className="inline-flex items-center space-x-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-red-500/40 text-2xl font-bold">
              CD
            </div>
            <div>
              <p className="text-lg font-semibold">Creative Director</p>
              <p className="text-sm text-gray-400">Crafting cinematic digital experiences</p>
            </div>
          </div>
          <p className="max-w-sm text-sm text-gray-400">
            Blending strategy, storytelling, and design to deliver immersive interfaces that move brands and people forward.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-all duration-300 hover:border-red-500/60 hover:text-white"
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:col-span-2">
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-400">Navigate</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {navigationLinks.map(link => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-400">Availability</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <p>Currently booking projects for Q2 2024.</p>
              <p className="flex items-center space-x-2">
                <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-green-500" />
                <span>Accepting new collaborations</span>
              </p>
              <p>Based in New York, working worldwide.</p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-400">Stay Updated</h4>
            <form className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="your.email@example.com"
                className="w-full border border-gray-700 bg-black px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-red-500 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-red-500 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-red-600"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-3 text-xs text-gray-500">No spam, only carefully crafted updates.</p>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-start justify-between space-y-4 border-t border-white/10 pt-6 text-xs text-gray-500 md:flex-row md:items-center md:space-y-0">
        <p className="font-mono uppercase tracking-widest">© {new Date().getFullYear()} Zoe Rackley · All Rights Reserved</p>
        <div className="flex space-x-6">
          <Link to="/blog" className="transition-colors duration-300 hover:text-white">
            Blog
          </Link>
          <Link to="/resume" className="transition-colors duration-300 hover:text-white">
            Resume
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
