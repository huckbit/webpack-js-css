const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');

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
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin({cssProcessorOptions: {map: {inline: false}}}),
            new TerserPlugin()
        ]
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
                    MiniCssExtractPlugin.loader, //4. Extract css into files
                    "css-loader", //3 Turns css into javascript
                    {
                        loader: "postcss-loader",  //2. Runs Autoprefixer
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('autoprefixer')
                            ]
                        }
                    },
                    "sass-loader", //1. Turns sass into css
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
