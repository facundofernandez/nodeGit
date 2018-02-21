'use strict';

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "./css/style.css"
});

module.exports = function () {
    return {
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    exclude: /(node_modules|bower_components)/,
                    use: ExtractTextPlugin.extract({
                        use: [
                            {
                                loader: "css-loader" // translates CSS into CommonJS
                            }, {
                                loader: "sass-loader" // compiles Sass to CSS
                            }],
                        // use style-loader in development
                        fallback: "style-loader"
                    }),
                }
            ]
        },
        plugins: [
            extractSass
        ]
    }
};
