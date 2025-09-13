import { Award, Users, Clock, Target } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const capabilities = [
  'Brand Identity & Strategy',
  'User Experience Design',
  'Interface Design',
  'Art Direction',
  'Design Systems',
  'Creative Strategy',
  'Typography',
  'Visual Communication'
];

const stats = [
  { icon: Award, label: 'Awards & Recognition', value: '15+' },
  { icon: Users, label: 'Clients Served', value: '50+' },
  { icon: Clock, label: 'Years Experience', value: '8+' },
  { icon: Target, label: 'Projects Delivered', value: '150+' }
];

export function About() {
  return (
    <div className="min-h-screen bg-black pt-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24">
        <div className="mb-20">
          <h1 className="text-4xl md:text-5xl text-white mb-6">About</h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            Creative director with a passion for crafting meaningful digital experiences that bridge the gap between design and human connection.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="relative">
            <div className="aspect-[4/5] bg-gray-900 overflow-hidden noir-shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1551902675-a415b7df1ba1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHdvcmtzcGFjZSUyMGRhcmt8ZW58MXx8fHwxNzU3NzkxOTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Creative Director"
                className="w-full h-full object-cover grayscale contrast-110"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-gray-600"></div>
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl text-white leading-tight">
                Design is about solving problems and telling stories
              </h2>
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>
                  With over 8 years of experience in the design industry, I've had the privilege of working with startups, Fortune 500 companies, and everything in between. My approach combines strategic thinking with creative execution to deliver solutions that not only look exceptional but also drive real results.
                </p>
                <p>
                  I believe great design happens at the intersection of user needs, business goals, and technological possibilities. Whether it's crafting a brand identity from scratch or optimizing a complex user interface, I focus on creating experiences that are both beautiful and functional.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl text-white mb-4">Core Capabilities</h3>
              <div className="grid grid-cols-2 gap-3">
                {capabilities.map((capability) => (
                  <div
                    key={capability}
                    className="text-sm text-gray-400 hover:text-red-500 transition-colors duration-300"
                  >
                    {capability}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 p-6 noir-border">
              <h3 className="text-lg text-white mb-4">My Approach</h3>
              <div className="space-y-3 text-sm text-gray-300">
                <p>• Start with understanding the user and business context</p>
                <p>• Iterate quickly and test assumptions early</p>
                <p>• Focus on scalable, systematic design solutions</p>
                <p>• Collaborate closely with stakeholders and developers</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-gray-900 noir-border hover:border-red-500/50 transition-colors duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-red-500 mb-4">
                <stat.icon size={24} className="text-white" />
              </div>
              <div className="text-2xl md:text-3xl text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 p-12 noir-border">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl text-white mb-8">Design Philosophy</h3>
            <blockquote className="text-lg md:text-xl text-gray-300 leading-relaxed italic">
              "Great design is invisible. It solves problems so elegantly that users don't even think about it. It's the perfect marriage of form and function, where every element has a purpose, and every purpose is beautifully expressed. In a world full of noise, I create clarity."
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
