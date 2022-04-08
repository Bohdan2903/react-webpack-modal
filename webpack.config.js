const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/index.tsx',
  node: {
    __filename: true,
  },
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, 'build/'),
    filename: 'js/[name]-[hash:5].min.js',
    chunkFilename: 'js/[name]-[hash:5].min.js',
    publicPath: '/',
  },
  resolve: {
    modules: [path.resolve(__dirname, './src/'), 'node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss', '.json'],
    mainFields: ['browser', 'main', 'module'],
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 3001,
    open: false,
    host: '0.0.0.0',
  },
  module: {
    rules: [
      {
        test: /.(scss|css)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: false,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /.(js|jsx|ts|tsx)(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /.(woff|woff2|eot|ttf|otf)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'fonts',
          },
        },
      },
      {
        test: /.(png|jpg|jpeg|ico|gif|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'img',
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:5].css',
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: './index.html',
    }),
  ],
}
