/**
 * Мы передаем строку и должны заменить любую z или v вне зависимости от регистра
 * на символ звездочки *
 * @param {string} string
 * @returns {string}
 */
export const replaceZAndVFromString = (string) => {
    let newString = '';
    for (let letter of string.toLowerCase()) {
        if (letter === 'z' || letter === 'v') {
            let star = '*';
            newString = `${newString}${star}`;
        } else {
            newString = `${newString}${letter}`;
        }
    }
    return newString;
};

/**
 * Функция должна принять 3 аргумента и все строки. Мы передаем строку,
 * вторая строка это искомое слово, третья это то слово, на которое мы должны
 * заменить. Смотрите использование в файле check.js рядом. Должно вернуть строку
 * 1 аргумента с замененным словом(2 аргумент) на слово(3 аргумент)
 * @param {string} string
 * @param {string} word
 * @param {string} newWord
 * @returns {string}
 */
export const changeWord = (string, word, newWord) => {
    let newString = '';
    if (string.toLowerCase().includes(word.toLowerCase())) {
        let index = string.toLowerCase().indexOf(word.toLowerCase());
        let lastIndex = string.toLowerCase().lastIndexOf(word.toLocaleLowerCase());
        newString = `${string.slice(0,index)}${newWord}${string.slice(lastIndex + word.length)}`;
    } else {
        newString = string;
    }
    return newString;
};

/**
 * Должна вернуть строку(1 аргумент) на обрезанную по длине(2 аргумент, число)
 * @param {string} string
 * @param {number} length
 * @returns {string}
 */
export const truncate = (string, length) => {
    let newString = '';
    newString = `${newString}${string.substring(0,length)}`
    return newString;
};

/**
 * Принимает строку в первом аргументе, и символ во втором
 * И должно вернуть количество этих символов в этой строке
 * Попробуйте реализовать просто через цикл for и с проверкой
 * посимвольно. Кстати, проверка регистронезависимая. Если у нас
 * строка 'I am ivan' и хочу найти количество символов i то будет
 * их 2, и если I то тоже 2
 * @param {string} string
 * @param {string} symbol
 * @returns {number}
 */
export const quantityOfSymbols = (string, symbol) => {
    let counter = 0;
    for (let letter of string.toLowerCase()) {
        if (letter === symbol.toLowerCase()) {
            counter++;
        }
    }
    return counter;
};

/**
 * Принимает строку в первом аргументе, и символ во втором
 * И должно вернуть количество этих символов в этой строке
 * Попробуйте реализовать через метод indexOf. Напомню, в
 * нем есть второй аргумент, который говорит, от какой позиции
 * делать поиск. Я хочу, чтобы вы сделали бесконечный цикл
 * while и искали символы этим методом, и сделали break когда позиций
 * больше нет. Так будет более оптимально, меньше проходов цикла.
 * Кстати, проверка регистронезависимая. Если у нас
 * строка 'I am ivan' и хочу найти количество символов i то будет
 * их 2, и если I то тоже 2
 * @param {string} string
 * @param {string} symbol
 * @returns {number}
 */
export const quantityOfSymbolsWithIndexOf = (string, symbol) => {
    let counter = 0;
    let index = 0;
    outer: while (true) {
        let matchIndex = string.toLowerCase().indexOf(symbol.toLowerCase(), index);
        //console.log(matchIndex);
        if (matchIndex >= 0) {
            index = matchIndex + 1;
            counter++;
        } else if (matchIndex === -1) {
            break outer;
        }
    }
    return counter;
};