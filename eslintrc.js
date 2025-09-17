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
    'max-classes-per-file': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/default-param-last': 'off',
    'default-param-last': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        trailingComma: 'es5',
        printWidth: 100,
      },
    ],
    // 忽略 import 的副檔名檢查
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/prefer-default-export': 'off', // 關閉單一 export 的強制 default
    'no-shadow': 'off', // 關閉變數 shadow
    'no-param-reassign': 'off', // 允許修改函數參數
    '@typescript-eslint/no-shadow': 'off', // TS 版本 shadow
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['./frontend/tsconfig.json', './backend/tsconfig.json'],
        extensions: ['.ts', '.tsx', '.d.ts', '.js', '.jsx'],
      },
    },
  },
};
