const capitalize = (aString) => aString[0].toUpperCase() + aString.slice(1);
const reverseString = (aString) => aString.split("").reverse().join("");

const calculator = {
  add:      (a,b) => a+b,
  subtract: (a,b) => a-b,
  divide:   (a,b) => a/b,
  multiply: (a,b) => a*b, 
};

const caesarCipher = (aString) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzabc';
  const letterArr = [];
  Array.from(aString).forEach(letter => letterArr.push(alphabet.at(alphabet.indexOf(letter)+3)));
  return letterArr.join("");
};

module.exports = {
capitalize,
reverseString,
calculator,
caesarCipher,
}