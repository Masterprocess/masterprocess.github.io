/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it

import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './src/@chakra-ui/gatsby-plugin/theme';

export const wrapRootElement = ({ element }) => (
  <ChakraProvider theme={theme}>
    {element}
  </ChakraProvider>
);