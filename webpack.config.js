const path = require('path');
const srcPath = path.join(__dirname, '/client/src');
const distPath = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${srcPath}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: distPath
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: srcPath,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      }
    ]
  }
};
