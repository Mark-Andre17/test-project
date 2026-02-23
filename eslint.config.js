import fsd from "eslint-plugin-fsd-lint";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

import js from "@eslint/js";

export default defineConfig([
  globalIgnores(["dist"]),

  // Базовая конфигурация
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },

  // Правила FSD
  {
    files: ["**/*.{ts,tsx}"],
    plugins: { fsd },
    settings: {
      fsd: {
        alias: "@",
        layers: ["app", "pages", "widgets", "features", "entities", "shared"],
      },
    },
    rules: {
      "fsd/no-relative-imports": ["error", {}],

      "fsd/no-public-api-sidestep": "error",

      "fsd/forbidden-imports": [
        "error",
        {
          alias: "@",
        },
      ],
    },
  },
]);
