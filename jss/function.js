'use strict';
// let num = 20;
// function showFirstMessage(text) {
//     alert(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMessage("hi guys");
// console.log(num);



// function calc(a, b) { // function declaration
//     return (a * b);
// }
let calc = (a,b) => a+b //стрелочная функция
console.log(calc(2, 3));
let retVar = function() { //function exprecion (не можем обратиться до ее декларации)
    let num = 50;
    return num;
}
console.log(retVar());

let anotherNum = retVar();
console.log(anotherNum);

let str = "test";
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelve = "12.2px";

console.log(Math.round(twelve));
console.log(parseInt(twelve));
console.log(parseFloat(twelve));
alert( "\u{1F60D}" );

// function checkSpam(str) {
//     let lowerStr = str.toLowerCase();
  
//     return lowerStr.includes('viagra') || lowerStr.includes('xxx');
//   }
  
//   alert( checkSpam('buy ViAgRA now') );
//   alert( checkSpam('free xxxxx') );
//   alert( checkSpam("innocent rabbit") );



function extractCurrencyValue (str) {
    return +str.slice(1);
}


let b = extractCurrencyValue('$120');
console.log(b);