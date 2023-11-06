const practiceFun = require('./practice-fun');

test('capitalizes a string', () => {
  expect(practiceFun.capitalize('hello world')).toBe('Hello world');
});

test('reverse a string', () => {
  expect(practiceFun.reverseString('olleh')).toBe('hello');
});

test('Operator calculates correct amount', () => {
  expect(practiceFun.calculator.add(1,2)).toBe(3);
  expect(practiceFun.calculator.multiply(1,2)).toBe(2);
  expect(practiceFun.calculator.subtract(1,2)).toBe(-1);
  expect(practiceFun.calculator.divide(1,2)).toBe(0.5);
});

test('caesarCipher outputs letter+3', () => {
  expect(practiceFun.caesarCipher('hallo')).toBe('kdoor');
});

test('caesarCipher outputs letter+3 with CASE correct', () => {
  expect(practiceFun.caesarCipher('Hallo')).toBe('Kdoor');
});

test('analyze array, min/max/length/avg', () => {
  expect(practiceFun.analyzeArray([1,8,3,4,2,6])).toMatchObject(
    { average: 4, min: 1, max: 8, length: 6 })
  });

