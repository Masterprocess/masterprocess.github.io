/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './gatsby-ssr.js',
    './gatsby-browser.js',
  ],
  theme: {
    extend: {
      colors: {
        bauhaus: {
          red: '#d04b41',
          yellow: '#f4d35e',
          blue: '#577590',
          black: '#2f2f2f',
        },
        bodyText: '#000000',
        noir: {
          background: '#121212',
          surface: '#181818',
          text: '#e8e6e3',
          accent: '#8be9fd',
        },
      },
      fontFamily: {
        sans: ['"Josefin Sans"', 'sans-serif'],
        serifDisplay: ['"DM Serif Display"', 'serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      boxShadow: {
        'inner-dark': 'inset 0 0 0 1px rgba(0,0,0,.8)',
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
      spacing: {
        'space-1': '6px',
        'space-2': '12px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
