import React, { forwardRef, useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, Send, Twitter } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@creative-director.com',
    href: 'mailto:hello@creative-director.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    label: 'Based in',
    value: 'New York, NY',
    href: '#',
  },
];

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Github, href: '#', label: 'GitHub' },
];

interface FormData {
  name: string;
  email: string;
  company: string;
  project: string;
  message: string;
}

const DarkNoirContact = forwardRef<HTMLElement>((_, ref) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    project: '',
    message: '',
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData(previous => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Placeholder for future integration
    setFormData({ name: '', email: '', company: '', project: '', message: '' });
  };

  return (
    <section ref={ref} id="contact" className="min-h-screen bg-black pt-16 text-white scroll-mt-28">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="mb-20">
          <h2 className="mb-6 text-4xl md:text-5xl">Let's Work Together</h2>
          <p className="max-w-3xl text-xl text-gray-400">
            I'm always interested in discussing new projects, creative collaborations, or opportunities to push the boundaries of design.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div className="space-y-12">
            <div>
              <h3 className="mb-8 text-2xl">Get in Touch</h3>
              <div className="space-y-6">
                {contactInfo.map(item => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="noir-border group flex items-center space-x-4 bg-gray-900 p-6 transition-all duration-300 hover:border-red-500/50"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-red-500 transition-colors duration-300 group-hover:bg-red-600">
                      <item.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="mb-1 text-sm text-gray-400">{item.label}</div>
                      <div className="text-white transition-colors duration-300 group-hover:text-red-500">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-6 text-xl">Connect</h4>
              <div className="flex space-x-4">
                {socialLinks.map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="noir-border flex h-12 w-12 items-center justify-center bg-gray-900 text-gray-400 transition-all duration-300 hover:bg-red-500 hover:text-white"
                  >
                    <link.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div className="noir-border bg-gray-900 p-8 text-gray-300">
              <h4 className="mb-4 text-lg text-white">Current Availability</h4>
              <p className="mb-4">
                I'm currently accepting new projects for Q2 2024. Whether you need a complete brand overhaul or focused design consulting, let's discuss how we can bring your vision to life.
              </p>
              <div className="text-sm text-gray-400">Response time: Usually within 24 hours</div>
            </div>
          </div>

          <div>
            <div className="noir-border bg-gray-900 p-8">
              <h4 className="mb-6 text-xl">Start a Conversation</h4>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm">
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border border-gray-700 bg-black px-3 py-3 text-sm text-white placeholder:text-gray-500 focus:border-red-500 focus:outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-gray-700 bg-black px-3 py-3 text-sm text-white placeholder:text-gray-500 focus:border-red-500 focus:outline-none"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="company" className="mb-2 block text-sm">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full border border-gray-700 bg-black px-3 py-3 text-sm text-white placeholder:text-gray-500 focus:border-red-500 focus:outline-none"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label htmlFor="project" className="mb-2 block text-sm">
                      Project Type
                    </label>
                    <input
                      id="project"
                      name="project"
                      type="text"
                      value={formData.project}
                      onChange={handleChange}
                      className="w-full border border-gray-700 bg-black px-3 py-3 text-sm text-white placeholder:text-gray-500 focus:border-red-500 focus:outline-none"
                      placeholder="Brand identity, Web design, etc."
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full resize-none border border-gray-700 bg-black px-3 py-3 text-sm text-white placeholder:text-gray-500 focus:border-red-500 focus:outline-none"
                    placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center space-x-2 bg-red-500 py-3 text-white transition-colors duration-300 hover:bg-red-600"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

DarkNoirContact.displayName = 'DarkNoirContact';

export default DarkNoirContact;
