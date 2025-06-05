/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './gatsby-ssr.js',
    './gatsby-browser.js',
  ],
  theme: {
    extend: {
      colors: {
        bauhausRed: '#d04b41',
        bauhausYellow: '#f4d35e',
        bauhausBlue: '#577590',
        bauhausBlack: '#2f2f2f',
        bodyText: '#000000',
      },
      fontFamily: {
        sans: ['"Josefin Sans"', 'sans-serif'],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.bodyText'),
            '--tw-prose-headings': theme('colors.bodyText'),
            '--tw-prose-lead': theme('colors.bodyText'),
            '--tw-prose-links': theme('colors.bodyText'),
            '--tw-prose-bold': theme('colors.bodyText'),
            '--tw-prose-counters': theme('colors.bodyText'),
            '--tw-prose-bullets': theme('colors.bodyText'),
            '--tw-prose-hr': theme('colors.bodyText'),
            '--tw-prose-quotes': theme('colors.bodyText'),
            '--tw-prose-quote-borders': theme('colors.bodyText'),
            '--tw-prose-captions': theme('colors.bodyText'),
            '--tw-prose-code': theme('colors.bodyText'),
            '--tw-prose-pre-code': theme('colors.bodyText'),
            '--tw-prose-th-borders': theme('colors.bodyText'),
            '--tw-prose-td-borders': theme('colors.bodyText'),
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
