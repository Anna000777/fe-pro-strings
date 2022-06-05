import {
  changeWord,
  quantityOfSymbols,
  replaceZAndVFromString,
  truncate,
  quantityOfSymbolsWithIndexOf
} from './index.js';

const changedString = changeWord('my name bohdan and I', 'bohdan', 'vlad'); // Должно вернуть 'my name vlad and I'
// Работаем по первому совпадению, на второе нам все равно. Если совпадений нет, возвращаем оригинальную строку с первого аргумента

console.log(changedString);

const replacedString = replaceZAndVFromString('strt z and v'); // должно вернуть 'strt * and *';

console.log(replacedString);

const truncatedString = truncate('test strubg ', 3); // Должно вернуть 'tes'

console.log(truncatedString);

const cycledSymbols = quantityOfSymbols('Test', 't');

console.log(cycledSymbols); // вернет 2

const cycledSymbolsIndexOf = quantityOfSymbolsWithIndexOf('Test', 't');

console.log(cycledSymbolsIndexOf); // вернет 2