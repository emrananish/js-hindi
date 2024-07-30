// let x = 10;
// if (x == 10) {
//     let x = 20;
//     console.log(x); // 20:  reference x inside the block
// }
// console.log(x); // 10: reference at the begining of the script

// for (var i = 0; i < 5; i++) {
// 	console.log("Inside the loop:", i);
// }

// console.log("Outside the loop:", i);

// const person = { age: 20 };
// person.age = 30; // OK
// console.log(person.age); // 30
// const person = Object.freeze({age: 20});
// person.age = 30; // TypeError
// person.age=10;
// console.log(person.age);
// const company = Object.freeze({
//     name: 'ABC corp',
//     address: {
//         street: 'North 1st street',
//         city: 'San Jose',
//         state: 'CA',
//         zipcode: 95134
//     }
// });
// company.name = 'USA'; // OK
// console.log(company);
//console.log(company.address.country);
// function deepFreeze(obj) {
//     // Retrieve the property names defined on obj
//     const propNames = Object.getOwnPropertyNames(obj);

//     // Freeze properties before freezing the object itself
//     for (const name of propNames) {
//         const value = obj[name];
//         // Freeze the value if it is an object
//         if (value && typeof value === 'object') {
//             deepFreeze(value);
//         }
//     }

//     return Object.freeze(obj);
// }

// const company = deepFreeze({
//     name: 'ABC corp',
//     address: {
//         street: 'North 1st street',
//         city: 'San Jose',
//         state: 'CA',
//         zipcode: 95134
//     }
// });

// company.address.city = 'USA'; // This will throw an error in strict mode
// console.log(company);
// const colors = ['red'];
// colors.push('green');
// console.log(colors); // ["red", "green"]

// colors.pop();
// colors.pop();
// console.log(colors); // []

// colors = []; // TypeError

// let scores = [75, 80, 95];

// for (let score of scores) {
// 	console.log(score);
// }
//let scores = [75, 80, 95];
// for (const score of scores) {
//     console.log(score);
// }

// for (let i = 0; i < scores.length; i++) { // TypeError
//     console.log(scores[i]);
// }
// function say(message) {
//     console.log(message);
// }

// say(); // 'Hi'
// say('Hello') // 'Hello'

// function add(x, y) {
//     return x + y;
//  }
 
//  //add(100,200);
//  console.log(add(100,200));

function say(message) {
    message = typeof message !== 'undefined' ? message : 'Hi';
    console.log(message);
     console.log("check pull")
}
say(); hgvj