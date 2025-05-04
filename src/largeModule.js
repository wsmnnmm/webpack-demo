// 模拟一个大型模块
import lodash from 'lodash';

export function initApp() {
  console.log('大型模块已加载');
  console.log('使用 lodash:', lodash.random(1, 100));
}