const numbers = [];
let total = 0;
let input;

while (input = prompt('Введите число!')) {
    const value = Number(input);
    console.log(value);
    numbers.push(value);
    console.log(numbers)
};

if (input === null) {
    for (const number of numbers) {
        total += number;
    }
}   console.log(`Общая сумма чисел = ${total}`);

// while (input = prompt('Введите число!')) 
// {    
//     console.log(input);
//     let number = +input; 
//     if (!isNaN(number))
//     input !== null 
//     numbers.push(input);
//     console.log(numbers);
//     total += number;
// }
// console.log(`Общая сумма чисел ${total}`);


