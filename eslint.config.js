/** @type {import("eslint").Linter.Config} */
module.exports = {
  /* Core rules for JS / TS files ------------------------------------ */
  extends: ['eslint:recommended', 'plugin:mdx/recommended'],

  /* Tell ESLint to lint MD / MDX with the right parser -------------- */
  overrides: [
    {
      files: ['**/*.{md,mdx}'],
      parser: 'eslint-mdx',
      rules: {
        /* Warn on raw HTML like <br> that breaks MDX */
        'mdx/no-html': 'warn',

        /* Run remark-gfm (tables, task-lists, etc.) and remark-breaks */
        'mdx/remark': [
          'error',
          {
            plugins: [
              ['remark-gfm'],
              ['remark-breaks'], // remove if you don’t need single-line breaks
            ],
          },
        ],
      },
    },
  ],
};
