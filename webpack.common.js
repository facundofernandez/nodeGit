'use strict';

const path = require('path');

let entry = [
    "./dev/js/app.dev.js",
    "./dev/sass/main.scss"
];

let output = "js/app.js";

const config = {
    // Archivo/s de entrada a interactuar
    entry: entry,
    // Archivo de Salida
    output: {
        filename: output,
        path: path.resolve(__dirname, 'public')
    },
    // Modulos para los loader
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};

module.exports = config;