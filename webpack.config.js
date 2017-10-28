const webpack = require('webpack')
const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
  devtool: 'source-map',
  entry: {
    'bundle': [
      'babel-polyfill',
      'react-hot-loader/patch',
      './src/index'
    ]
  },
  plugins: [
    new Dotenv({path: './.env'})
  ],
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    port: 3000,
    proxy: {
      "/graphql": "http://localhost:4000",
    }
  },
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      }
    ]
  }
}
