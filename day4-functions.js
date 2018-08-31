// Function Declaration

// doSomething();

// function doSomething() {
//     console.log('Doing Something... ');
// }

// // Function Expression

// let funcExpress = '';

// funcExpress();

// funcExpress = function () {
//     console.log('Function Expression... ');
// }

// const fatArrowFunc = (name, empId) => name + ' ' + empId

// console.log('fatArrowFunc: ', fatArrowFunc('Krishna', 123456));

// let sum = function () {
//     console.log(arguments);
//     let sum = 0;
//     for (var x = 0; x < arguments.length; x++)
//         sum += arguments[x];
//     return sum;
// }

// console.log('sum(1, 2, 3, 4, 5, 6): ', sum(1, 2, 3, 4, 5, 6));
// console.log('sum(1, 2, 3, 4, 5, 6): ', sum(1, 2, 3, 4, 5, 6));

// let sum = function (discount, ...args) {
//     // console.log(args);
//     let sum = 0;
//     for (var x = 0; x < args.length; x++)
//         sum += args[x];
//     if (sum > 20)
//         sum = sum * (1 - discount)
//     return sum;
// }

// console.log('sum(1, 2, 3, 4, 5, 6): ', sum(0.1, 1, 2, 3, 4, 5, 6));

// Default Operator


// Bad Practice
// let employeeRating = function (rating = 'M', name, empId, cca = false) {
//     // rating = rating || 'M';
//     // cca = cca || false;

//     return ({
//         name,
//         empId,
//         rating,
//         cca
//     });
// }

// employeeRating('Malleswari', 123456)
// console.log(`employeeRating('Malleswari', 123456): `, employeeRating(undefined, 'Malleswari', 123456, true));

// let confRooms = {
//     names: 'brinda',
//     strength: 100,
//     location: 'Hyderabad',
//     get work() {
//         // return this.names + ' ' + this.strength;
//         console.log(this.names + ' ' + this.strength);
//     },
//     // set work(names, )

// }

// console.log('confRooms.work: ', confRooms.work);

// THIS

let confRooms = {
    names: ['brinda', 'emmerson', 'hola'],
    strength: 100,
    location: 'Hyderabad',
    get work() {
        // return this.names + ' ' + this.strength;
        console.log(this.names + ' ' + this.strength);
    },
    printThis() {
        // console.log(this);
        // let self = this;
        this.names.map(function (name) {
            console.log(this);
        }.bind(this));
    }
    // set work(names, )
}

confRooms.printThis();

// function globalFunc() {
//     console.log(this);
// }

// globalFunc();