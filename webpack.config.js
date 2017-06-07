const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main',
  resolve: {
    extensions: ['.js', '.html']
  },
  module: {
    rules: [
      {
        test: /\.(html|js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'svelte-loader'
      }
    ]
  },
  plugins: [ new HtmlWebpackPlugin({ title: require('./package.json').name }) ],
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  devServer: {
    port: 9090
  }
};
