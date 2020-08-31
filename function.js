// // Функции
// // Function Declaration
// function greet(name) {
//     console.log('Hi - ', name);
// }
// // Function Expression
// const greet2 = function greet2(name) {
//     console.log('Hi2 -', name);
// }
// // greet('Lena')
// // greet2('Nastia')

// // Анонимные
// let counter = 0
// const interval = setInterval(function() {
//     if (counter === 10) {
//         clearInterval(interval)
//     } else {
//         console.log(++counter);
//     }
//     console.log(++counter);
// }, 900)

// Стрелочные
// const arrow = (name) => {
//     console.log('Привет - ', name);
// }
// const arrow2 = name => console.log('Привет - ', name);
// arrow2('Alex');
// const pow2 = num => {
//     return num ** 2
// }
// console.log(pow2(5));

// Параметры по умолчанию
// const sum = (a, b) => a + b
// console.log(sum(10, 12));
// function sumAll(...all) {
//     let result = 0
//     for (let num of all) {
//         result += num\D
//     }
//     return result
// }

// const res = sumAll(1, 2, 3, 4, 5, 6, 7)
// console.log(res);

// Замыкания
function createMember(name) {
  return function (lastName) {
    console.log(name + lastName);
  };
}

const logWithLastName = createMember("Alex ");
console.log(logWithLastName("Zaporozchenko"));
