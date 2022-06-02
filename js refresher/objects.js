// const rectangle = {
//   length: 20,
//   width: 20,
// };
// console.log(rectangle);

// const person = {
//   firstName: "Asraful",
//   lastName: "Shoag",
//   age: 250,
//   country: "Bangladesh",
//   city: "Dhaka",
//   skills: ["HTML", "CSS", "JS", "REACT", "PYTHON", "C++", "NODE", "MONGODB"],
//   isMarried: false,
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
////////////********************** */
// person.nationality = "Bangladeshi";
// person.title = "student";
// person.getPersonInfo = function () {
//   let skillsWithoutLastSkill = person.skills
//     .slice(0, person.skills.length - 1)
//     .join(",");
//   let lastSkill = this.skills.slice(this.skills.length - 1)[0];
//   let fullName = this.getFullName();
//   let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe knows ${skillsWithoutLastSkill} and ${lastSkill}`;
//   console.log(lastSkill);

//   return statement;
// };
// console.log(person.getPersonInfo());
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.isMarried);
// console.log(person.skills);
// console.log(person.getFullName());
// const person = {
//   firstName: "Asabeneh",
//   age: 250,
//   country: "Finland",
//   city: "Helsinki",
//   skills: ["HTML", "CSS", "JS"],
//   title: "teacher",
//   address: {
//     street: "Heitamienkatu 16",
//     pobox: 2002,
//     city: "Helsinki",
//     school: { mmm: "MMM", sss: "ssss" },
//   },
//   getPersonInfo: function () {
//     return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`;
//   },
// };

// const copyPerson = Object.assign({}, person);
// console.log(copyPerson);
// const keys = Object.keys(copyPerson);
// console.log(keys);
// const address = Object.keys(copyPerson.address);
// console.log(address);
// const school = Object.keys(copyPerson.address.school);
// console.log(school);
/////////////******************************************** */
// const skills = Object.values(copyPerson.skills);
// console.log(skills);
// const entries = Object.entries(copyPerson);
// console.log(entries);
// console.log(copyPerson.hasOwnProperty("name"));

// const dog = {};
// console.log(dog);
// dog.name = "Tom";
// dog.legs = "4";
// dog.color = "brown";
// dog.age = "4";
// dog.bark = function () {
//   return "woof woof";
// };
// console.log(dog.name);
// console.log(dog.legs);
// console.log(dog.color);
// console.log(dog.age);
// console.log(dog.bark);
// dog.breed = "japanese";
// dog.getDogInfo = function () {
//   let statement = `${this.name} is a ${this.color} dog.\nHe is of ${
//     this.breed
//   } and he is ${this.age} old and he has ${
//     this.legs
//   } legs and he barks ${this.bark()}`;
//   return statement;
// };
// console.log(dog.getDogInfo());
// const users = {
//   Alex: {
//     email: "alex@alex.com",
//     skills: ["HTML", "CSS", "JavaScript"],
//     age: 20,
//     isLoggedIn: false,
//     points: 30,
//   },
//   Asab: {
//     email: "asab@asab.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "Redux",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//     ],
//     age: 25,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Brook: {
//     email: "daniel@daniel.com",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
//     age: 30,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Daniel: {
//     email: "daniel@alex.com",
//     skills: ["HTML", "CSS", "JavaScript", "Python"],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   John: {
//     email: "john@john.com",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
//     age: 20,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Thomas: {
//     email: "thomas@thomas.com",
//     skills: ["HTML", "CSS", "JavaScript", "React"],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   Paul: {
//     email: "paul@paul.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//       "Python",
//       "Express",
//       "C++",
//     ],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
// };

// let arr = [];
// let user = Object.entries(users);
// for (let i = 0; i < user.length; i++) {
//   let max = user[i][1].skills.length;
//   arr.push(max);
// }
// // console.log(arr);
// let max = Math.max(...arr);
// let maxIndex = arr.indexOf(max);
// console.log(`${user[maxIndex][0]} has the most skills`);
// let countLoggedIn = 0;
// let countPoints = 0;
// let user = Object.entries(users);

// for (let i = 0; i < user.length; i++) {
//   let loggedInUsers = user[i][1].isLoggedIn;
//   // console.log(loggedInUsers.valueOf("true"));
//   if (loggedInUsers.valueOf("true")) {
//     countLoggedIn += 1;
//   }
//   let userPoints = user[i][1].points;
//   userPoints >= 50 ? countPoints++ : "";
// }
// console.log(`${countLoggedIn} users are currently logged in`);
// console.log(`${countPoints} users have greater then or equal to 50 points`);
//////**************************************************** */
// let user = Object.entries(users);
// let arr = [];
// for (let i = 0; i < user.length; i++) {
//   let skills = user[i][1].skills;
//   arr.push(skills);
// }

// for (let j = 0; j < arr.length; j++) {
//   let items = arr[j];
//   if (
//     items.includes("React") &&
//     items.includes("MongoDB") &&
//     items.includes("Express") &&
//     items.includes("Node")
//   ) {
//     console.log(`${user[j][0]} is a MARN stack developer`);
//   } else {
//     continue;
//   }
// }
// const copyUser = Object.assign({}, users);

// copyUser.Asraful = {
//   email: "asraful@gmail.com",
//   skills: ["HTML", "CSS", "SCSS", "JS", "REACT"],
//   age: 22,
//   isLoggedIn: true,
//   points: 40,
// };
// console.log(copyUser);
// console.log(Object.entries(users));
// console.log(Object.values(users));

//**************************** */
// let personAccount = {
//   firstName: "Asraful",
//   lastName: "shoag",
//   incomes: 150,
//   expenses: 12,
//   totalIncome: function () {
//     let totalIncome = this.incomes + this.addIncome;

//     return totalIncome;
//   },
//   totalExpenses: function () {
//     return this.expenses - this.addExpenses();
//   },
//   accountInfo: function () {
//     let statement = `${this.totalIncome} is to total income.\n${this.totalExpenses} is the total expenses of ${this.firstName} ${this.lastName} `;
//     return statement;
//   },
//   addIncome: function () {
//     let add = prompt("Enter income amount");
//     // const sum = add + this.incomes;
//     return add;
//   },
//   addExpenses: function () {
//     let add = prompt("Enter expenses");
//     return this.income - add;
//   },
//   accountBalance: function () {
//     return this.totalIncome - this.totalExpenses;
//   },
// };
// console.log(personAccount.incomes);
// console.log(personAccount.expenses);
// console.log(personAccount.totalIncome());

const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
  },
];

// const signup = function signUp() {
//   let userDict = {};
//   let r = (Math.random() + 1).toString(36).substring(6);
//   userDict._id = `${r}`;
//   let nameOfUser = prompt("Enter your name");
//   for (const name of users) {
//     if (name.username.includes(nameOfUser)) {
//       console.log(`The user ${name.username} already has an account .`);
//     }
//     userDict.username = `${nameOfUser}`;
//   }
//   userDict.email = `${prompt("Enter your email :")}`;
//   userDict.password = `${prompt("Enter your password")}`;
//   userDict.createdAt = `${new Date().toLocaleString()}`;
//   userDict.isLoggedIn = true;

//   users.push(userDict);
//   return userDict;
// };

// signup();
// console.log(users);

// function singIn() {
//   for (const user of users) {
//     user.isLoggedIn = true;
//   }
// }
// singIn();
// console.log(users);
