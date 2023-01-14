console.log("Hello, World!");

let name = "John";
let surname = "Doe";
let middleName = "Patrick";

const personalData = surname + " " + name[0] + "." + " " + middleName[0] + ".";
let num1 = 2;
let num2 = 3;

const result = num1 + num2;

console.log("Result:", result);

let arraySome = ["test", 13, true, 12.56];

arraySome.push("test2");
arraySome.unshift(surname);
arraySome.pop();
arraySome.shift();
// arraySome.splice(2, 0)

console.log("Array:", arraySome);

const position = arraySome.indexOf(13);

console.log("Array:", position);
arraySome.splice(position, 1);
console.log("Array:", arraySome);

console.log("Lenght:", arraySome.length);

const positioin = arraySome.indexOf("hello");
console.log("Array:", positioin);
//Array
let age = [2, 13, 6, 22.56, 17];

console.log(personalData);

let arraySome2 = [2, 13, 6, 22.56, 17];
const positions = arraySome2.indexOf(13);
if (position >= 0) {
  console.log(`Число ${13} є в масиві!`);
} else {
  console.log(`Число ${13} є в масиві!`);
}


