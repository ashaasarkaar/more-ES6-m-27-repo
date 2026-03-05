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

