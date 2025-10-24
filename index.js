import stylistic from '@stylistic/eslint-plugin'

export default {
  plugins: {
    '@stylistic': stylistic,
  },
  rules: {
    '@stylistic/semi': ['error', 'always'],
    '@stylistic/eol-last': ['error', 'always'],
    '@stylistic/indent': ['error', 2],
    '@stylistic/quotes': ['error', 'single'],
    '@stylistic/comma-dangle': ['error', 'only-multiline'],
    '@stylistic/object-curly-spacing': ['error', 'always'],
    '@stylistic/no-multi-spaces': 'error',
    '@stylistic/arrow-spacing': 'error',
    '@stylistic/arrow-parens': ['error', 'always'],
    '@stylistic/no-trailing-spaces': 'error',
    '@stylistic/array-bracket-spacing': ['error', 'never'],
    '@stylistic/block-spacing': 'error',
    '@stylistic/brace-style': 'error',
    '@stylistic/comma-spacing': ['error', { before: false, after: true }]
  }
}
