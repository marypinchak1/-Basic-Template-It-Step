const secretNumber = 5;
let status = true;
let counter = 0;

while (status) {
  counter++;
  const yourNumber = Number(prompt("Please, enter a secret number: "));
  if (yourNumber < secretNumber) {
    alert("Your number is lower!");
  } else if (yourNumber > secretNumber) {
    alert("Your number is higher!");
  } else {
    alert("Success!");
    status = false;
  }
}

alert(`Tries: ${counter}`)
// while (yourNumber == secretNumber)

/* const a = prompt("Введіть число")

if (a > 1 && a < 5) {
  console.log("Success!");
} else {s
  console.log("Fail!");
}
 */

/* let personalData = {
  name: "John",
  surname: "Doe",
  middleName: "Patrick",
  address: {
    city: "Drohobych",
    street: "Ranevytska",
    number: 123,
    name: "some",
    metrics: {
      water: 225452,
      gas: 5565332,
    },
  },
  age: [12, 23, 45],
};
personalData.age.pop();

console.log(
  personalData.address.street,
  personalData.address.number,
  personalData.address.metrics.gas
);
console.log(personalData.age.length);
console.log(personalData.age[1]);
console.log(personalData.age);

let metrics = personalData.address.metrics;

console.log(metrics.water);

const age = Number(prompt("Введіть ваш вік: "));
console.log(age);
const isActive = true;
console.log(typeof age);
if (!isActive) {
  if (age >= 0) {
    if (age < 18) {
      console.log("ВИ НЕПОВНОЛІТНІ!");
    } else if (age >= 18 && age <= 21) {
      console.log("ВИ ПОВНОЛІТНІ В УКРАЇНІ!");
    } else if (age > 21) {
      console.log("ВИ ПОВНОЛІТНІ!");
    }
  } else {
    alert("Ви ввели не вірні дані!");
  }
} else {
  alert("Форма не працює!");
}

console.log(personalData);

let someArr = [];

if (someArr) {
  if (age >= 0) {
    if (age < 18) {
      console.log("ВИ НЕПОВНОЛІТНІ!");
    } else if (age >= 18 && age <= 21) {
      console.log("ВИ ПОВНОЛІТНІ В УКРАЇНІ!");
    } else if (age > 21) {
      console.log("ВИ ПОВНОЛІТНІ!");
    }
  } else {
    alert("Ви ввели не вірні дані!");
  }
} else {
  alert("Форма не працює!");
} */

/* console.log("Hello, World!");

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
 */
