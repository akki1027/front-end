module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        // prettierと併用、必ずprettierを配列の最後に記述する
        "prettier"
    ],
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
        // prettierを導入している場合、prettierがセミコロンを追加してくれる
        // "semi": ["error", "always", { "omitLastInOneLineBlock": true }]
    },
    "plugins": [
        "@babel"
    ],
};
