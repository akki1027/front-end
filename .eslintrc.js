module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parser": "@babel/eslint-parser",
    "parserOptions": {
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "globals": {
        // グローバルに以下のものがあると明示しておく
        "$": "readonly",
        "JQuery": "readonly",
    },
    "rules": {
        "semi": ["error", "always", { "omitLastInOneLineBlock": true }]
    },
    "plugins": [
        "@babel"
    ],
};
