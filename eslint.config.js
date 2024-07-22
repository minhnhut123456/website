// eslint.config.js
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");
const eslintPluginImportRecommended = require("eslint-plugin-import");

module.exports = [
  eslintPluginPrettierRecommended,
  eslintPluginImportRecommended,
  // {
  //   "extends": ["plugin:prettier/recommended", "plugin:import/recommended"],
  // "ignorePatterns": ["src/serviceWorker.js",
  // "build/*",
  // "public/*",
  // "flow-typed/*",
  // "coverage"
  // ]
  // }
];
