//callback function holo, take diye deya hobe, se lagle use korbe

// document.getElementById('#btn')
// .addEventListener('click', function(event){  // addEventListener('click', function(event){}) ai jaiga ta kei call back function bola hoi, akhane parameter hisebe, akta click parameter and function return kora hoyeche // ai function a take akta jinish diye deya hoi, pore lagle se use korbe, data load korte call back function use hobe, aro onek jaigai hobe
// })

// parameter hisebe amra string/number/array/object/function dite pari.

//callback function, function k parameter hisebe pathano
function settleLife(name, isBCS, marriage, pattri){
    if(isBCS){
        marriage(pattri);  // boloKobul function k marriage parameter diye use kora hoyeche akhane
        
    }

}
function boloKobul(pattri){
    console.log('kobul', pattri);
}

settleLife('Azaan', true, boloKobul, 'nari');