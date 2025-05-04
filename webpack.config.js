const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    // 默认情况下不启用分析器，通过环境变量控制
    process.env.ANALYZE && new BundleAnalyzerPlugin()
  ].filter(Boolean),
};