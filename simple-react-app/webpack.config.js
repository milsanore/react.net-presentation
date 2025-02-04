import HtmlWebpackPlugin from "html-webpack-plugin"
import path from "path"

export default {
  entry: './src/index.js',  // entry point for the app
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',  // output bundle
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Matches .js and .jsx files
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
      directory: path.resolve('dist'),
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
