module.exports = {
  'env': {
    'browser': true,
    'node': true,
    'es6': true,
    'jest/globals': true,
    // 'cypress/globals': true // Open when use cypress
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'parserOptions': {
      'ecmaFeatures': {
        'jsx': true
      },
      'ecmaVersion': 2018,
      'sourceType': 'module'
  },
  'plugins': [
    'react', 'jest'
  ],
  'rules': {
    'indent': [
      'error',
      2 // NOTE:
    ],
    // 'linebreak-style': [
    //   'error',
    //   // 'unix' // LF
    //   'windows' // CRLF
    // ],
    'linebreak-style': 0, // NOTE: avoid CRLF
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never' // NOTE: semicolon - option ALWAYS 
    ],
    'eqeqeq': 'error',
    'no-trailing-spaces': 'error', // NOTE:
    'object-curly-spacing': [
      'error', 'always'
    ],
    'arrow-spacing': [ // NOTE:
      'error', { 'before': true, 'after': true }
    ],
    'no-console': 0, // NOTE:
    'react/prop-types': 0,  // NOTE: hide
    // 'react/react-in-jsx-scope': 'off'  // NOTE: hide
  },
}