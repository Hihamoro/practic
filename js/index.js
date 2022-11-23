// 1

const apples = 47;
const grapes = 135;
const total = apples + grapes;
console.log(total)
const diff = apples - grapes;
console.log(diff)

// 2

let students = 100;
students = students + 50;
console.log(students);

// 4

const value = 27.5;
console.log(Math.floor(value));
console.log(Math.ceil(value));
console.log(Math.round(value));

// 5

const companyName = 'Cyberdyne Systems';
const repairBots = 150;

const message = `${companyName} has ${repairBots} bots in stock`;
console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// 6

let weight = '88,3';
let height = '1.75';

const bmi = Number.parseFloat(weight) / (Number.parseFloat(height) ** 2);
console.log((bmi).toFixed(1)); // 28.7

// 9
let totalMinutes
totalMinutes = 70
const hour = Math.floor(totalMinutes / 60)
const minute = totalMinutes % 60
console.log(`${hour}:${minute}`)

// 10

const year = Number(prompt('Перевірь чи є рік високосним: '));
const newYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
console.log(Boolean(newYear));
