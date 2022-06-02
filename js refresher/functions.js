// const sumAllNum = (...args) => {
//   console.log(args);
// };
// sumAllNum(1, 2, 3, 4);

// const sumAllNums = (...args) => {
//   let sum = 0;
//   for (const element of args) {
//     sum += element;
//     // console.log(element);
//   }
//   return sum;
// };
// console.log(sumAllNums(1, 2, 3, 4));

// const anonymousFun = function () {
//   console.log("i am a anonymous function");
// };
// anonymousFun();
// const square = function (n) {
//   return n * n;
// };
// console.log(square(2));
// (function (n) {
//   console.log(n * n);
// })(3);

// let squaredNum = (function (n) {
//   return n * n;
// })(10);
// console.log(squaredNum);
// function square(n) {
//   return n * n;
// }
// console.log(square(2));

// const square = (n) => n * n;

// console.log(square(2));
// const changeToUppercase = (arr) => {
//   const newArray = [];
//   for (const element of arr) {
//     newArray.push(element.toUpperCase());
//   }
//   return newArray;
// };
// console.log(
//   changeToUppercase(["Finland", "Sweden", "Norway", "Denmark", "Iceland"])
// );

// const printFullName = (firstName, lastName) => {
//   return `${firstName} ${lastName}`;
// };
// console.log(printFullName("Asraful", "Islam"));

// const printFullName = (firstName, lastName) => `${firstName} ${lastName}`;
// console.log(printFullName("Asraful", "Islam"));

// const printFullName = ((firstName, lastName) =>
//  `${firstName} ${lastName}`)(
//   "Asraful",
//   "Shoag"
// );
// console.log(printFullName);

// function functionNem(name = "Asraful") {
//   let message = `${name} ,Welcome to our world`;
//   return message;
// }
// console.log(functionNem());
// console.log(functionNem("Saniya"));

// function calculateAge(birthYear, currentYear = 2019) {
//   let age = currentYear - birthYear;
//   return age;
// }
// console.log("Age :", calculateAge(2000, 2022));

// function weightOfObject(mass, gravity = 9.81) {
//   let weight = mass * gravity + "N";
//   return weight;
// }
// console.log("Weight of an object in Newton ", weightOfObject(100));

// const weightOfObject = (mass, gravity = 9.81) => mass * gravity + "N";
// console.log(weightOfObject(100));
//1
// const fullName = (firstName, lastName) => `${firstName} ${lastName}`;
// console.log(fullName("Asraful", "Islam"));
//2
// const addNumbers = (...args) => {
//   let sum = 0;
//   for (const elements of args) {
//     sum += elements;
//   }
//   return sum;
// };
// console.log(addNumbers(1, 2));
//3
// const AreaOfCircle = ((r) => 3.14 * r * r)(2);
// console.log(AreaOfCircle);
//4
// const convertCeleiusToFahrenheit = (c) => {
//   let result = c * (9 / 5) + 32;
//   return result;
// };
// console.log(convertCeleiusToFahrenheit(30));

//5
// const BMI = (weight, height) => {
//   let bmi = Math.round(weight / height ** 2);
//   console.log(bmi);

//   if (bmi < 18.5) {
//     return "Underweight";
//   } else if (bmi < 25) {
//     return "Normal";
//   } else if (bmi < 30) {
//     return "Overweight";
//   } else {
//     return "Obese";
//   }
// };
// console.log(BMI(75, 173));

//Exercise:level 2;
//1.

