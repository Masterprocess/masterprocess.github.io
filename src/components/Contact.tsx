import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Github } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@creative-director.com',
    href: 'mailto:hello@creative-director.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567'
  },
  {
    icon: MapPin,
    label: 'Based in',
    value: 'New York, NY',
    href: '#'
  }
];

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Github, href: '#', label: 'GitHub' }
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', company: '', project: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-black pt-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24">
        <div className="mb-20">
          <h1 className="text-4xl md:text-5xl text-white mb-6">Let's Work Together</h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            I'm always interested in discussing new projects, creative collaborations, or opportunities to push the boundaries of design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl text-white mb-8">Get in Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="group flex items-center space-x-4 p-6 bg-gray-900 noir-border hover:border-red-500/50 transition-all duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-red-500 flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                        <item.icon size={20} className="text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">{item.label}</div>
                      <div className="text-white group-hover:text-red-500 transition-colors duration-300">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl text-white mb-6">Connect</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 bg-gray-900 noir-border flex items-center justify-center text-gray-400 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 p-8 noir-border">
              <h3 className="text-lg text-white mb-4">Current Availability</h3>
              <p className="text-gray-300 mb-4">
                I'm currently accepting new projects for Q2 2024. Whether you need a complete brand overhaul or focused design consulting, let's discuss how we can bring your vision to life.
              </p>
              <div className="text-sm text-gray-400">Response time: Usually within 24 hours</div>
            </div>
          </div>

          <div>
            <div className="bg-gray-900 p-8 noir-border">
              <h3 className="text-xl text-white mb-6">Start a Conversation</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2 text-sm">Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-black border border-gray-700 text-white placeholder:text-gray-500 focus:border-red-500 p-3"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white mb-2 text-sm">Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-black border border-gray-700 text-white placeholder:text-gray-500 focus:border-red-500 p-3"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-white mb-2 text-sm">Company</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-black border border-gray-700 text-white placeholder:text-gray-500 focus:border-red-500 p-3"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label htmlFor="project" className="block text-white mb-2 text-sm">Project Type</label>
                    <input
                      id="project"
                      name="project"
                      type="text"
                      value={formData.project}
                      onChange={handleChange}
                      className="w-full bg-black border border-gray-700 text-white placeholder:text-gray-500 focus:border-red-500 p-3"
                      placeholder="Brand identity, Web design, etc."
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white mb-2 text-sm">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-black border border-gray-700 text-white placeholder:text-gray-500 focus:border-red-500 resize-none p-3"
                    placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-500 hover:bg-red-600 text-white h-12 flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
