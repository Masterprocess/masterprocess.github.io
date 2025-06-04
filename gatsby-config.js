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
  // GitHub Pages hosts this project at https://masterprocess.github.io/masterprocess.github.io
  // so asset URLs must include the repository name as a prefix.
  pathPrefix: `/masterprocess.github.io`,
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
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [],
      },
    },
  ],
}
