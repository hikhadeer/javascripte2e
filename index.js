
const newTodos = [{
    title: 'Buy Bread',
    isDone: true
}, {
    title: 'Go to Gym',
    isDone: false
}, {
    title: 'Record Youtube videos',
    isDone: false
}];

// const index = newTodos.findIndex(function (todo, index) {
//     return todo.title == 'Record Youtube videos';
// });

// console.log(index);

// const findTodo = (myTodos, title) => {
//     const index = myTodos.findIndex((todo, index)=>{
//         return todo.title.toLowerCase() == title.toLowerCase();
//     });
//     return myTodos[index];
// }

// let printTodos = findTodo(newTodos, 'Go to gym');

// console.log(printTodos);

// const thingsDone = newTodos.filter((todo, index)=>{
//     return todo.isDone == false;
// });

// console.log(thingsDone);

document.title = 'Title changed!';

console.log(document.title);

