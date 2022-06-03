// class Person {
//   constructor(firstName, lastName, age, country, city) {
//     // console.log(this);
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.country = country;
//     this.city = city;
//   }
// }
// // const person = new Person("Asraful", "Islam");
// // const person1 = new Person("Asraful", "shoag");
// // const person2 = new Person("Asraful", "saniya");
// const person1 = new Person("Asabeneh", "Yetayeh", 250, "Finland", "Helsinki");

// console.log(person1);
// class Person {
//   constructor(
//     firstName = "Asabeneh",
//     lastName = "Yetayeh",
//     age = 250,
//     country = "Finland",
//     city = "Helsinki"
//   ) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.country = country;
//     this.city = city;
//   }
// }
// const person1 = new Person(); // it will take the default values
// const person2 = new Person("Lidiya", "Tekle", 28, "Finland", "Espoo");

// console.log(person1);
// console.log(person2);
// class Person {
//   constructor(firstName, lastName, age, country, city) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.country = country;
//     this.city = city;
//   }
//   getFullName() {
//     const fullName = this.firstName + " " + this.lastName;
//     return fullName;
//   }
// }

// const person1 = new Person("Asabeneh", "Yetayeh", 250, "Finland", "Helsinki");
// const person2 = new Person("Lidiya", "Tekle", 28, "Finland", "Espoo");
// console.log(person1.getFullName());
// console.log(person2.getFullName());
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 0;
    this.skills = [];
  }
  getFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
  get getScore() {
    return this.score;
  }
  get getSkills() {
    return this.skills;
  }
  set setScore(score) {
    this.score += score;
  }
  set setSkill(skill) {
    this.skills.push(skill);
  }
  getPersonInfo() {
    let fullName = this.getFullName();
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(", ") +
        ` and ${this.skills[this.skills.length - 1]}`;
    let formattedSkills = skills ? ` He knows ${skills}` : "";
    let info = `${fullName} is ${this.age}.He lives ${this.city}, ${this.country}. ${formattedSkills}`;
    return info;
  }
  static favoriteSkill() {
    const skills = ["HTML", "CSS", "JS", "React", "Python", "Node"];
    const random = Math.floor(Math.random() * skills.length);
    return skills[random];
  }
  static showDateTime() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    let dateMonthYear = date + "." + month + "." + year;
    let time = hours + ":" + minutes;
    let fullTime = dateMonthYear + " " + time;
    return fullTime;
  }
}
// const person1 = new Person("Asabeneh", "Yetayeh", 250, "Finland", "Helsinki");
// const person2 = new Person("Lidiya", "Tekle", 28, "Finland", "Espoo");
// const person3 = new Person("John", "Doe", 50, "Mars", "Mars city");

// person1.setScore = 1;
// person1.setSkill = "HTML";
// person1.setSkill = "CSS";
// person1.setSkill = "JavaScript";

// person2.setScore = 1;
// person2.setSkill = "Planning";
// person2.setSkill = "Managing";
// person2.setSkill = "Organizing";

// console.log(person1.getScore);
// console.log(person2.getScore);

// console.log(person1.getSkills);
// console.log(person2.getSkills);
// console.log(person3.getSkills);

// console.log(person1.getPersonInfo());
// console.log(person2.getPersonInfo());
// console.log(person3.getPersonInfo());
console.log(Person.favoriteSkill());
console.log(Person.showDateTime());
