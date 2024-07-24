module.exports = {
  // parser: "@babel/eslint-parser", // Adjust according to your project's parser needs
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  plugins: ["reactreuse-plugin", "react"], // Replace with your plugin name
  rules: {
    "reactreuse-plugin/reactreuse-rule": "error", // Replace with your rule name
    "reactreuse-plugin/component-composition": "error", // Replace with your rule name
    "reactreuse-plugin/hooks-usage": "error", // Replace with your rule name
    "reactreuse-plugin/descriptive-props": "error", // Replace with your rule name
    "reactreuse-plugin/prop-spreading": "error", // Replace with your rule name
    "reactreuse-plugin/prop-naming": "error", // Replace with your rule name
    "reactreuse-plugin/inline-styling": "error", // Replace with your rule name
    "reactreuse-plugin/component-naming": "error", // Replace with your rule name
    "reactreuse-plugin/default-props": "error", // Replace with your rule name
    "reactreuse-plugin/uncontrolled-component": "error", // Replace with your rule name
    "reactreuse-plugin/component-size": "error", // Replace with your rule name
    // "reactreuse-plugin/consistent-imports": "error", // Replace with your rule name
    "reactreuse-plugin/consistent-jsx-spacing": "error", // Replace with your rule name
    "reactreuse-plugin/inline-event-binding": "error", // Replace with your rule name
    "reactreuse-plugin/state-init-constructor": "error", // Replace with your rule name
    "reactreuse-plugin/redundant-function-declaration": "error", // Replace with your rule name
    "reactreuse-plugin/redundant-function-code": "error", // Replace with your rule name
  },
  settings: {
    react: {
      version: "detect", // Automatically detect the React version
    },
  },
};
