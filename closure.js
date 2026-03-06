//js a function k first class cityzen ba object bola hoi
function outerFunction() {
    function innerFunction() {
        console.log('This is the inner Function');
    }
    return innerFunction;
}
// const output = outerFunction();
// output();  // amra vitorer function k paoar jonno vahirer function k variable store kore, take o function hisebe call kore vitorer function ar output pete pari.
// innerFunction(); // ai vabe vitorer function k bahire call korte parbo na
// console.log('in the Outside', output)

function counter() {
        let count = 0;
        function increment() {
            count = count + 1;
            console.log('Value Of Count', count);
        }
        return increment;

    
}
// const count1 = counter();  // ai line likhle output asbe na
// count1();  // ai vabe duui ta line aksathe likhle output asbe  // function k directly return korle, function ta k call korar por variable a store korbo, tarpor variable ta k function hisebe abar call korbo tobei output asbe.
// count1();
// count1();
// count1();

// akta function k call korle, seitar vitor theke jodi ame return hisebe pathai, tahole se akta closure toiri kore, closure mane, se tar asepashe close akta environment toiri kore. abong close akta environment ar moddhe se tar nijosso reference rakhe abong j function take return korche, a ta k bar bar call korle , oi ta shudhu mattro tar variable ar akta nirdisto man rakhbe, tume kintu outside theke karo counter k access korte parbe na, kintu uporer function take parameter diye call korle ba parameter chara call korle, se vitore giye bar bar change korbe r output dibe. mane bahirer function diye vitorer function k amra bar bar call korte parbo r bar bar proti bar call ar por changing value ba updated value pabo. bahirer function diye vitorer function k modify korte parbo.

function newStudentCounter(name){
    let count = 0;
    function finalCounter(){
        count = count + 1;
        console.log('Coming New Student', name, count);
    }
    return finalCounter;
}

const studentCount = newStudentCounter('Azaan');
studentCount();
studentCount();
studentCount();
studentCount();
studentCount();
studentCount();
const olderStudentCount = newStudentCounter('Salaat');
olderStudentCount();
olderStudentCount();
olderStudentCount();
olderStudentCount();
olderStudentCount();
olderStudentCount();
studentCount();
studentCount();
studentCount();
studentCount();
