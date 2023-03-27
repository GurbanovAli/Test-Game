const path = require('path')
const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const proxyServer = require('./server')

const OUTPUT_PATH = path.resolve(__dirname, 'dist')

const MODE = ((args) => {
  const tokens = args.match(/--mode=(\w+)/i)
  const mode = tokens && tokens.length > 1 ? tokens[1].toLowerCase() : 'production'
  return mode
})(process.argv.join(' '))

const DEV = MODE === 'development'
// const PROD = MODE === 'production'

const { PORT } = process.env

const config = {
  entry: {
    vendor: [
      'react',
      'react-dom',
      'redux',
      'react-redux',
      'redux-thunk',
      'redux-logger',
    ],
    index: [
      './src/index.tsx'
    ]
  },
  output: {
    path: OUTPUT_PATH,
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.(ts|tsx)$/, use: [{ loader: 'ts-loader' }], exclude: [/node_modules/, /tests/] },
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
      {
        test: /\.(png|jpg|jpe?g|svg)$/,
        use: [{
          loader: 'file-loader',
        }]
      },
      {
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        use: [{
          loader: 'file-loader',
          options: {
            esModule: false,
          },
        }]
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendor',
          chunks: 'initial',
          minChunks: 2
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({ API_PREFIX: '"/api"' }),
    new MiniCssExtractPlugin({ filename: '[name].bundle.css', allChunks: true }),
    new HtmlPlugin({
      template: './src/index.html',
    })
  ],
  devServer: {
    hot: true,
    port: PORT || 3000,
    inline: true,
    disableHostCheck: true,
    contentBase: OUTPUT_PATH,
    historyApiFallback: true,
    before: proxyServer,
  }
}

if (DEV) {
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = config
