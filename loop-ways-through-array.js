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