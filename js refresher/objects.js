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
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
      "Python",
      "Express",
      "C++",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

let arr = [];
let user = Object.entries(users);
for (let i = 0; i < user.length; i++) {
  let max = user[i][1].skills.length;
  arr.push(max);
}
// console.log(arr);
let max = Math.max(...arr);
let maxIndex = arr.indexOf(max);
console.log(`${user[maxIndex][0]} has the most skills`);
