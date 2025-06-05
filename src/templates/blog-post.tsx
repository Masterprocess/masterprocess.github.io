import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/seo";

export const query = graphql`
  query BlogPost($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
      }
    }
  }
`;

type BlogPostProps = {
  data: {
    mdx: {
      frontmatter: { title: string; date: string };
    };
  };
};

export default function BlogPost({
  data,
  children,
}: React.PropsWithChildren<BlogPostProps>) {
  const { frontmatter } = data.mdx;
  return (
    <Layout>
      <article className="prose md:prose-lg mx-auto pt-20">
        <h1>{frontmatter.title}</h1>
        <p className="text-sm opacity-70">{frontmatter.date}</p>
        {children}
      </article>
    </Layout>
  );
}

export const Head = ({ data }: BlogPostProps) => (
  <Seo title={data.mdx.frontmatter.title} />
);
