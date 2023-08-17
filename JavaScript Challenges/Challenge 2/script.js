//step1
//1
let age = 22;
//2
if (age >= 20) {
    console.log("You can enter this room.");
} else {
    console.log("You can't enter this room.");
}
//3
//4
const expression1 = 5 > 3;
const expression2 = 10 === '10';
const expression3 = true && false;
const expression4 = !expression3;
//5
console.log(expression1);
console.log(expression2);
console.log(expression3);
console.log(expression4);


//step2
//1
const agee = 25;
const hasDriverLicense = true;
const hasCar = false;
const needDriver = true;
//2
if (agee >= 18 && hasDriverLicense) {
    canDrive = true;
}
console.log(canDrive);
//3
if (agee >= 22 && hasDriverLicense && !hasCar) {
    canRentCar = true;
}
console.log(canRentCar);
//4
if (age < 18 && !hasDriverLicense && !hasCar) {
    needDriver = true;
}
console.log(needDriver);


//step3
//1
let role = "admin";


//2
switch (role) {
    case "admin":
        console.log("You have onlu read and write access for the data");
        break;
    case "user":
        console.log("You have only read access for the data");
        break;
    case "guest":
        console.log("You have no access for the data");
        break;
    default:
        console.log("User role is not recongmized");

}