// amra jodi function parameter hisebe pass kori, r value hisebe bahir theke kono akta primitive man pathai, r pathanor pore change kori, tahole, primitive man ar ager value change hobe na, jodi o ba pore change hoye jabe.

function multiply(a, b){   // aikhane primitive data'r value k pass kora hoyeche
    a = a-5;
    b = b-5;
    console.log(a, b);
    return a * b;
}

let x = 10;
let y = 20;
console.log('Before Calling', x, y);
const result = multiply(x, y);
console.log(result);
console.log('After Calling', x, y);


