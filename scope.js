//Block scope , global scope, simple understanding of hoisting

//Block Scope or local scope or functional scope
add(4, 5);  // block scope k function declare ar age ba pore call kora jai, karon akta function k call korle, overall sei function take defaultvabei sobar upore niye jaoa hoi js a
function add(a, b) {
    const factor = 0.5;
    const result = (a + b) * factor;
    return result;
}
console.log(factor);  //output  reference scope error dibe

//global scope //outer scope // parent scope // ai ta scope chain onujae kaj kore
let pi = 3.14;  // ai ta functon ar outside ba function ar inside a use kora jabe
// global function k onno function ar vitore o access kora jai

//temporal deadzone function(TDZ)
const multiply = (x, y) => {
    console.log(result);    // error asbe, age use korte parbo na, ai take temporal deadzone bole
    const result = x * y;
    return result;
}