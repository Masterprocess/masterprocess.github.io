/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

const React = require('react');

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: `en` });
  setHeadComponents([
    <link
      key="gf-preconnect1"
      rel="preconnect"
      href="https://fonts.googleapis.com"
    />,
    <link
      key="gf-preconnect2"
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="true"
    />,
    <link
      key="gf-josefin"
      href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap"
      rel="stylesheet"
    />,
    <link
      key="gf-preload-dm-inter-ibm"
      rel="preload"
      href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter&family=IBM+Plex+Mono&display=swap"
      as="style"
    />,
    <link
      key="gf-dm-inter-ibm"
      href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter&family=IBM+Plex+Mono&display=swap"
      rel="stylesheet"
    />,
  ]);
};
