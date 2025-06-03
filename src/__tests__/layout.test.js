import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from '../components/layout';
import { useStaticQuery } from 'gatsby';

jest.mock('gatsby', () => ({
  ...jest.requireActual('gatsby'),
  useStaticQuery: jest.fn(),
  graphql: jest.fn(),
}));

beforeEach(() => {
  useStaticQuery.mockReturnValue({
    site: { siteMetadata: { title: 'Gatsby Default Starter' } },
  });
});

test('renders header text', () => {
  render(<Layout>Test</Layout>);
  expect(screen.getByText('Gatsby Default Starter')).toBeTruthy();
});
