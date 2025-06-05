/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  createTypes(`
    type Mdx implements Node {
      fields: MdxFields
    }
    type MdxFields {
      slug: String
    }
  `);
};

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
      allMdx {
        nodes {
          id
          internal {
            contentFilePath
          }
          fields {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  result.data.allMdx.nodes.forEach(({ id, internal, fields: { slug } }) => {
    createPage({
      path: slug,
      component: `${postTemplate}?__contentFilePath=${internal.contentFilePath}`,
      context: { id },
    });
  });
};
