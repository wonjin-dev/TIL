const factorial = require('../src');

describe('Factorial function', () => {
  it('correctly computes factorial of a positive integer number', () => {
    expect(factorial(3)).toEqual(6);
  });

  it('throws error, negative input is provided', () => {
    expect(() => {
      factorial(-1);
    }).toThrow('팩토리얼은 양의 정수에서만 가능합니다');
  });
});
