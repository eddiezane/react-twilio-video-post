var path = require('path')

module.exports = {
  entry: path.join(__dirname, 'public', 'quickstart.js'),
  output: {
    path: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ["react", "es2015", "stage-2"]
        }
      }
    ]
  }
}
