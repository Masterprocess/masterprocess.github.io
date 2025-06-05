import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/seo";

export const query = graphql`
  {
    allMdx {
      nodes {
        frontmatter {
          title
          date(formatString: "YYYY-MM-DD")
        }
        fields {
          slug
        }
        excerpt(pruneLength: 140)
      }
    }
  }
`;

const BlogIndex = ({ data }) => (
  <Layout>
    <section className="max-w-2xl mx-auto py-12 pt-20 space-y-8">
      {data.allMdx.nodes.map((post) => (
        <article key={post.fields.slug}>
          <h2 className="text-xl font-bold">
            <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
          </h2>
          <p className="text-sm opacity-60">{post.frontmatter.date}</p>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </section>
  </Layout>
);

export const Head = () => <Seo title="Blog" />;

export default BlogIndex;
