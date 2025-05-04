const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  // 多入口配置
  entry: {
    page1: './src/page1.js',
    page2: './src/page2.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist/case3'),
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single', // 提取 runtime 代码
    splitChunks: {
      chunks: 'all',
      // 自动分割所有共享模块
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
        // 提取公共模块
        commons: {
          name: 'commons',
          minChunks: 2, // 至少被两个 chunk 引用
          chunks: 'initial',
          priority: -10
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'page1.html',
      chunks: ['page1']
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'page2.html',
      chunks: ['page2']
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: 'report.html',
      openAnalyzer: false
    })
  ],
};