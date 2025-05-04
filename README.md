# Webpack 核心原理实践项目

这个仓库是用于学习和实践 Webpack 前端构建工具的核心原理的演示项目。通过多个实际案例，展示了 Webpack 的各种优化技术和配置方法。

## 项目概述

本项目包含多个 Webpack 配置案例，每个案例演示了不同的 Webpack 功能和优化技术：

- **基础配置** (webpack.config.js): 基本的 Webpack 生产环境配置
- **案例 1** (webpack.case1.js): 演示代码分割和第三方库分离
- **案例 2** (webpack.case2.js): 演示 React 应用的打包优化
- **案例 3** (webpack.case3.js): 演示多入口配置和公共模块提取
- **案例 4** (webpack.case4.js): 演示 Tree-Shaking 优化
- **案例 4-无优化** (webpack.case4-no-shaking.js): 演示禁用 Tree-Shaking 的效果对比

## 技术特性

本项目演示了以下 Webpack 核心特性：

- **代码分割**: 将代码分割成多个块，实现按需加载
- **Tree-Shaking**: 移除未使用的代码，减小打包体积
- **懒加载**: 使用动态导入实现模块懒加载
- **缓存优化**: 使用内容哈希确保有效的浏览器缓存
- **Bundle 分析**: 使用 webpack-bundle-analyzer 可视化打包结果

## 安装与使用

### 安装依赖

```bash
npm install

# 基本构建
npm run build

# 带分析器的构建
npm run build:analyze

# 运行案例1 (代码分割)
npm run build:case1

# 运行案例2 (React 应用优化)
npm run build:case2

# 运行案例3 (多入口配置)
npm run build:case3

# 运行案例4 (Tree-Shaking)
npm run build:case4

# 运行案例4-无优化 (禁用 Tree-Shaking)
npm run build:case4-no-shaking
```

## 目录结构

```
.
├── README.mdwebpack-demo/
├── dist/               # 构建输出目录
├── public/             # 静态资源
│   └── index.html      # HTML 模板
├── src/                # 源代码
│   ├── components/     # 组件目录
│   ├── app.js          # React 应用入口
│   ├── index.js        # 主入口文件
│   ├── largeModule.js  # 演示懒加载的大模块
│   ├── math.js         # 数学工具函数
│   ├── page1.js        # 多入口页面1
│   ├── page2.js        # 多入口页面2
│   ├── tree-shaking-demo.js # Tree-Shaking 演示
│   └── utils.js        # 工具函数
├── webpack.config.js   # 基本 Webpack 配置
├── webpack.case1.js    # 案例1配置
├── webpack.case2.js    # 案例2配置
├── webpack.case3.js    # 案例3配置
├── webpack.case4.js    # 案例4配置
└── webpack.case4-no-shaking.js # 案例4无优化配置
```
