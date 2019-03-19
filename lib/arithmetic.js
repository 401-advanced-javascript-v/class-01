'use strict';

let arithmetic = module.exports = {};
arithmetic.typeCheck = function (a, b){
    if( (typeof a !== "number" && !Array.isArray(a) )
        ||
        (typeof b !== "number" && !Array.isArray(b) )
    ){
        return false;
    }

    
    if(Array.isArray(b)){
        let containsNonNumber = false;
        for(var i = 0; i<b.length; i++){
            if(typeof b[i] !== 'number'){
                containsNonNumber = true;
                break;
            }
        }
        if(containsNonNumber){
            return false;
        }
    }
    if(Array.isArray(a)){
        let containsNonNumber = false;
        for(var i = 0; i<a.length; i++){
            if(typeof a[i] !== 'number'){
                containsNonNumber = true;
                break;
            }
        }
        if(containsNonNumber){
            return false;
        }
    }


    return true;
}

arithmetic.add = function(a,b) {
    if( Array.isArray(a) == true || Array.isArray(b) ==true ) {
        let sumA = a.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        let sumB = b.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        return sumA + sumB;
    } 
    return a+b;
};

arithmetic.subtract = function (a,b) {
    if( Array.isArray(a) == true || Array.isArray(b) ==true ) {
        let sumA = a.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        let sumB = b.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        return sumA - sumB;
    }
  return a-b;
};

arithmetic.multiple = function (a,b) {
    if( Array.isArray(a) == true || Array.isArray(b) ==true ) {
        let mulA = a.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
        console.log(mulA);
        let mulB = b.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
        console.log(mulB);
        return mulA * mulB;
    }
    return a*b;
};

arithmetic.devide = function (a,b) {
    if( typeof a !== "number" || typeof b !== "number" || a === 0) { return null; }
    return Math.floor(a/b);

};