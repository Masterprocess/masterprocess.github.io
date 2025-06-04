import * as React from "react";
import Layout from "../components/Layout";
import HeroBauhaus from "../components/HeroBauhaus";
import AboutMe from "../components/AboutMe";
import FeaturedWork from "../components/FeaturedWork";
import Seo from "../components/seo";

const IndexPage = () => (
  <Layout>
    <HeroBauhaus
      intro="Bauhaus-inspired interfaces and user experiences."
      ctaText="Contact Me"
      ctaLink="#contact"
    />
    <AboutMe />
    <FeaturedWork />
    <section id="contact" className="container mx-auto px-4 py-8 bg-gray-100">
      <h2 className="mb-4 text-2xl font-bold">Get in Touch</h2>
      <p className="text-gray-700">
        Reach out to discuss potential collaborations or just say hello!
      </p>
    </section>
  </Layout>
);

export const Head = () => <Seo title="Home" />;

export default IndexPage;
