// proti ta function ar moddhe by-default vabe akta object thake, a take array like object bole
//arguments r parameter ak e 
//function kono value pass korar ag porjonto se ta ke parameter bola hoi, r pass korar pore se ta jokhon function ar moddhe chole ase, tokhon setai hoye jai arguments

function add(num1, num2){
    console.log('argumets:', arguments, arguments);
    const args = [...arguments];  //way-1: default object to Array convert
    const args2 = Array.from(arguments); //way-2: default object to Array 
    console.log('args:', args);
    console.log('args2:', args2);
    return num1 + num2;
}

add(3, 4, 5);