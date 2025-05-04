const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production', // 生产模式默认启用 Tree-Shaking
  entry: './src/tree-shaking-demo.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist/case4'),
    clean: true,
  },
  // 显式配置优化选项
  optimization: {
    usedExports: true, // 标记使用的导出
    minimize: true, // 启用压缩
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            // 启用各种压缩选项
            unused: true, // 删除未使用的变量和函数
            dead_code: true, // 删除不可达代码
            drop_console: false, // 保留 console 以便观察
          },
          mangle: true, // 混淆变量名
          keep_classnames: false, // 不保留类名
          keep_fnames: false, // 不保留函数名
        },
        extractComments: false, // 不提取注释
      }),
    ],
  },
  // 添加 source map 以便查看优化结果
  devtool: 'source-map',
  plugins: [
    // 使用 Bundle Analyzer 可视化打包结果
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: 'report.html',
      openAnalyzer: false,
    }),
  ],
  // 添加 Tree-Shaking 相关配置
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                modules: false, // 保留 ES 模块语法，这对 Tree-Shaking 至关重要
                targets: '> 0.25%, not dead',
              }],
            ],
          },
        },
      },
    ],
  },
};