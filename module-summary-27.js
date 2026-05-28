//hoisting of var
console.log(d);
var d = 5;
//output : undefined

// hoisting of let
// console.log(e);
let e = 5;
//output : ReferenceError: Cannot access 'e' before initialization

// hoisting of let
// console.log(f);
const f = 5;
//output : ReferenceError: Cannot access 'f' before initialization

//hoisting in function
displayMessage();
function displayMessage() {
    // console.log("Hello World");
}
// output : Hello World  // This Code Will right

//hoisting in function expression
displayMessage2();
var displayMessage2 = function() {
    console.log("Hello World");
}
// output : TypeError: displayMessage2 is not a function 
 // This Code Will wrong


