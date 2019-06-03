const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: {
        app: "./app.js",
        vendor: "./src/vendor.js",
        main: "./sass/main.scss"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    plugins: [
        new MiniCssExtractPlugin({filename: "./css/[name].css",}),
    ],
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
                    MiniCssExtractPlugin.loader, //3. Extract css into files
                    "css-loader", //2 Turns css into javascript
                    "sass-loader" //1. Turns sass into css
                ]
            }
        ]
    },
    devtool: "source-map",
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    stats: {
        colors: true
    },
};
