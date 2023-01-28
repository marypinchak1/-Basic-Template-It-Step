// 1. Persinal data of users
const USER_DATA = [
  {
    name: "John",
    age: 25,
    surname: "Doe",
    fatherName: "Smith",
  },
  {
    name: "Jane",
    age: 30,
    surname: "Doe",
    fatherName: "Sarah",
  },
  {
    name: "Jack",
    age: 28,
    surname: "Doe",
    fatherName: "John",
  },
  {
    name: "Jill",
    age: 32,
    surname: "Doe",
    fatherName: "Monica",
  },
  {
    name: "Jill",
    age: 17,
    surname: "Doe",
    fatherName: "Monica",
  },
];

function checkUserAge(age) {}

USER_DATA.forEach((user) => {
  const userAge = checkUserAge(user.age);
  if (user.age >= 18) {
    console.log("true");
  } else {
    console.log("false");
  }
});




/* 
let counter = 0;

// Create

function getInitialsUser(surname, name, fatherName) {
  counter++;
  if (counter <= 3) {
    const initials = surname + " " + name[0] + "." + fatherName[0] + ".";
    return initials;
  }
  return "Function is called more than 3 times";
}

function displayAlertInputText(text) {
  alert(text);
}

const sayHello = (someText) => {
  console.log(someText);
}

usersData.forEach((user) => {
  const userInitials = getInitialsUser(
    user.surname,
    user.name,
    user.fatherName
  );
  console.log(userInitials + " " + user.age);
});

//Input data to display in alert
const inputText = prompt("Enter text to display in alert");
displayAlertInputText(inputText); */

/* let familyList = [
  {
    name: "John Doe",
    age: 25,
  },
  {
    name: "Jane Doe",
    age: 24,
  },
  {
    name: "Jack Doe",
    age: 18,
  },

  {
    name: "Janifer Doe",
    age: 14,
  },
  {
    name: "Sem Doe",
    age: 24,
  },
];

let counter = 0;
familyList.forEach(function (item) {
  if (familyList[counter].age >= 21) {
    console.log(familyList[counter].name, familyList[counter].age);
  }
  counter++;
}); */

/* const fruits = [
  "apple",
  "banana",
  "orange",
  "pear",
  "grape",
  "pineapple",
  "strawberry",
  "watermelon",
  "kiwi",
  "mango",
  "peach",
  "lemon",
  "lime",
  "blueberry",
  "raspberry",
  "blackberry",
  "apricot",
  "cherry",
  "coconut",
  "fig",
  "pomegranate",
  "plum",
  "nectarine",
  "persimmon",
  "tangerine",
  "papaya",
  "guava",
  "jackfruit",
  "lychee",
  "starfruit",
  "cantaloupe",
  "honeydew",
  "mangosteen",
  "pawpaw",
  "durian",
  "tamarind",
  "mulberry",
  "currant",
  "gooseberry",
  "rambutan",
  "longan",
  "dragonfruit",
  "clementine",
  "satsuma",
  "mandarin",
  "tangelo",
  "yuzu",
  "nectarine",
  "persimmon",
  "tangerine",
  "papaya",
  "guava",
  "jackfruit",
  "lychee",
  "starfruit",
  "cantaloupe",
  "honeydew",
  "mangosteen",
  "pawpaw",
  "durian",
  "tamarind",
  "mulberry",
  "currant",
  "gooseberry",
  "rambutan",
  "longan",
  "dragonfruit",
  "clementine",
  "satsuma",
  "mandarin",
  "tangelo",
  "yuzu",
  "nectarine",
  "persimmon",
  "tangerine",
  "papaya",
  "guava",
  "jackfruit",
  "lychee",
  "starfruit",
  "cantaloupe",
  "honeydew",
  "mangosteen",
  "pawpaw",
  "durian",
  "tamarind",
  "mulberry",
  "currant",
  "gooseberry",
  "rambutan",
];
let counter = 0;
fruits.forEach(function (item) {
  if (item[0] == "a") {
    console.log(item);
    counter++;
  }
});
console.log(counter); */
/* const indexOfFruit = fruits.indexOf("kiwi");
if (indexOfFruit >= 0) {
  console.log(`I like ${fruits[indexOfFruit].toUpperCase()}!`);
}else{
  console.log("There is no such fruit!");
}


const someVar = "aPPle";
const someVarLovercase = someVar.toLowerCase();
const someVarUppercase = someVar[0].toUpperCase();
console.log(`I like ${someVarUppercase+someVarLovercase.slice(1)} !`);
 */

// Task_1

/* const yourName = prompt(`Введіть Ваше ім'я:`)
alert(`Привіт, ${yourName}!`) */

// Task_2

/* const birthYear = Number(prompt(`Введіть Ваш piк народження:`))
const thisYear = 2023
let yourAge = thisYear - birthYear
if(birthYear>0){
alert(`Вам ${yourAge} років!`)
}else {
  alert("Ви ввели не вірні дані!");
} */

// Task_3

/* const squareHeigth = Number(prompt(`Введіть довжину сторони квадрата (см):`));
let squarePerimeter = squareHeigth * 4;
if (squareHeigth > 0) {
  alert(`Периметр квадрата ${squarePerimeter} см.`);
} else {
  alert("Ви ввели не вірні дані!");
}; */

// Task_4

/* const circleRadius = Number(prompt(`Введіть радіус кола (см):`));
let circleArea = Math.PI * Math.pow(circleRadius, 2);
if (circleRadius > 0) {
  alert(`Площа кола ${circleArea.toFixed(2)} см.`);
} else {
  alert("Ви ввели не вірні дані!");
} */

// Task_5

// Task_6

// Task_7

// Task_8

// Task_9

// Task_10

// Task_11

// Task_12

/* const secretNuмber = 5;
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

alert(`Tries: ${counter}`) */

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
