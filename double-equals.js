//==
//double equals does type coercion(coation)
//==(compares the values after converting them to a common type. If the values are equal after type coercion, it returns true. if the values are not equal after type coercian, it returns false.)
// double equals == jodi dui ta alada type ar man pai, tahole tader k convert kore jor kore, tar pore compare kore
console.log(2==2); // true
console.log(2=='2') // true, it is a big plm
console.log(1 == true); // true
console.log(0 == false); // true
console.log(true == '1') // true
console.log(false == '0') // true
console.log(null == undefined); //true
console.log(undefined == null); // true
console.log(NaN == NaN);  // false //NaN akta object
console.log([5] == '5');  // true
console.log({} == {});  // false
console.log([] == []);  // false 


console.log([10].toString()) // convert array to string

//== non-primitive pai tahole alada kore dibe, akta o primitive pele ba dui tai primitive pele, tahole type convert kore, tarpor man take convert korbe, ai ta k coercion bole