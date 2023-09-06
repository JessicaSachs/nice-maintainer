const DOMGlobals = ['window', 'document']
const NodeGlobals = ['module', 'require']

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module'
  },
  rules: {
    'no-debugger': 'error',
    'no-unused-vars': [
      'error',
      // we are only using this rule to check for unused arguments since TS
      // catches unused variables but not args.
      { varsIgnorePattern: '.*', args: 'none' }
    ],
    // most of the codebase are expected to be env agnostic
    'no-restricted-globals': ['error', ...DOMGlobals, ...NodeGlobals],

    'no-restricted-syntax': [
      'error',
      // since we target ES2015 for baseline support, we need to forbid object
      // rest spread usage in destructure as it compiles into a verbose helper.
      'ObjectPattern > RestElement',
      // tsc compiles assignment spread into Object.assign() calls, but esbuild
      // still generates verbose helpers, so spread assignment is also prohiboted
      'ObjectExpression > SpreadElement',
      'AwaitExpression'
    ]
  },
  overrides: [
    // shared, may be used in any env
    {
      files: ['packages/{config,types}/**'],
      rules: {
        'no-restricted-globals': 'off'
      }
    },
    // Packages targeting DOM
    {
      files: ['packages/app/**'],
      rules: {
        'no-restricted-globals': ['error', ...NodeGlobals]
      }
    },
    // Packages targeting Node
    {
      files: ['packages/{config,core}/**'],
      rules: {
        'no-restricted-globals': ['error', ...DOMGlobals],
        'no-restricted-syntax': 'off'
      }
    },
    // Node scripts
    {
      files: [
        'scripts/**',
        'packages/*/*.{cjs,mjs,mts,mjs,jsx,js,tsx,ts}',
        './.*.{cjs,mjs,mts,mjs,js,ts}'
      ],
      rules: {
        'no-restricted-globals': 'off',
        'no-restricted-syntax': 'off'
      }
    }
  ]
}
