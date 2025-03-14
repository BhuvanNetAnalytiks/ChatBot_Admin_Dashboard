import reactPlugin from 'eslint-plugin-react';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import typescriptParser from '@typescript-eslint/parser';

export default [
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        browser: true,
        es2021: true,
      },
      parser: typescriptParser, 
    },
    plugins: {
      react: reactPlugin,
      "@typescript-eslint": typescriptPlugin,
      import: importPlugin,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "import/no-unresolved": "error",
    },
    settings: {
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json"
        },
        alias: {
          map: [
            ["@snowflake-ui", "./packages/components/snowflake-ui"],
            ["@shared", "./packages/shared"],
          ],
          extensions: [".js", ".jsx", ".ts", ".tsx"]
        }
      }
    }
  }
];
