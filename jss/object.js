'use strict';
// bad version obj
// let obj = new Object();

// let options = {
//     width: 1024,
//     height: 1024,
//     name: "test"
// };

// console.log(options.name);
// //для добавления свойст не писав их сразу в obj
// options.bool = false;
// // второй вариант добавления
// options.colours = {
//     border: "black",
//     background: "red"
// };
// console.log(options);
// удаление из obj
//  delete options.bool;
 // цикл для перебора obj

//  for(let key in options) {
//     console.log("Свойство: " + key + " имеет значение: " + options[key]);
//  }

//  console.log(Object.keys(options).length);

//  let arr = ["first", 2, 3, 4, 5, "six", 7, 8, 9];

 

// arr.forEach(function(item, i, mass) {
//     console.log(i + ' + ' + item + " (massive: " + mass + ")");
// });

//  for (let i = 0; i < arr.length; i++){
//      console.log(arr[i]);
//  }

//  arr.pop(); // delete last
//  arr.push(5); // push in last
//  arr.shift(); //delete first one
//  arr.unshift(2); // add on first position
//  console.log(arr);

//  let mass = [1, 3, 4, 6, 7];

//  for (let key in mass) { //номера
//      console.log(key);
//  }
//  for (let key of mass) { //значения
//     console.log(key);
// }



// let ans = prompt("", ""),
//     ars = [];

// ars = ans.split(',');
// console.log(ars);

// let arr = ["awe", "htht", "dgfd", "sfsdfds"],
//     i = arr.join();
// console.log(i);

let arr = [1,32,4,3],
    i = arr.sort(compareNum);

function compareNum(a,b) {
    return a-b;
}
console.log(arr);

