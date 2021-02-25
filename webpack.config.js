import webpack from 'webpack';
import htmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: './src/client/index.js',
  output: {
    path: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader', options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader', options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
      // {
      //   test: /\.(png|jpe?g|gif)$/i,
      //   loader: 'file-loader',
      //   options: {
      //     name: '[name], [ext]',
      //     outputPath: 'img/',
      //     publicPath: 'img/'
      //   }
        
      // }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'src/client/index.html'
    }),
   // new LiveReloadPlugin()
  ]
}
