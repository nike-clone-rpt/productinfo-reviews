const path = require('path');

module.exports = {
  mode: 'development',
  entry: './client/src/components/Index.jsx',
  output: {
    path: __dirname + '/public/dist',
    //^^^^^^^^CHECK UP ON THIS
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, 'client/src/components')],
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
};
