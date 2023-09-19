const getDayOfTheWeek = require("./lab2").getDayOfTheWeek;
const makeCalendar = require("./lab2").makeCalendar;
const readlineSync = require("readline-sync");

let year = readlineSync.question("Enter a Year: ");
let month = readlineSync.question("Enter a Month: ");
let day = readlineSync.question("Enter a Day: ");

getDayOfTheWeek(year, month, day);
makeCalendar();
