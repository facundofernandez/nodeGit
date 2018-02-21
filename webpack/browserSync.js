'use strict';

const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = function(){
    return {
        plugins: [
            new BrowserSyncPlugin({
              // browse to http://localhost:3000/ during development,
              // ./public directory is being served
              host: 'localhost',
              port: 4040,
              proxy: 'http://localhost:5555/',
              //server: { baseDir: ['public'] }
            })
          ]


    }
};
