module.exports = {
  "extends": "eslint:recommended",

  "env": {
    "node": true,
    "es6": true,
    "browser": false
  },

  "rules": {
    "arrow-body-style": ["error", "as-needed"],
    "brace-style": ["error", "1tbs"],
    "camelcase": "error",
    "complexity": ["error", { "max": 6 }],
    "curly": "error",
    "dot-notation": "error",
    "eqeqeq": ["error", "smart"],
    "handle-callback-err": "error",
    "indent": ["error", 2],
    "global-require": "error",
    "max-len": ["error", 120],
    "new-cap": "error",
    "newline-after-var": ["error", "always"],
    "newline-before-return": "error",
    "no-array-constructor": "error",
    "no-confusing-arrow": "error",
    "no-console": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-global-assign": "error",
    "no-implicit-coercion": "error",
    "no-implied-eval": "error",
    "no-invalid-this": "error",
    "no-iterator": "error",
    "no-lonely-if": "error",
    "no-loop-func": "error",
    "no-multi-spaces": "error",
    "no-new-func": "error",
    "no-new-require": "error",
    "no-new-wrappers": "error",
    "no-param-reassign": "error",
    "no-path-concat": "error",
    "no-process-exit": "error",
    "no-proto": "error",
    "no-return-assign": "error",
    "no-self-compare": "error",
    "no-sync": "error",
    "no-unused-vars": ["error", { "vars": "all", "args": "none" }],
    "no-use-before-define": "error",
    "no-useless-call": "error",
    "no-useless-concat": "error",
    "no-var": "error",
    "no-void": "error",
    "no-with": "error",
    "one-var-declaration-per-line": ["error", "always"],
    "prefer-const": "error",
    "quotes": ["error", "single"],
    "radix": "error",
    "wrap-iife": ["error", "inside"]
  }
};
