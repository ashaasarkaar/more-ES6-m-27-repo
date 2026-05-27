// 1 way is for loop
let array = [1, 2, 3, 4, 5, 6]
for(let i=0; i<array.length; i++){
    // console.log(array[i]);
}

//2nd Way is do while loop
let i = 0;
do{
    // console.log(i)
    i++;
}while(i < 5)

//3rd way is while loop
let a = 1;
while(a <= 5){
    console.log(a);
    a++;
}

//4th way is for of loop
let arr2 = [10, 20, 30, 40, 50, 60]
for(let number of arr2){
    console.log(number)
}

//map() method
const friends = ['abul', 'tabul', 'jabul', 'mabul', 'khabul'];
let newArr = friends.map((friend) => console.log(friend))


//forEach()
const names = ['tabu', 'azaan', 'salaat']
names.forEach((family => console.log(family)))

//filter()
const mixNumbersList = [1, 2, 11, 23, 5, 9, 3, 27]
const smallNumbers = mixNumbersList.filter((smNum) => {
    return smNum < 10;
})
console.log(smallNumbers);

//find()
const mixNumbersList2 = [1, 2, 11, 23, 5, 9, 3, 27]
const smallNumbers2 = mixNumbersList2.find((smNum) => {
    return smNum < 10;
})
console.log(smallNumbers2);

//sum -> It is a normal manual way to add together all the numbers
const array3 = [1, 3, 5, 6, 2]
let sum = 0;
for(const i of array3){
    sum = sum + i;
}
console.log(sum)

//Array.reduce()
const arr4 = [1, 2, 3, 4]
const together = arr4.reduce((acc, num) => acc + num, 0)
console.log(together)

//null
let number = null;
console.log(number);
// output: null

//undefined
let number1;
console.log(number1);
// output: undefined

//Function Scope
function theYear(){
	let text = "This Year Is";
    let year = "2026";
	console.log(text + " " + year);
}
theYear();

//Block Scope
if(10 > 20){
    let greeting = 'hi';
    return greeting;
}

 