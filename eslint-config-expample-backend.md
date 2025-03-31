# this is an example for a backend solution for ES-lint config.mjs file

copy that to your eslint.config.js or mjs

```mjs
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    files: ["**/*.{ts,tsx}"],
    ignores: ["**/*.d.ts"],
  },
  {
    files: ["**/*.{ts,tsx}"],
    plugins: { typescript: tseslint },
    languageOptions: { parser: tseslint.parser },
    extends: [tseslint.configs.recommended],
    rules: {
      indent: ["error", 2],
      quotes: ["error", "single", { avoidEscape: true }],
      semi: ["error", "always"],
      "comma-dangle": ["error", "always-multiline"],
      "object-curly-spacing": ["error", "always"],
      "arrow-parens": ["error", "always"],
      eqeqeq: ["error", "always"],
      "no-multiple-empty-lines": ["error", { max: 1 }],
      "no-trailing-spaces": "error",
    },
  },
]);
```

and run it with:

```sh
npx eslint "src/**/*.ts"
```
