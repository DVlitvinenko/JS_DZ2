// Задание 1

let num1 = Number(prompt('число 1'));
let num2 = Number(prompt('число 2'));
(num1 <= 1 && num2 >= 3) ? console.log('все ок') : console.log('все не ок');

// Задание 2

let test = true;
(test === true) ? console.log('+++') : console.log('---');

// Задание 3

let day = Math.random() * (1 - 32) + 1;
(day < 10) ? console.log('первая') : (day < 20) ? console.log('вторая') : console.log('третья');

// Задание 4

let userNumber = Number(prompt('Введите число'));
console.log(`В числе ${userNumber} cотен: ${Math.floor(userNumber / 100)}, десятков: ${Math.floor(userNumber / 10 % 10)}, единиц: ${userNumber % 10}`);
