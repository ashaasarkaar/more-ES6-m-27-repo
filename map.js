// kono akta array ar upadangulo k niye kisu akta kore output pete chaile map lagbe, ai ta khub powerful r important

//without map code
const numbers = [1, 2, 3, 4, 5];

// const doubled = [];  // it is manually
// for(const num of numbers) {
//     doubled.push(num * 2);
// }
// console.log(doubled);

const doubledIt = num => num * 2;
const doubled = numbers.map(doubledIt); // map ar maddhome amra array ta pathate pari, tahole se ta function a giye akta akta kore number nibe r function take call korbe bar bar kore, tarpor array hisebe sob gulo return korbe aksathe.

console.log(doubled);

//same code with single line
const doubled2 = numbers.map(num => num * 2); // ai ta khub e powerful, onek use kora hobe

const squared = numbers.map(num => num * num);
console.log(squared);

//map with string
const familyMembers = ['Azaan', 'Salaat', 'Shobdo', 'Rijik', 'Amraa', 'Umeed'];
const firstLetters = familyMembers.map(member => member[0]);  // string, boolean, numbers, object etc j kono array ar proti ta upadan diye kono akta kaj chalabo, chalaye j ta output asbe, se ta return kore dibo, map mane loop kore kore use kora
console.log(firstLetters);

//map with object + arrow function 
const products = [
    {name: 'A4Tech Keyboard', price: 850},
    {name: 'LogiTech Keyboard', price: 890}
];
const prices = products.map(pd => pd.price*2);  // here pd = products, single line arrow function a return korte hoi na, automatic vabe return hoi
console.log(prices);

const names = products.map(pd => {
    const upperCase = pd.name.toLocaleUpperCase();
    return upperCase;    // multiline Arrow Function a of course return korte hobe, return na korle output asbe na
});
console.log(names);

//map with different parameter with object 
const products2 = [
    {name: 'i phone', price: 10},
    {name: 'Samsang', price: 20}
];
const names2 = products2.map((pd, index, products2Array)=> {
    const upperCase = pd.name.toLocaleUpperCase();
    console.log(index, upperCase, products2Array);  // index + products2Array = fixed syntax
});

// map ar khalato vai holo foreach
//difference map vs forEach
//map loop throw kore proti ta value k return korbe
// jodi return dorkar na hoi, tahole forEach use korbo, jemon proti ta value k console.log kora, dom ar moddhe add kora, 

const result = products2.forEach(pd => console.log(pd.name));
console.log(result); // undefined asbe, karon return kore na forEach

// map r forEach same but map return kore , forEach return kore na