/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

/**
 * Add a slug field to MDX nodes based on their file path.
 */
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "Mdx") {
    const slug = createFilePath({ node, getNode, basePath: "docs" });
    createNodeField({ node, name: "slug", value: `/blog${slug}` });
  }
};

/**
 * Create a page for each MDX file under docs/.
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve("./src/templates/blog-post.tsx");
  const result = await graphql(`
    {
      allMdx(sort: { frontmatter: { date: DESC } }) {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  result.data.allMdx.nodes.forEach(({ id, fields: { slug } }) => {
    createPage({ path: slug, component: postTemplate, context: { id } });
  });
};
