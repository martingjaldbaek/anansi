module.exports = {
  // TODO: instead of including TS stuff, just have the base, but then programatically order things
  // properly in the extends
  env: {
    jest: true,
    browser: true,
  },
  plugins: ['prettier', 'react-hooks', 'import', 'react'],
  rules: {
    'prettier/prettier': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prefer-stateless-function': 'error',
    'lines-between-class-members': [
      'warn',
      'always',
      { exceptAfterSingleLine: true },
    ],
    'import/order': [
      'warn',
      {
        groups: [
          ['builtin', 'external'],
          'internal',
          ['parent', 'sibling', 'index'],
        ],
        'newlines-between': 'always',
      },
    ]
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      webpack: {},
      'babel-plugin-root-import': { rootPathSuffix: './src' },
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:react/recommended",
        "prettier",
        "prettier/@typescript-eslint",
        "prettier/react"
      ],
    },
    {
      files: ['*.js', '*.jsx'],
      extends: [
        "eslint:recommended",
        "plugin:flowtype/recommended",
        "plugin:react/recommended",
        "prettier",
        "prettier/react"
      ],
      parser: 'babel-eslint',
      parserOptions: {
        sourceType: 'module',
        allowImportExportEverywhere: true,
        ecmaVersion: 2020,
        ecmaFeatures: {
          jsx: true,
          experimentalObjectRestSpread: true,
        },
      },
      plugins: ['flowtype', 'babel'],
    }
  ]
};
