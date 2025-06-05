import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/Layout";
import Seo from "../components/seo";

export const query = graphql`
  query BlogPost($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
      }
      body
    }
  }
`;

type BlogPostProps = {
  data: {
    mdx: {
      frontmatter: { title: string; date: string };
      body: string;
    };
  };
};

export default function BlogPost({ data }: BlogPostProps) {
  const { frontmatter, body } = data.mdx;
  return (
    <Layout>
      <article className="prose md:prose-lg mx-auto dark:prose-invert">
        <h1>{frontmatter.title}</h1>
        <p className="text-sm opacity-70">{frontmatter.date}</p>
        <MDXRenderer>{body}</MDXRenderer>
      </article>
    </Layout>
  );
}

export const Head = ({ data }: BlogPostProps) => (
  <Seo title={data.mdx.frontmatter.title} />
);
