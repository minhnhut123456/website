import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import pluginPrettier from 'eslint-plugin-prettier/recommended';
import { fixupConfigRules } from '@eslint/compat';
import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  // default jsx, ts, jsx
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),

  // prettier
  pluginPrettier,
  {
    rules: {
      'prettier/prettier': 'error',
    },
  },

  // astro
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      'astro/no-set-html-directive': 'error',
      'react/react-in-jsx-scope': 'off',
    },
  },
];
