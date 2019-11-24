const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');
const webpack = require('webpack');
const pathToInlineSvg = path.resolve(__dirname, '../public/images/');

module.exports = ({ config }) => {
  // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
  config.module.rules[0].use[0].loader = require.resolve('babel-loader');

  // use @babel/preset-react for JSX and env (instead of staged presets)
  config.module.rules[0].use[0].options.presets = [
    require.resolve('@babel/preset-react'),
    require.resolve('@babel/preset-env')
  ];

  // use @babel/plugin-proposal-class-properties for class arrow functions
  config.module.rules[0].use[0].options.plugins = [
    require.resolve('@babel/plugin-proposal-class-properties')
  ];

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]]
    }
  });

  config.resolve.extensions.push('.ts', '.tsx');

  // svg with @svgr
  const fileLoaderRule = config.module.rules.find(rule =>
    rule.test.test('.svg')
  );
  fileLoaderRule.exclude = pathToInlineSvg;
  config.module.rules.push({
    test: /\.svg$/,
    include: pathToInlineSvg,
    use: ['@svgr/webpack', 'url-loader'],
  });
  config.resolve.extensions.push('.svg');

  config.plugins.push(new TSDocgenPlugin());
  config.module.rules.push({
    test: /\.stories\.tsx?$/,
    loaders: [require.resolve('@storybook/source-loader')],
    enforce: 'pre'
  });
  // config.resolve.extensions.push('.ts', '.tsx');

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
