const person = {
    name: 'Alex',
    age: 25,
    isProgrammer: true,
    languages: ['ru', 'ua', 'en'],
    // 'complex key': 'Complex Value',
    // ['key_' + (1 + 3)]: 'Computed Key',
    greet() {
        console.log('gree from person');
    },
    info() {
        // console.log('this:', this);
        console.info('information about a person by name:', this.name);
    }
}

// console.log(person.name);
// const ageKey = 'age';
// console.log(person[ageKey]);
// console.log(person['complex key']);
// person.greet();
// person.age++
// person.languages.push('by')
// // person['key_4'] = undefined
// delete person['key_4']
// console.log(person);
// console.log(petson['key_4']);

// const name = person.name;
// const age = person.age;
// const languages = person.languages;


// const {name, age: personAge = 10, languages} = person;

// for (let key in person) {
//     if(person.hasOwnProperty(key)){
//     console.log('key:', key)
//     console.log('value:',person[key] );
//     }
// }

// Object.keys(person).forEach((key) => {
//     console.log('key:', key);
//     console.log('value:', person[key]);
// })
// person.info()

const logger = {
    keys() {
        console.log('Object Keys:', Object.keys(this));
    },
    keysAndValues() {
        Object.keys(this).forEach(key => {
            console.log(`"${key}": ${this[key]}`);
        })
    },

    withParams(top = false, between = false, bottom = false) {
        if (top) {
            console.log('---- Start ----');
        }
        Object.keys(this).forEach( (key, index, array) => {
            console.log(`"${key}": ${this[key]}`);
            if (between && index !== array.length - 1) {
                console.log('---- ----');
            }
        })
        if (bottom) {
            console.log('---- End ----');
        }
    }
}

// const bound  = logger.keys.bind(logger);
// bound();
// logger.keys.call(person);
// logger.keysAndValues.call(person);
// logger.withParams.call(person, true, true, true);
logger.withParams.apply(person, [true, true, true]);