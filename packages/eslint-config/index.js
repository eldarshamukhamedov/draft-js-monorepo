module.exports = {
  extends: ['airbnb-base', 'airbnb/rules/react', 'prettier', 'prettier/react'],
  plugins: ['babel'],
  parser: 'babel-eslint',
  env: {
    jest: true,
    browser: true,
    node: true,
  },
  rules: {
    // Use the `eslint-babel-plugin` version of `no-unused-expressions` to
    // support optional chaining operators
    'babel/no-unused-expressions': 2,
    'no-unused-expressions': 0,

    // Disabled rules
    'prefer-destructuring': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'import/prefer-default-export': 0,
    'lines-between-class-members': 0,
    'react/jsx-filename-extension': 0,

    'no-param-reassign': [
      0,
      {
        props: true,
        ignorePropertyModificationsFor: [
          'draft', // Immer JS
        ],
      },
    ],

    'no-underscore-dangle': [2, { allow: ['__typename'] }],
  },

  // Typescript-specific rules
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      plugins: ['@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      rules: {
        'no-unused-vars': 0,
        '@typescript-eslint/no-unused-vars': 2,
        // TS compiler will already complain about undefined vars
        // This helps us avoid ESLint false positives for global types
        'no-undef': 0,
      },
    },
  ],
};
