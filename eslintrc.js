module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-base', // Airbnb 規範
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // Prettier 插件 + 關閉衝突規則
  ],
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        trailingComma: 'es5',
        printWidth: 100,
      },
    ],
    'import/extensions': [
      // 忽略 import 的副檔名檢查
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
      },
    ],
    'import/prefer-default-export': 'off', // 關閉單一 export 的強制 default
  },
  settings: {
    'import/resolver': {
      // 確保 TypeScript resolver 有被啟用
      typescript: {
        alwaysTryTypes: true,
        project: ['./frontend/tsconfig.json', './backend/tsconfig.json'],
      },
    },
  },
};
