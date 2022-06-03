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

// function factorial(num) {
//   if (num < 0) return -1;
//   else if (num == 0) return 1;
//   else {
//     return num * factorial(num - 1);
//   }
// }
// console.log(factorial(3));
// function isEmpty(item) {
//   if (item.length == 0) {
//     return "Empty";
//   }
//   return "NotEmpty";
// }
// console.log(isEmpty([]));

// function average(arr) {
//   let sum = 0,
//     avg;
//   for (const elem of arr) {
//     if (typeof elem != "number") return "Array contains string";
//     else {
//       sum += elem;
//       avg = sum / arr.length;
//     }
//   }

//   return avg;
// }
// console.log(average([1, 2, 3, "String"]));
// console.log(average([1, 2, 3, 4, 5]));

//Higher Order Function

// const callBack = (n) => {
//   console.log(n ** 2);
//   return n ** 2;
// };
// function cube(n) {
//   return callBack(n) * n;
// }
// console.log(cube(3));

// const higherOrder = (n) => {
//   const doSomething = (m) => {
//     const doWhatEver = (t) => {
//       return 2 * n + 3 * m + t;
//     };
//     return doWhatEver;
//   };
//   return doSomething;
// };
// console.log(higherOrder(2)(3)(10));

// const numbers = [1, 2, 3, 4];
// const sumArray = (arr) => {
//   let sum = 0;
//   const callback = function (element) {
//     console.log(element);
//     sum += element;
//   };
//   arr.forEach(callback);
//   return sum;
// };
// console.log(sumArray(numbers));

const posts = [
  {
    title: "Post One",
    body: "This is post one",
  },
  {
    title: "Post Two",
    body: "This is post Two",
  },
];

// function getPosts() {
//   setTimeout(() => {
//     let output = "";
//     posts.forEach((post, i) => {
//       output += `${post.title} `;
//     });
//     console.log(output);
//   }, 1000);
// }
// function createPost(post, callback) {
//   setTimeout(() => {
//     posts.push(post);
//     callback();
//   }, 2000);
// }

// createPost({ title: "Post Three", body: "This is post three" }, getPosts);

//Promises
// function getPosts() {
//   setTimeout(() => {
//     let output = "";
//     posts.forEach((post, i) => {
//       output += `${post.title} `;
//     });
//     console.log(output);
//   }, 1000);
// }
// function createPost(post) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.push(post);
//       const err = false;
//       if (!err) {
//         resolve();
//       }
//       reject("Error: something went wrong");
//     }, 2000);
//   });
// }
// createPost({ title: "Post Three", body: "This is post three" }).then(getPosts);

// const numbers = [1, 2, 3, 4];

// const sumArray = (arr) => {
//   let sum = 0;
//   arr.forEach((element) => {
//     sum += element;
//   });
//   return sum;
// };
// console.log(sumArray(numbers));

// const numbers = [1, 3, 2];
// const [num1, num2, num3] = numbers;
// console.log(num1, num2, num3);

// const fullStack = [
//   ["HTML", "CSS", "JS", "React"],
//   ["Node", "Express", "MongoDB"],
// ];

// const [frontEnd, backEnd] = fullStack;
// console.log(frontEnd, backEnd);

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const [num1, num2, ...rest] = nums;
// console.log(num1, num2, rest);
// const countriesDes = [
//   ["Finland", "Helsinki"],
//   ["Sweden", "Stockholm"],
//   ["Norway", "Oslo"],
// ];

// for (const [country, city] of countriesDes) {
//   console.log(country, city);
// }

// const fullStack = [
//   ["HTML", "CSS", "JS", "React"],
//   ["Node", "Express", "MongoDB"],
// ];

// for (const [first, second, third, fourth] of fullStack) {
//   console.log(first, second, third, fourth);
// }

// const rectangle = {
//   width: 20,
//   height: 10,
// };
// // let weight = rectangle.width
// // let height = rectangle.height

// let { width, height } = rectangle;
// console.log(width, height);

// const props = {
//   user:{
//     firstName:'Asabeneh',
//     lastName:'Yetayeh',
//     age:250
//   },
//   post:{
//     title:'Destructuring and Spread',
//     subtitle:'ES6',
//     year:2020
// },
// skills:['JS', 'React', 'Redux', 'Node', 'Python']

// }

// const {user:{firstName,lastName,age},post:{title,subtitle,year},skills:{skillOne,skillTwo,skillThree,skillFourth,skillFive}}=props

