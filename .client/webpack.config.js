var path = require('path')

module.exports = {
  entry: "./main.js",
  output: {
    path: path.resolve(__dirname, '../public'),
    publicPath: '/',
    filename: "build.js"
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue!eslint'
    }, {
      // use babel-loader for *.js files
      test: /\.js$/,
      loader: 'babel!eslint',
      // important: exclude files in node_modules
      // otherwise it's going to be really slow!
      exclude: /node_modules/
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: 'file?name=[name].[ext]?[hash]'
    }]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  devtool: 'inline-source-map'
}