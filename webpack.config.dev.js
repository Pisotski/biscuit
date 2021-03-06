const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  watch: true,
  devtool: 'inline-source-map',
  entry: {
    main: ['./src/client/index.js']
  },
  output: {
    publicPath: '/dist/',
    filename: './[name].bundle.js'
  },
  node: {
    fs: 'empty',
    dns: 'empty',
    tls: 'empty',
    net: 'empty',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
            sourceMap: true,
            importLoaders: 1,
            localIdentName: '[name]__[local]___[hash:base64:5]'
          }
        },
        'sass-loader'
      ]
    }]
  },
  plugins: [
    new Dotenv({
      path: path.join(__dirname, '.env'),
    }),
  ]
};
