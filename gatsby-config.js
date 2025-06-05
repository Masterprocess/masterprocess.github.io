/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Zoe Rackley — UX Design`,
    description: `Portfolio of Bauhaus-inspired user experience projects and design explorations.`,
    author: `@gatsbyjs`,
    siteUrl: `https://masterprocess.github.io`, // Updated to reflect my GitHub Pages URL
  },

  // This repository uses a GitHub Pages user site,
  // so assets should be served from the root URL without a path prefix.
  pathPrefix: `/`,

  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/docs`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        remarkPlugins: [],
        gatsbyRemarkPlugins: [],
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [],
      },
    },
  ],
};
