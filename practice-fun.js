const capitalize = (aString) => aString[0].toUpperCase() + aString.slice(1);
const reverseString = (aString) => aString.split("").reverse().join("");

const calculator = {
  add:      (a,b) => a+b,
  subtract: (a,b) => a-b,
  divide:   (a,b) => a/b,
  multiply: (a,b) => a*b, 
};

module.exports = {
capitalize,
reverseString,
calculator,
}