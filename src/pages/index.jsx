import * as React from "react";
import Layout from "../components/Layout";
import HeroBauhaus from "../components/HeroBauhaus";
import Seo from "../components/seo";

const IndexPage = () => (
  <Layout>
    <HeroBauhaus />
    <section id="about" className="container mx-auto px-4 py-8 bg-gray-100">
      <h2 className="mb-4 text-2xl font-bold">About</h2>
      <p className="text-gray-700">
        I am a UX designer exploring Bauhaus-inspired interfaces and user
        experiences. This site showcases selected projects and experiments.
      </p>
    </section>
    <section id="work" className="container mx-auto px-4 py-8">
      <h2 className="mb-4 text-2xl font-bold">Featured Work</h2>
      <p className="text-gray-700">Coming soon...</p>
    </section>
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
