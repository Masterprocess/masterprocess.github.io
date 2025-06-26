import * as React from 'react';
import Layout from '../components/Layout';
import HeroNoir from '../components/HeroNoir';
import AboutMe from '../components/AboutMe';
import FeaturedWork from '../components/FeaturedWork';
import ContactForm from '../components/ContactForm';
import Seo from '../components/seo';

const IndexPage = () => (
  <Layout>
    <HeroNoir
      intro="Noir-glitch-vtm themed interfaces and experiments."
      ctaText="Contact Me"
      ctaLink="#contact"
    />
    <AboutMe />
    <FeaturedWork />
    <section id="contact" className="container mx-auto px-4 py-8 bg-gray-100">
      <h2 className="mb-4 text-2xl font-bold">Get in Touch</h2>
      <p className="mb-4 text-gray-700">
        Reach out to discuss potential collaborations or just say hello!
      </p>
      <ContactForm />
    </section>
  </Layout>
);

export const Head = () => <Seo title="Home" />;

export default IndexPage;
