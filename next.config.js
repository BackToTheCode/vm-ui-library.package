const dotenv = require('dotenv');
const path = require('path');

const { parsed: localEnv} = dotenv.config({ path: path.resolve(__dirname, `./config/${process.env.NODE_ENV}.env`)});

const withImages = require('next-images');
const webpack = require('webpack');

module.exports = withImages({
  webpack(config, options) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv))
    return config; 
  }
});



