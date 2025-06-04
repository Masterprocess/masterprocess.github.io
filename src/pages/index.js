import * as React from "react";
import Layout from "../components/Layout";
import HeroBauhaus from "../components/HeroBauhaus";
import Seo from "../components/seo";

const IndexPage = () => (
  <Layout>
    <HeroBauhaus />
    <section className="container mx-auto px-4 py-8">
      <h2 className="mb-4 text-2xl font-bold">Featured Work</h2>
      <p className="text-gray-700">Coming soon...</p>
    </section>
  </Layout>
);

export const Head = () => <Seo title="Home" />;

export default IndexPage;
