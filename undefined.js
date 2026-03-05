//undefined data
let a;
// console.log(a)

const sum = (x, y) => console.log(x, y)
// sum();
// sum(4)

//undefined objects
const student = {
    name: 'salaat',
    age: 20
}
// console.log(student.age)
delete student.age;
// console.log(student.mark)
// console.log(student.age)

//undefined array
const array = [1, 2,3];
// console.log(array[10])
delete array[2];
// console.log(array)
delete array[1];
// console.log(array[1])

//type of
console.log(typeof null)
console.log(typeof undefined)

//null value set of object
const obj = {
    sub1: 'physics',
    sub2: null
}