import { subtract, divide } from './math';
import { capitalizeString } from './utils';
import _ from 'lodash';

console.log('页面2加载');
console.log('计算结果:', subtract(10, 5), divide(10, 2));
console.log('格式化文本:', capitalizeString('hello world'));
console.log('使用 lodash:', _.uniq([1, 2, 2, 3, 4, 4, 5]));