const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        app: "./app.js",
        vendor: "./src/vendor.js",
        main: "./sass/main.scss"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                query: {
                    presets: [
                        "@babel/preset-env",
                    ]
                }
            },
            {
                test: /\.scss$/,
                enforce: "pre",
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "css/[name].css",
                        }
                    },
                    {
                        loader: "extract-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "postcss-loader"
                    },
                    {
                        loader: "sass-loader" //1. Turns sass into css
                    }
                ]
            }
        ]
    },
    devtool: 'source-map',
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    stats: {
        colors: true
    },
};
