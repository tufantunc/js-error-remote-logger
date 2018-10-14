module.exports = {
    "env": {
        "browser": true,
        "es6": true,
    },
    "extends": [
        "airbnb-base",
    ],
    "rules": {
        "linebreak-style": [1, "windows"],
        "indent": [1, 4],
        "no-unused-vars": ["error", { "varsIgnorePattern": "jserl" }]
    }
};