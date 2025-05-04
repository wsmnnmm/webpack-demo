import { add, multiply } from './math';
import { formatDate } from './utils';
import _ from 'lodash';

console.log('页面1加载');
console.log('计算结果:', add(10, 5), multiply(2, 3));
console.log('当前日期:', formatDate(new Date()));
console.log('使用 lodash:', _.random(1, 100));