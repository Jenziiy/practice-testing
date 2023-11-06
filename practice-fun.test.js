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



