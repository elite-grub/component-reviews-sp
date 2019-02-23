module.exports = {
  entry: __dirname + '/client/src/index.jsx',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ] 
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/client/dist'
  }
};