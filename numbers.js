// const num = 42 
// const float = 42.42
// const pow = 10e3


// console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER);
// console.log('Math.pow 53', Math.pow(2, 53) - 1);
// console.log('MIN_SAFE-INTEGER', Number.MAX_SAFE_INTEGER);
// console.log('MAX_VALUE', Number.MAX_VALUE);
// console.log('MIN_VALUE', Number.MIN_VALUE);
// console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY);
// console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY);
// console.log('2 / 0', 2 / 0);
// console.log(Number.NaN);
// console.log(typeof NaN);
// const weird  = 2 / undefined
// console.log(Number.isNaN(weird));
// console.log(Number.isNaN(42));
// console.log(Number.isFinite(Infinity));
// console.log(Number.isFinite(42));

// const stringint = '40';
// const stringFloat = '40.42';
// console.log(Number.parseInt(stringInt) + 2);
// console.log(Number(stringInt) + 2);
// console.log(+stringInt + 2);

// console.log(.4 + .2);
// console.log(+(.4 + .2).toFixed(1));
// console.log(parseFloat((.4 + .2).toFixed(1)));


// BitInt
// console.log(9007199254740991999n - 9007199254740991n);
// console.log(-9007199254740991999n);
// console.log(9007199254740991.231n); // error

// console.log(10n -4); // error
// console.log(parseInt(10n) - 4); // 6
// console.log(10n - bigInt(4)); // 6n
// console.log(5n / 2n); // 2n

// Math
// console.log(Math.E);
// console.log(Math.PI);

// console.log(Math.sqrt(25));
// console.log(Math.pow(5, 2));
// console.log(Math.abs(-42));
// console.log(Math.max(42, 12, 24, 4, 45, 32, 98));
// console.log(Math.min(42, 12, 24, 4, 45, 32, 98));
// console.log(Math.floor(2.96));
// console.log(Math.ceil(4.3));
// console.log(Math.random());


function getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(getRandomBetween(10, 42));
