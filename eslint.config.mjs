import eslint from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import stylistic from "@stylistic/eslint-plugin";
import importPlugin from "eslint-plugin-import";
import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";



export default tseslint.config(
  {
    plugins: {
      react: reactPlugin,
      "react-hooks": hooksPlugin,
      "@next/next": nextPlugin,
    },
    rules: {
      ...reactPlugin.configs["jsx-runtime"].rules,
      ...hooksPlugin.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      "react/jsx-key": "warn",
      "@next/next/no-duplicate-head": "off",
    },
    settings: {
      "import/resolver": {
        typescript: true,
        node: true,
      },
    },
  },
  eslint.configs.recommended,
  tseslint.configs.strict,
  importPlugin.flatConfigs.recommended,
  stylistic.configs.customize({
    flat: true,
    arrowParens: false,
    blockSpacing: true,
    braceStyle: "1tbs",
    commaDangle: "always-multiline",
    indent: 2,
    jsx: true,
    semi: true,
    quotes: "double",
    quoteProps: "as-needed",
  }),
  {
    rules: {
      "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
      "import/first": ["error"],
      "import/newline-after-import": ["warn", {
        count: 3,
        exactCount: true,
      }],
      "import/no-absolute-path": ["error"],
      "import/no-mutable-exports": ["error"],
      "import/no-useless-path-segments": ["error"],
      "import/no-unresolved": "off",
      "import/order": ["error", {
        groups: ["builtin", "external"],
        "newlines-between": "always",

        alphabetize: {
          order: "asc",
          orderImportKind: "asc",
          caseInsensitive: true,
        },
      }],
      "@stylistic/no-multiple-empty-lines": "off",
    },
  },
);