// function solveQuadratic(a, b, c) {
//   let root1, root2;
//   let discriminant = b * b - 4 * a * c;
//   if (discriminant > 0) {
//     root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//     root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
//     return `${root1}, ${root2}`;
//   }
//   return "No value passed";
// }
// console.log(solveQuadratic()); // {0}
// console.log(solveQuadratic(1, 4, 4)); // {-2}
// console.log(solveQuadratic(1, -1, -2)); // {2, -1}
// console.log(solveQuadratic(1, 7, 12)); // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)); //{2, -2}
// console.log(solveQuadratic(1, -1, 0)); //{1, 0}
// const printArray = (arr) => {
//   //   let newArray = [];
//   arr.forEach((element) => {
//     console.log(element);
//   });
// };
// let values = [1, 2, 3, 4];
// printArray(values);
//3.
// const showDateTime = () => {
//   let dateTime = new Date().toLocaleString();
//   return dateTime;
// };
// console.log(showDateTime());
// const swapValues = (x, y) => {
//   console.log(x, y, "Are the real values");
//   let temp;
//   temp = x;
//   x = y;
//   y = temp;
//   return `${x} ${y} are the swap values`;
// };
// console.log(swapValues(3, 4));

// const reverseArray = (arr) => {
//   let newArray = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     newArray.push(arr[i]);
//   }
//   return newArray;
// };
// const values = [1, 2, 3, 4, 5];
// console.log(reverseArray(values));
// console.log(reverseArray(["A", "B", "C"]));

// const capitalizedArray = (arr) => {
//   for (const elem of arr) {
//     console.log(elem.toUpperCase());
//   }
// };
// let arr = ["asraful", "shoag", "islam"];
// capitalizedArray(arr);
// function addItem(item) {
//   let itemArr = [];
//   itemArr.push(item);
//   return itemArr;
// }
// console.log(addItem("asraful"));
// function removeItem(index) {
//   const item = ["a", "b", "c"];
//   return item.slice(0, index);
// }

// console.log(removeItem(2));
// function evensAndOdds(posInt) {
//   let countEven = 0;
//   let countOdd = 0;
//   for (let i = 0; i <= posInt; i++) {
//     if (i % 2 == 0) {
//       countEven++;
//     } else {
//       countOdd++;
//     }
//   }
//   return `The number of odds are ${countOdd}.\nThe number of evens are ${countEven} `;
// }
// console.log(evensAndOdds(100));
//13.
// const sumOfItems = (...args) => {
//   let sum = 0;
//   for (const elem of args) {
//     sum += elem;
//   }
//   return sum;
// };
// console.log(sumOfItems(1, 2, 3, 4));

// function userIdGenerator() {
//   let _id = Math.random()
//     .toString(36)
//     .substring(2, 6 + 2);
//   return _id;
// }
// console.log(userIdGenerator());

//Exercise:level 3
//************************************************************* */

// const userIdGeneratorByUser = (NumOfChar, NumOfId) => {
//   7;

//   for (let i = 0; i < NumOfId; i++) {
//     let randomId = Math.random()
//       .toString(36)
//       .substring(2, NumOfChar + 2);

//     console.log(`${randomId}`);
//   }
// };

// let NumOfChar = prompt("Enter the number of String :");
// let NumOfId = prompt("Enter the number of id to be generated: ");
// userIdGeneratorByUser(parseInt(NumOfChar), NumOfId);

//2.
// function random(number) {
//   return Math.floor(Math.random() * number);
// }
// function randomHex() {
//   const randomColor = Math.floor(Math.random() * 2 ** 24)
//     .toString(16)
//     .padStart(6, "0");
//   console.log(`#${randomColor}`);
// }
// function randomRgb() {
//   console.log(`rgb(${random(255)},${random(255)},${random(255)})`);
// }
// function generateColors(color, n) {
//   for (let i = 0; i < n; i++) {
//     if (color == "hex") {
//       randomHex();
//     } else {
//       randomRgb();
//     }
//   }
// }
// generateColors("hex", 3); // ['#a3e12f', '#03ed55', '#eb3d2b']
// generateColors("hex", 1); // '#b334ef'
// generateColors("rgb", 3); // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
// generateColors("rgb", 1);
// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }
// console.log(shuffle([1, 2, 3, 4]));

// function s(arr) {
//   for (let i = arr.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * i);
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//   }
//   return arr;
// }
// console.log(s([1, 2, 3, 4]));
