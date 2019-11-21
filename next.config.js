// next.config.js
const withImages = require('next-images');
const webpack = require('webpack');

module.exports = withImages({
  webpack(config, options) {
    config.plugins.push(new webpack.DefinePlugin({
      'process.env.NETWORK': '"kovan"',
      'process.env.PROVIDER': '"browser"'
    }));
    return config; 
  }
});



