let num = 50;
if (num < 49) {
    console.log("Worse");
} else if (num > 100) {
    console.log("a lot of!");
} else {
    console.log("Yee, great number");
}


(num == 50) ? console.log("Great") : console.log("worse");

switch (num) {
    case num < 49:
        console.log("Worse");
        break;
    case num > 100:
        console.log("a lot of!");
        break;
    case num > 80:
        console.log("a lot of!");
        break;
    case num == 50:
        console.log("Yee, great number");
        break;
    default:
        console.log("Something wrong");
        break;
}

let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

do {
    console.log(num);
    num++; 
}while(num < 55);

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        continue;
    }
    console.log(i);
}