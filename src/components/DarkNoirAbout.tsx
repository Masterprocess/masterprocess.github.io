import React, { forwardRef } from 'react';
import { Award, Clock, Target, Users } from 'lucide-react';

const capabilities = [
  'Brand Identity & Strategy',
  'User Experience Design',
  'Interface Design',
  'Art Direction',
  'Design Systems',
  'Creative Strategy',
  'Typography',
  'Visual Communication',
];

const stats = [
  { icon: Award, label: 'Awards & Recognition', value: '15+' },
  { icon: Users, label: 'Clients Served', value: '50+' },
  { icon: Clock, label: 'Years Experience', value: '8+' },
  { icon: Target, label: 'Projects Delivered', value: '150+' },
];

const DarkNoirAbout = forwardRef<HTMLElement>((_, ref) => (
  <section ref={ref} id="about" className="min-h-screen bg-black pt-16 text-white scroll-mt-28">
    <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <div className="mb-20">
        <h2 className="mb-6 text-4xl md:text-5xl">About</h2>
        <p className="max-w-3xl text-xl text-gray-400">
          Creative director with a passion for crafting meaningful digital experiences that bridge the gap between design and human connection.
        </p>
      </div>

      <div className="mb-24 grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
        <div className="relative">
          <div className="noir-shadow-xl aspect-[4/5] overflow-hidden bg-gray-900">
            <img
              src="https://images.unsplash.com/photo-1551902675-a415b7df1ba1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHdvcmtzcGFjZSUyMGRhcmt8ZW58MXx8fHwxNzU3NzkxOTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Creative Director"
              loading="lazy"
              className="h-full w-full object-cover contrast-110 grayscale"
            />
          </div>
          <div className="absolute -top-4 -right-4 h-8 w-8 bg-red-500" />
          <div className="absolute -bottom-4 -left-4 h-16 w-16 border-2 border-gray-600" />
        </div>

        <div className="space-y-8 text-gray-300">
          <div className="space-y-6">
            <h3 className="text-3xl text-white md:text-4xl">Design is about solving problems and telling stories</h3>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                With over 8 years of experience in the design industry, I've had the privilege of working with startups, Fortune 500 companies, and everything in between. My approach combines strategic thinking with creative execution to deliver solutions that not only look exceptional but also drive real results.
              </p>
              <p>
                I believe great design happens at the intersection of user needs, business goals, and technological possibilities. Whether it's crafting a brand identity from scratch or optimizing a complex user interface, I focus on creating experiences that are both beautiful and functional.
              </p>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xl text-white">Core Capabilities</h4>
            <div className="grid grid-cols-2 gap-3">
              {capabilities.map(capability => (
                <div key={capability} className="text-sm text-gray-400 transition-colors duration-300 hover:text-red-500">
                  {capability}
                </div>
              ))}
            </div>
          </div>

          <div className="noir-border bg-gray-900 p-6">
            <h4 className="mb-4 text-lg text-white">My Approach</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <p>• Start with understanding the user and business context</p>
              <p>• Iterate quickly and test assumptions early</p>
              <p>• Focus on scalable, systematic design solutions</p>
              <p>• Collaborate closely with stakeholders and developers</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-24 grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map(stat => (
          <div key={stat.label} className="noir-border bg-gray-900 p-6 text-center transition-colors duration-300 hover:border-red-500/50">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center bg-red-500">
              <stat.icon size={24} />
            </div>
            <div className="mb-2 text-2xl text-white md:text-3xl">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="noir-border bg-gray-900 p-12 text-center">
        <div className="mx-auto max-w-4xl">
          <h4 className="mb-8 text-2xl text-white md:text-3xl">Design Philosophy</h4>
          <blockquote className="text-lg italic leading-relaxed text-gray-300 md:text-xl">
            "Great design is invisible. It solves problems so elegantly that users don't even think about it. It's the perfect marriage of form and function, where every element has a purpose, and every purpose is beautifully expressed. In a world full of noise, I create clarity."
          </blockquote>
        </div>
      </div>
    </div>
  </section>
));

DarkNoirAbout.displayName = 'DarkNoirAbout';

export default DarkNoirAbout;
