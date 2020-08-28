// const cars = ["mazda", "ford", "mercedes"];
// // const people = [
// //     {name: 'Alexey', budget: 4200},
// //     {name: 'Kostick', budget: 4000},
// //     {name: 'Nastya', budget: 1000}
// // ]

// const fib = [1, 1, 2, 3, 5, 8, 13];

// //function
// function addItemToEnd() {}
// // method
// // cars.push('reno')
// // cars.unshift('Volga')
// // const firstCar = cars.shift()
// // const lastCar = cars.pop()
// // console.log(firstCar);
// // console.log(lastCar);
// // console.log(cars);

// // console.log(cars.reverse());
// // console.log(cars);
// // const index = cars.indexOf('mazda')
// // cars[index] = 'Porsche'
// // console.log(cars);
// // let findedPerson
// // for (const person of people) {
// //     if (person.budget === 4000) {
// //         findedPerson = person
// //     }
// // }
// // console.log(findPerson);

// // const index = people.findIndex(function(person) {
// //     return person.budget === 1000
// // })
// // const person = people.find(function(person) {
// //     return person.budget === 1000
// // })
// // const person = people.find(person => person.budget === 4000)
// // console.log(person);
// // console.log(cars.includes('mazda'));

// // const upperCaseCars = cars.map(car => {
// //     return car.toUpperCase()
// // })
// // const pow2 = num => num ** 2
// // const sqrt = num => Math.sqrt(num)

// // const pow2Fib = fib.map(pow2).map(Math.sqrt)
// // console.log(pow2Fib);
// // const pow2Fib = fib.map(pow2)
// // const filteredNumbers = pow2Fib.filter(num => {
// //     return num > 20
// // })
// // console.log(pow2Fib);
// // console.log(filteredNumbers);
// // // task 1
// // const text = 'Hi, we learn JavaScript'
// // const reverseText = text.split('').reverse().join(' ')
// // console.log(reverseText);

// const people = [
//   { name: "Alexey", budget: 4200 },
//   { name: "Kostick", budget: 4000 },
//   { name: "Nastya", budget: 1000 },
// ];

// const allBudget = people
//   .filter((person) => person.budget > 2000)
//   .reduce((acc, person) => {
//     acc += person.budget;
//     return acc;
//   }, 0);
// console.log(allBudget);
