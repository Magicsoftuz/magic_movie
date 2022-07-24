module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "import/no-cycle": 0,
    "no-console": 0,
    "react/prop-types": 0,
    "linebreak-style": 0,
    quotes: 0,
  },
};
