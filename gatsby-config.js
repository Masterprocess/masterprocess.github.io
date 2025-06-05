/**
 * Configure your Gatsby site with this file.
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/** @type {import("gatsby").GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: `Zoe Rackley — UX Design`,
    description: `Portfolio of Bauhaus-inspired user experience projects and design explorations.`,
    author: `@gatsbyjs`,
    siteUrl: `https://masterprocess.github.io`, // GitHub Pages user-site URL
  },

  // For a *user* site (username.github.io) leave pathPrefix empty or "/"
  pathPrefix: `/`,

  plugins: [
    // Images
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    // Local file sources
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

    // MDX + GitHub-flavoured Markdown (tables, task-lists, etc.)
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        mdxOptions: {
          remarkPlugins: [require(`remark-gfm`)],
          // rehypePlugins: [],           // add any HTML-side plugins later
        },
        gatsbyRemarkPlugins: [], // if you decide to use gatsby-remark plugins
      },
    },

    // Styling
    `gatsby-plugin-postcss`, // Tailwind lives here
    {
      resolve: `gatsby-plugin-sass`, // if you keep SASS around
      options: { postCssPlugins: [] },
    },
  ],
};
