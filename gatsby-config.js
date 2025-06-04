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
  pathPrefix: `/`, // This should be the root as it's a user or organization site
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [],
      },
    },
  ],
}
