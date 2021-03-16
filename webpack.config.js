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
    loaders: [
      {
        test: /\.jsx?/,
        include: srcPath,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/react', '@babel/env']
        }
      }
    ]
  }
};
