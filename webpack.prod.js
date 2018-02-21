const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const uglifyJS = require('./webpack/uglify');
const sassJS = require('./webpack/sass');
const browser = require('./webpack/browserSync');



module.exports = merge(common,
    uglifyJS(),
    sassJS(),
    browser()
);