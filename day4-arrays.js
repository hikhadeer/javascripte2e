let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log('numbers: ', numbers);
// Solution 1
// let copyArray = numbers;
// console.log('copyArray: ', copyArray);

// numbers = [];
// console.log('copyArray: ', copyArray);

// Solution 2

// console.log('numbers.length: ', numbers.length);

// numbers.length = 0;
// console.log('numbers.length: ', numbers);

// Solution 3

// while (numbers.length > 0)
//     numbers.pop();
// console.log('numbers: ', numbers);

// Solution 4

// numbers.splice(0, numbers.length);
// console.log('numbers.splice(0, numbers.length - 1): ', numbers.splice(0, numbers.length));
// console.log('number: ', numbers);

// Combinging & Slicing array

// let arr1 = [1, 2, 3, 4];
// let arr2 = [12, 13, 14, 15];
// let arr3 = [123, 134, 156, 167];

// Solution 1
// const combinedArray = arr1.concat(arr2).concat(arr3);
// console.log('combinedArray: ', combinedArray);

// Solution 2
// let comninedArray = [...arr1, 'a', ...arr2, 'b', ...arr3];
// console.log('comninedArray: ', comninedArray);

// const slicedArray = comninedArray.slice(5, 8);
// console.log('slicedArray: ', slicedArray);

// const clonedArray = [...numbers];
// console.log('clonedArray: ', clonedArray);

// Solution 1

// for (let x = 0; x < numbers.length; x++)
//     console.log(numbers[x]);

// Solution 2

// numbers.forEach((value, index) => {
//     console.log(index, value);
// })

// Solution 3

// for (let index in numbers)
//     console.log(numbers[index]);

// Solution 4

// for (let element of numbers)
//     console.log(element);

// Joining arrays

// const joinedArray = numbers.join('-');
// console.log('joinedArray: ', joinedArray);

// const splitArray = joinedArray.split('-');
// console.log('splitArray: ', splitArray);

// const sortedArray = numbers.sort();
// console.log('sortedArray: ', sortedArray);

// console.log('numbers.reverse(): ', numbers.reverse());

// let objArray = [{
//         id: 1,
//         name: 'Apparao'
//     },
//     {
//         id: 2,
//         name: 'Krishna'
//     },
//     {
//         id: 3,
//         name: 'Gayathri'
//     },
//     {
//         id: 4,
//         name: 'subbu'
//     },
//     {
//         id: 5,
//         name: 'khadeer'
//     },
// ]

// const sortedObjArray = objArray.sort((a, b) => {
//     const A = a.name.toUpperCase();
//     const B = b.name.toUpperCase();
//     if (A > B)
//         return 1;
//     if (A < B)
//         return -1;
// })

// console.log('sortedObjArray: ', sortedObjArray);

// const filteredArray = numbers.filter(num => num > 5);
// console.log('filteredArray: ', filteredArray);

// const mappedArray = numbers.map(num => console.log(num));
// console.log('mappedArray: ', mappedArray);

// const mappedArray1 = numbers.map(num => {
//     num = num + 1;
//     return num;
// });
// console.log('mappedArray: ', mappedArray1);

// let sum = 0;

// const accumulatedArray = numbers.reduce((previous, current) => {
//     return previous + current;
// })

// console.log('accumulatedArray: ', accumulatedArray);

// Homework on Arrays - How to use every() and some()