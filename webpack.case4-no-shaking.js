const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  mode: 'development', // 开发模式默认不启用 Tree-Shaking
  entry: './src/tree-shaking-demo.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/case4-no-shaking'),
    clean: true,
  },
  // 显式禁用优化
  optimization: {
    usedExports: false, // 不标记使用的导出
    minimize: false, // 不启用压缩
  },
  // 添加 source map 以便查看结果
  devtool: 'source-map',
  plugins: [
    // 使用 Bundle Analyzer 可视化打包结果
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: 'report.html',
      openAnalyzer: false,
    }),
  ],
  // 配置 babel-loader 以转换 ES 模块为 CommonJS
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
                modules: 'commonjs', // 转换为 CommonJS，这会阻止 Tree-Shaking
                targets: '> 0.25%, not dead',
              }],
            ],
          },
        },
      },
    ],
  },
};