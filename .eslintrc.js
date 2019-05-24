module.exports = {
    'env': {
        'browser': true,
        'node': true,
        'es6': true
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        "ecmaVersion": 6,
        'ecmaFeatures': {
            'jsx': false
        },
        'sourceType': 'module'
    },
    'plugins': [],
    'rules': {
        'indent': [2, 4],
        'no-console': 0,
        'linebreak-style': [2, 'unix'],
        'quotes': 'off',
        'semi': [2, 'always'],
        'brace-style': [2, '1tbs'],
        'array-bracket-spacing': [2, 'never'],
        'camelcase': [2, {'properties': 'always'}],
        'keyword-spacing': [2],
        'eol-last': [2],
        'no-trailing-spaces': [2]
    },
    'globals': {
    }
}