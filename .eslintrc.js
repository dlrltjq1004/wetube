module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["airbnb-base"],
  extends: ["plugin:prettier/recommended"],
  // globals: {
  //   Atomics: "readonly",
  //   SharedArrayBuffer: "readonly"
  // },
  // parserOptions: {
  //   ecmaVersion: 2018,
  //   sourceType: "module"
  // },
  rules: {
    "no-console": "off",
    indent: 0
  },
  "parserOptions": {
    "sourceType": "module"
  },
  "parser": "babel-eslint"
};