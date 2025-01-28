const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',  // entry point for the app
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',  // output bundle
  },
  module: {
    rules: [
      {
        test: /\.js$/,  // transpile JS files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],  // resolves files without needing extensions
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    hot: true,  // enable hot reloading
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',  // template for the HTML file
    }),
  ],
};
