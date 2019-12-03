const path = require('path');
const webpack = require('webpack');
const pathToInlineSvg = path.resolve(__dirname, './public/images/');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

const config = {
  mode: 'production',
  entry: {
    'index.js': './components/index.tsx',
    'index.min.js': './components/index.tsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist/umd'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'vault-maker-ui',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.min\.js$/
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.(ts?x)$/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              presets: [['react-app', { flow: false, typescript: true }]]
            }
          }
        ]
      },
      {
        include: pathToInlineSvg,
        test: /\.svg$/,
        use: '@svgr/webpack'
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new TerserPlugin({
      parallel: true,
      terserOptions: {
        ecma: 6
      }
    }),
    new webpack.IgnorePlugin(/test|spec/)
  ]
};

module.exports = config;
