const {
  resolve
} = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const publicPath = '/'

const config = {
  entry: {
    vendor: './src/vendor',
    pc: './src/pc/index',
    mobile: './src/mobile/index'
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[id].js',
    publicPath: publicPath
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /favicon\.png$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]'
          }
        }]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              root: resolve(__dirname, 'src', 'img'),
              attr: ['img:src', 'link:href']
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        exclude: /favicon\.png$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }]
      }
    ]
  },
  resolve: {
    alias: {
      'src': resolve(__dirname, 'src')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      chunks: ['pc'],
      filename: 'index.html',
      template: './src/pc/index.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      chunks: ['mobile'],
      filename: 'mobile.html',
      template: './src/mobile/index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor']
    })
  ],
  devServer: {
    port: 9000
  }
}

module.exports = config
