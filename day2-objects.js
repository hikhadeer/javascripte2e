
// let name = 'james';
// let roll = 12345;
// let address = {
//     flat: 123,
//     street: 'rimise street',
//     zip: 123456
// }

// // console.log(name+" "+roll+" "+address.flat);

// const employee = {
//     name : 'james',
//     roll : 12345,
//     address : {
//         flat: 123,
//         street: 'rimise street',
//         zip: 123456
//     }
// }

// console.log(employee);

// const employee1 = {
//     name : 'vannice',
//     roll : 12345,
//     address : {
//         flat: 123,
//         street: 'rimise street',
//         zip: 123456
//     }
// }

// console.log(employee1);

// Two Types of Functions 1. Factory Function 2. Constructor Function

// Factory Function - Camel Case

// function createFactFunc(name, roll) {
//     return  {
//         name,
//         roll,
//         address : {
//             flat: 123,
//             street: 'rimise street',
//             zip: 123456
//         },
//         workFromHome() {
//             console.log('Working from home...');
//             return 0;
//         }
//     }
// }

// const emp1 = createFactFunc('rose', 123456);
// const emp2 = createFactFunc('john', 765637);
// const emp3 = createFactFunc('david', 9865434);

// console.log(emp1);
// console.log(emp2);
// console.log(emp3.workFromHome());

// function CreateConstructorFunc(name, roll) {
//     this.name = name,
//     this.roll = roll,
//     this.address = {
//         flat: 123,
//         street: 'rimise street',
//         zip: 123456
//     },
//     console.log(this);
// }

// const ccf = new CreateConstructorFunc();


// const emp1 = new CreateConstructorFunc('dolly', 9766435);
// const emp2 = new CreateConstructorFunc('nancy', 34665745);
// const emp3 = new CreateConstructorFunc('bob', 2865645);

// console.log(emp1);
// console.log(emp2);
// console.log(emp3);

// Dynamic Objects

// function CreateConstructorFunc(name, roll) {
//     this.name = name,
//     this.roll = roll,
//     this.address = {
//         flat: 123,
//         street: 'rimise street',
//         zip: 123456
//     }
// }

// const emp1 = new CreateConstructorFunc('dolly', 9766435);
// console.log(emp1);

// emp1.workFromHome = function() {
//     console.log('Working from home... ');
// }

// console.log(emp1);

// delete emp1.workFromHome;

// console.log(emp1);

// let x = 10;
// let y = x;

// console.log(x);
// console.log(y);

// x = 20;

// console.log(x);
// console.log(y);

// let xx = {id: 10};
// let yy = xx;

// console.log(xx);
// console.log(yy);

// xx.id = 11;

// console.log(xx);
// console.log(yy);

// let number = 10;

// num = function(number) {
// 	return number++;
// };

// console.log(num(number));

// Enumerating

// const employee = {
//     name : 'james',
//     roll : 12345,
//     address : {
//         flat: 123,
//         street: 'rimise street',
//         zip: 123456
//     }
// }

// for(emp in employee)
// console.log(employee[emp]);

// for (emp of Object.entries(employee))
//     console.log(emp[0], emp[1]);

// const employee = {
//     name : 'james',
//     roll : 12345,
//     address : {
//         flat: 123,
//         street: 'rimise street',
//         zip: 123456
//     }
// }

// console.log(employee);

// const cloned = {};

// for(emp in employee)
//     cloned[emp] = employee[emp];

// console.log(cloned);

// const cloned1 = Object.assign({}, employee);

// console.log(cloned1);

// const cloned2 = {...employee};

// console.log(cloned2);

// const pi = Math.PI;

// console.log(pi);

// const x = Math.random() * 10;

// const y = Math.round(x);
// const z = Math.ceil(x);
// const a = Math.floor(x);

// console.log(x);
// console.log(z);
// console.log(a);

// console.log(Math.abs(-9.01));

// var str = 'abc';

// var str2 = new String('abc');

// console.log(str == str2);
// console.log(str === str2);





