'use strict';
//1.1

// var car = {
//     marka: "BMW", 
//     cena: "40",
//     moc: 300,
//     mocUp: function(x) {
//         car.moc += x);
//     }
// };
//1.2
//  console.log(car);
//  car.mocUp(40);

//1.3
// let zwiekszMoc = +prompt("Dodaj moc");
// let car = {
//     marka: "BMW",
//     cena: 1024,
//     moc: 300
// };
// car.moc += zwiekszMoc;
// //1.4
// console.log(car);

//1.5

function car(a, b, c) {
    this.marka = a;
    this.cena = b;
    this.moc = c;
};
// let bmwCar = new car("BWM", 1023, 300); 
// let AudiCar = new car("Audi", 2000, 400);
// let SuzukiCar = new car("Suzuki", 3000, 450);

// car.prototype.mocUp = function(x){
//     this.moc+=x;
//   };
// let x = +prompt("na ile");
// bmwCar.mocUp(x);
// console.log(bmwCar);

//1.6 / 1.7
// let bmwCar = new car("BWM", 1023, 300); 
// let AudiCar = new car("Audi", 2000, 400);
// let SuzukiCar = new car("Suzuki", 3000, 450);
// let arr = [bmwCar, AudiCar, SuzukiCar];
// //1.8
// arr[1].mocUp(50);

//  //1.9
//  for(let key in aee) {
//     console.log(key);
//  }

//  //1.10


//  //1.11 - 1.12
//  car.prototype.ToString = function(x) {
//      console.log("(Marka:" + this.marka + ", cena: " + this.cena + ", moc" + this.moc+")");
//  }
//     console.log(arr[2].ToString());


// czw 2
//2.1

let bmwCar = new car("BWM", 1023, 300); 
let AudiCar = new car("Audi", 2000, 400);
let SuzukiCar = new car("Suzuki", 3000, 450);
let myJson = JSON.stringify(SuzukiCar);
console.log(myJson);

//2.2
let parJson = JSON.parse(myJson);
console.log(parJson);
