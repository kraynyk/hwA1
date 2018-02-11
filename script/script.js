const firstLine = 'qwertyuiop[]';
const secondLine = 'asdfghjk:"';
const thirdLine = 'zxcvbnm,./';

const firstNumericLine = '1234567890';
const secondNumericLine = '9876543210';
const thirdNumericLine = '1029384756';

console.log(firstLine.charAt(0));
console.log(firstLine.charAt(11));

console.log(secondLine.charAt(0));
console.log(secondLine.charAt(9));

console.log(thirdLine.charAt(0));
console.log(thirdLine.charAt(9));

console.log(firstNumericLine.charAt(0));
console.log(firstNumericLine.charAt(9));

console.log(secondNumericLine.charAt(0));
console.log(secondNumericLine.charAt(9));

console.log(thirdNumericLine.charAt(0));
console.log(thirdNumericLine.charAt(9));

let firstType;
let secondType;

firstType = firstLine.indexOf('[');
secondType = firstLine.indexOf(']');
console.log(`Результат пошуку символів: firstType = ${firstType}, secondType = ${secondType}.`)
