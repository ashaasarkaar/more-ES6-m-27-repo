//filter
const numbers = [2, 1, 5, 7, 8, 10];
const evenNumbers = numbers.filter(num => num % 2 === 0); // filter ar dane condition thakbe
// console.log(numbers);
// console.log(evenNumbers);

const friends = ['tamil', 'jamil', 'Abul', 'Akib'];
const aFriends = friends.filter(frd => frd[0] === 'A');
// console.log(aFriends);

const students = [
    {name: 'bablu', age: 40},
    {name: 'Tablu', age: 31},
    {name: 'Dhablu', age: 29},
    {name: 'Jambu', age: 41}
];
const aduVaiStudents = students.filter(std => std.age > 30); //filter use korbo, jokhon kono sorto k fullfill kore, sei man ta k nite hobe
// console.log(aduVaiStudents);



