module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:@typescript-eslint/recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "import", "@typescript-eslint"],
  rules: {
    "object-curly-newline": 0,
    "jsx-quotes": ["error", "prefer-double"],
    "react/jsx-filename-extension": 0,
    "react/button-has-type": 0,
    "default-case": 0,
    "@typescript-eslint/no-var-requires": 0,
    quotes: [2, "double", { avoidEscape: true }],
    "import/no-unresolved": 0,
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        tsx: "never",
        ts: "never",
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
