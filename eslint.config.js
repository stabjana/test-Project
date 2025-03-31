import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "script" }
  },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], languageOptions: { globals: globals.browser } },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: { js },
    extends: [
      "js/recommended",
    ],
    rules: {
      "indent": ["error", 2], // Enforce 2-space indentation
      "quotes": ["error", "single", { "avoidEscape": true }], // Prefer single quotes unless escaping
      "semi": ["error", "always"], // Always require semicolons
      "comma-dangle": ["error", "always-multiline"], // Trailing commas for cleaner diffs
      "object-curly-spacing": ["error", "always"], // Space inside `{}` for readability
      "arrow-parens": ["error", "always"], // Always use parentheses for arrow functions
      "eqeqeq": ["error", "always"], // Enforce `===` over `==`
      "no-multiple-empty-lines": ["error", { "max": 1 }], // No excessive empty lines
      "no-trailing-spaces": "error", // Remove spaces at end of lines
      "react/jsx-indent": ["error", 2], // Enforce 2-space indentation in JSX
    },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
]);