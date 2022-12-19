const factorial = (n) => {
  if (n < 0) {
    throw new Error('팩토리얼은 양의 정수에서만 가능합니다');
  }

  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
};

module.exports = factorial;
