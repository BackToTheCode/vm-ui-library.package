const path = require('path');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('babel-loader')
      },
      {
        loader: require.resolve('react-docgen-typescript-loader')
      }
    ]
  });
  config.resolve.extensions.push('.ts', '.tsx');

  config.plugins.push(
    new ForkTsCheckerWebpackPlugin({
      async: false,
      checkSyntacticErrors: true,
      formatter: require('react-dev-utils/typescriptFormatter')
    })
  );

  config.plugins.push(new webpack.IgnorePlugin(/test/));
  return config;
};
