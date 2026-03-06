function firstSum(array1, array2){
    array1[0] = 100;
    array2[0] = 200;
    const first = array1[0];
    const second = array2[0];
    return first + second;
}

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
console.log('Before Calling The Function', num1, num2);
const output = firstSum(num1, num2);
console.log(output);
console.log('After Calling The Function', num1, num2)  // kono akta array ba object k kono akta function ar moddhe pathai, se ta ke tume jodi use koro kono somossa nai, kintu jodi pathano array ba object k function a pathanor por tar kono man change kora hoi, tahole jei jaite theke pathano hoyeche oi jaiga te oi man ta poriborton hoye jabe, jodi o ba function ar outside a call kora hoi ba value ta dekha hoi. ai change ta permanently hobe. ai non-primitive value'r khettre r ak jaiga te primitive value pathale, kono somossa nai, karon primitive value pathanor por vitore jotoi change kora hok na keno, older ba original maner kono change hoi na, ai jonno primitive gulo k bola hoi pass-by-value  r non-primitive hole pass korbe pass-by-reference