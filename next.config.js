const dotenv = require('dotenv');
const path = require('path');

const { parsed: localEnv } = dotenv.config({
  path: path.resolve(__dirname, `./config/${process.env.NODE_ENV}.env`)
});

const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/
});
const withImages = require('next-images');
const webpack = require('webpack');

module.exports = withMDX(
  withImages({
    webpack(config, options) {
      config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
      config.plugins.push(new webpack.DefinePlugin({
        "process.env.NETWORK": process.env.NETWORK || "kovan",
        "process.env.PROVIDER": process.env.PROVIDER || "browser"
			}));
      return config;
    }
  })
);
