import { add } from './math';
import { formatDate } from './utils';

console.log('计算结果:', add(5, 3));
console.log('当前日期:', formatDate(new Date()));

// 模拟一个大型应用
import('./largeModule').then(module => {
  const { initApp } = module;
  initApp();
});