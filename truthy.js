//truthy vs falsy value check with condition
let data;
data = 0;  // output falsy
data =''; // output falsy
data ='0'; //output Truthy karon string khali na hole truthy return korbe
data =' '; // white space inside string hole o Truthy hobe
data = false; // output falsy
data = true;  // output truthy
data = null; // output falsy
data = undefined; // output falsy
data = {}  // output Truthy
data = []  // output Truthy
if(data){
    console.log('Truthy');
}
else{
    console.log('Falsy');
}

//output Truthy with falsy value condition
let price = 0;
if(price){
    console.log('Price is Truthy'); //output asbe na
}

//output Truthy with falsy value condition with !(bang) sign ba bit(as a switch)
let price1 = true;
if(!price1) {
    console.log('This is Falsy');  // vitore dhukbe na
}
let price2 = false;
if(!price2) {    // ! = bit operator name   // shudhu oposite value nile
    console.log('This is Falsy');  // vitore dhukbe 
}

//kono data type a boolean a convert korar condition
let product = {};
if(!!product){   //!!(double bit operator ba bang) ai ta muloto use kora hoi kono man ki type ar sei ta janar jonno
    console.log('Truthy boolean');
}



