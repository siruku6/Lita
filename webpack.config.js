const path = require('path');
const outputPath = path.resolve(__dirname, 'dist');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'lita.js',
    path: outputPath
  },
  devServer: {
    contentBase: outputPath,
    compress: true,
    host: '0.0.0.0',
    inline: true,
    port: 8080,
    watchContentBase: true
  },
  devtool: "source-map"
}
