// 循环实现幂运算
function pow(x, n) {
  var result = 1;
  for (let i = 0; i < n; i++) {
    return (result *= x);
  }
}

// 递归实现
function pow1(x, n) {
  if (n === 1) return x;
  return x * pow1(x, n - 1);
}
