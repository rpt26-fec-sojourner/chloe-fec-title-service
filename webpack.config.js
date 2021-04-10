const path = require('path');
const srcPath = path.join(__dirname, '/client/src');
const distPath = path.join(__dirname, '/client/dist');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // watch: true,
  entry: `${srcPath}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: distPath
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/src/index.html'
    })
  ],
};
