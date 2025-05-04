export function formatDate(date) {
  return date.toISOString().split('T')[0];
}

export function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// 这个函数会被使用，应该保留在最终打包中
export function add(a, b) {
  console.log('调用了 add 函数');
  return a + b;
}

// 这个函数不会被使用，应该被 Tree-Shaking 移除
export function subtract(a, b) {
  console.log('调用了 subtract 函数');
  return a - b;
}

// 这个函数不会被使用，应该被 Tree-Shaking 移除
export function multiply(a, b) {
  console.log('调用了 multiply 函数');
  return a * b;
}

// 这个函数不会被使用，应该被 Tree-Shaking 移除
export function divide(a, b) {
  console.log('调用了 divide 函数');
  if (b === 0) {
    throw new Error('除数不能为零');
  }
  return a / b;
}

// 这个常量会被使用，应该保留
export const PI = 3.14159;

// 这个常量不会被使用，应该被移除
export const E = 2.71828;