// const person = {
//   firstName: "Asabeneh",
//   lastName: "Yetayeh",
//   age: 250,
//   country: "Finland",
//   job: "Instructor and Developer",
//   skills: [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "React",
//     "Redux",
//     "Node",
//     "MongoDB",
//     "Python",
//     "D3.js",
//   ],
//   languages: ["Amharic", "English", "Suomi(Finnish)"],
// };
// const { firstName, lastName, age, country, job, skills, languages } = person;

// const getPersonInfo = () => {
//   const language = person.languages.length - 1;
//   const lastIndex = person.languages.slice(0, language).join(",");
//   const lastItem = person.languages.slice(language, person.languages.length);
//   let statement = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${skills} and He speaks ${lastIndex} and a little bit of ${lastItem} `;
//   return statement;
// };
// console.log(getPersonInfo());

// const frontEnd = ["HTML", "CSS", "JS", "React"];
// const backEnd = ["Node", "Express", "MongoDB"];
// const fullStack = [...frontEnd, ...backEnd];
// console.group(fullStack);
// const user = {
//   name: "Asabeneh",
//   title: "Programmer",
//   country: "Finland",
//   city: "Helsinki",
// };
// const copiedUser = { ...user };
// console.log(copiedUser);
// const copyObj = Object.assign({}, user);
// console.log(copyObj);

// const sumOfAllNumbers = (...args) => {
//   let sum = 0;
//   for (const num of args) {
//     sum += num;
//   }
//   return sum;
// };
// console.log(sumOfAllNumbers(1, 2, 3, 4, 5));
// const countriesArr = ["Finland", "Estonia", "Sweden", "Norway"];

// const newCountry = [];
// countriesArr.forEach((country, i) => newCountry.push(country));
// console.log(newCountry);
// countriesArr.forEach((country, i, arr) =>
//   console.log(i, country.toUpperCase())
// );

// const num = [1, 2, 3, 4, 15];
// let sum =
//   // num.forEach((n) => {
//   //   sum += n;
//   // });
//   // console.log(sum);
//   //reduce
//   num.reduce((previousValue, currentValue) => {
//     return previousValue + currentValue;
//   });
// console.log(sum);
// const countriesMap = ["Finland", "Estonia", "Sweden", "Norway"];

// const newCountries = countriesMap.map((country) => country.toUpperCase());
// console.log(newCountries);
// const countryLength = countriesMap.map((country) => country.length);
// console.log(countryLength);
// const nums = [1, 2, 3, 4, 5];
// const squares = nums.map((n) => n ** 2);
// const countriesDis = ["Finland", "Estonia", "Sweden", "Norway", "Iceland"];
// const countriesWithLand = countriesDis.filter((country) =>
//   country.includes("land")
// );
// console.log(countriesWithLand);

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const even = numbers.filter((n) => n % 2 === 0);
// const odd = numbers.filter((n) => n % 2 !== 0);
// console.log(even);
// console.log(odd);
// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sum = numbers.reduce((prev, curr) => prev + curr, 5);
// console.log(sum);
// const strs = ["Hello", "world", "!"];

// const helloWorld = strs.reduce((prev, curr) => prev + " " + curr);
// console.log(helloWorld);
// const numbers = [1, 2, 3, 4, 5];
// const mul = numbers.reduce((prev, curr) => prev * curr, 10);
// console.log(mul);
// const countriesWay = ["Finland", "Estonia", "Sweden", "Norway", "Iceland"];
// const countryWithWay = countriesWay.find((country) => country.length === 6);
// console.log(countryWithWay);

const productsI = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
//1.
// productsI.forEach((product) => console.log(product.product));
//2.
// productsI.forEach((c) => {
//   if (c.price == " ") {
//     console.log(`The price of ${c.product} is unknown euros`);
//   } else {
//     console.log(`The price of ${c.product} is ${c.price} euros`);
//   }
// });
//3.
// let sum = 0;
// const nums = productsI.filter((f) => typeof f.price !== "string");
// const summation = nums.forEach((n) => {
//   sum += n.price;
// });
// console.log(sum);

//4.
// const priceArr = productsI.map((product) => product.price);
// console.log(priceArr);

//5.
// const prices = productsI.filter((f) => typeof f.price !== "string");
// console.log(prices);
//6.

// const sumOfAllPrices = productsI
//   .map((product) => product.price)
//   .filter((f) => typeof f !== "string")
//   .reduce((prev, curr) => prev + curr);
// console.log(sumOfAllPrices);

//7.
//8.
// const value = productsI.find((p) => typeof p.price === "string");

// console.log(value);
