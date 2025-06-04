/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it

import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
// Use the theme provided by the Chakra UI Gatsby plugin. The plugin will
// automatically resolve a local shadowed theme file at
// `src/@chakra-ui/gatsby-plugin/theme.js` if it exists, otherwise it falls back
// to the default theme. Importing it via the package name ensures that the
// correct file is used and avoids referencing a non-existent local path.
import theme from "@chakra-ui/gatsby-plugin/theme";
import "./src/styles/global.scss";

export const wrapRootElement = ({ element }) => (
  <ChakraProvider theme={theme}>{element}</ChakraProvider>
);
