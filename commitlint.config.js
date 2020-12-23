module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'docs',
        'dev',
        'feature',
        'fix',
        'hotfix',
        'improvement',
        'refactor',
        'test'
      ]
    ]
  }
}
