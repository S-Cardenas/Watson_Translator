const path = require("path");

module.exports = {
  context: __dirname,
  entry: "./lib/entry.js",
  output: {
    path: path.join(__dirname),
    filename: "bundle.js"
  },
  module: {
  loaders: [
    {
      test: [/\.jsx?$/, /\.js?$/],
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['es2015']
      }
    },
    { test: /\.json$/, loader: 'json' },
  ]
},
  devtool: 'source-map',
  resolve: {
    extensions: ["", ".js", ".jsx" ]
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  watch: true
};
