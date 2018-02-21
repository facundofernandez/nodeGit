const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const uglifyJS = require('./webpack/uglify');
const sassJS = require('./webpack/sass');

module.exports = merge(common,
    uglifyJS(),
    sassJS()
);