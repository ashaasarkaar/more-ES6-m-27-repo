//Normal Sum 
const numbers = [1, 2, 3];
let sum = 0;  //accumulator ba previous value bola hoi ba sum ba aksathe kora, accumulator mane aksathe kora
for(const num of numbers){ // num ta current value
    sum = sum + num;   
}
console.log(sum);   // ai sum tai ak line a kora jai reduce diye

//reduce a dui ta man dite hoi, 1 ta holo callback function, r akta holo initiall man
//reduce holo jodi amra 1 line a sobgulo man k aksathe kore, niye aste chai tokhon use korbo shortcut a

const total = numbers.reduce((acc, num) => acc + num, 0); // acc = j variable ar sathe jog korbo, num = loop akare akta akta kore asa man, 0 = initiall man
console.log(total);