const capitalize = require('./practice-fun');
const sum = require('./practice-fun');

test('capitalizes a string', () => {
  expect(capitalize('hello world')).toBe('Hello world');
});