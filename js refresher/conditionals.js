// let num = 3;
// if (num > 0) {
//   console.log(`${num} is a positive number`);
// }

// let weather = "cloudy";
// switch (weather) {
//   case "rainy":
//     console.log("You need a rain coat");
//     break;
//   case "cloudy":
//     console.log("It might be cold ,you might need a jacket");
//     break;
//   case "sunny":
//     console.log("Go out freely");
//     break;
//   default:
//     console.log("No need for rain coat");
// }

// let dayUserInput = prompt("What day is today ?");
// let day = dayUserInput.toLowerCase();
// switch (day) {
//   case "monday":
//     console.log("Today is Monday");
//     break;
//   case "tuesday":
//     console.log("Today is Tuesday");
//     break;
//   case "wednesday":
//     console.log("Today is Wednesday");
//     break;
//   case "thursday":
//     console.log("Today is Thursday");
//     break;
//   case "friday":
//     console.log("Today is Friday");
//     break;
//   case "saturday":
//     console.log("Today is Saturday");
//     break;
//   case "sunday":
//     console.log("Today is Sunday");
//     break;
//   default:
//     console.log("It is not a week day.");
// }

// let age = prompt("Enter your age");
// let DrivingAge = 18;
// switch (true) {
//   case age < DrivingAge:
//     //   let years=new Date().getFullYear()
//     let requiredAge = DrivingAge - age;
//     console.log(`You are left with ${requiredAge} years to drive `);
//     break;
//   case age >= DrivingAge:
//     console.log("you are old enough to drive");
//     break;
//   default:
//     console.log("Nothing");
// }
// let myAge = 25;
// let yourAge = prompt("Enter your age: ");
// yourAge > myAge
//   ? console.log(`You are ${yourAge - myAge} years older then me`)
//   : console.log("You are younger then me");

// let a = 4;
// let b = 3;
// a > b
//   ? console.log(`${a} is greater then ${b}`)
//   : console.log(`${a} is not greater the n${b}`);

// let number = prompt("Enter a number :");
// number % 2 == 0
//   ? console.log(`${number} is an even number`)
//   : console.log(`${number} is an odd number`);

// let score = prompt("Enter your score");
// switch (true) {
//   case score >= 0 && score <= 49:
//     console.log("F");
//     break;
//   case score >= 50 && score <= 59:
//     console.log("D");
//     break;
//   case score >= 60 && score <= 69:
//     console.log("c");
//     break;
//   case score >= 70 && score <= 79:
//     console.log("B");
//     break;
//   case score >= 80 && score <= 109:
//     console.log("A");
//     break;
//   default:
//     console.log("Not a number");
// }

// let input = prompt("Enter any season:");
// let season = input.toLowerCase();
// switch (season) {
//   case "september":
//   case "october":
//   case "november":
//     console.log("The season is Autumn");
//     break;
//   case "december":
//   case "january":
//   case "february":
//     console.log("The season is Winter");
//     break;
//   case "march":
//   case "april":
//   case "may":
//     console.log("The season is spring");
//     break;
//   case "june":
//   case "july":
//   case "august":
//     console.log("The season is Summer");
//     break;
// }
// let input = prompt("what is the day today ?");
// let day = input.toLowerCase();
// day != "friday"
//   ? console.log(`${input} is a weekend`)
//   : console.log(`${input} is a working day`);

// let input = prompt("Enter the month: ");
// let date = input.toLocaleLowerCase();
// let month = Date(date).getMonth();
// console.log(month);
// let year = 2022;

// function getDate(year, month) {
//   return new Date(year, month, 0).getDate();
// }
// console.log(getDate(2022, 1));
