// 只导入 utils 中的部分功能
import { add, PI } from './utils';

// 使用导入的功能
console.log('5 + 3 =', add(5, 3));
console.log('PI 值为:', PI);

// 注意：subtract, multiply, divide 和 E 没有被导入，应该被 Tree-Shaking 移除