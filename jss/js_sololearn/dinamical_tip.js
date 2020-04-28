// to String
//1.
String(4);
//2.
console.log("ww" + 3);
console.log(typeof("ww" + 3));

// to number
//1.

console.log(typeof(Number('5')));
 //2.
 console.log(typeof(+"5"));
 
 //3.
 console.log(typeof(parseInt('15px', 10)));

 //let ans = +prompt("Hello?", "");

 //0, '', null, undefined, NaN == false all other is true
//1.
let swither = null;

if (swither) {
    console.log("Working...");
}
swither = 1;
if (swither) {
    console.log("Working...");
}

//2.
console.log(typeof(Boolean('5')));

//3.
console.log(typeof(!!'5'));