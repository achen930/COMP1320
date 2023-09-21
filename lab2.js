function getRemainderFromYear(year) {
    // converting to string to get last 2 digits of year
    const yrToString = year.toString();
    const lastTwoDigitsOfYr = yrToString.slice(-2);
    // Step 1: how many 12s fit into the last two digits
    let numOfTwelve = Math.floor(lastTwoDigitsOfYr / 12);
    let remainder = lastTwoDigitsOfYr % 12;
    // Step 3: how many 4s fit into the remainder
    let numOf4 = Math.floor(remainder / 4);
    return [remainder, numOf4, numOfTwelve];
}

function monthCode(month) {
    let monthCodeNum = 0;
    if (month == "April" || month == "July") {
        monthCodeNum = 0;
    } else if (month == "January" || month == "October") {
        monthCodeNum = 1;
    } else if  (month == "May") {
        monthCodeNum = 2;
    } else if  (month == "August") {
        monthCodeNum = 3;
    } else if  (month == "February" || month == "March" || month == "November") {
        monthCodeNum = 4;
    } else if  (month == "June") {
        monthCodeNum = 5;
    } else if  (month == "September" || month == "December") {
        monthCodeNum = 6;
    }
    return monthCodeNum;
}

function nameDayOfWeek(numDayOfWeek) {
    let nameDay = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    let numDayString = nameDay[numDayOfWeek];
    return numDayString;
}

//leap year checker
function isLeapYear(year) {
    if (((year % 4) === 0) || ((year % 100 === 0) && (year % 400 ===0))) {
        return true;
    } else {
        return false;
    }
}

function getDayOfTheWeek(year, month, day, logEnable = true) {
    let capitalizedMonth = month[0].toUpperCase() + month.substring(1);
    let monthCodeNum = Number(monthCode(capitalizedMonth));
    let dayInt = Number(day);
    // Checks century
    let firstTwoDigitsOfYr = year.slice(0, 2);
    if (firstTwoDigitsOfYr == 16 || firstTwoDigitsOfYr == 20) {
        monthCodeNum += 6;
    } else if (firstTwoDigitsOfYr == 17 || firstTwoDigitsOfYr == 21) {
        monthCodeNum += 4;
    } else if (firstTwoDigitsOfYr == 18) {
        monthCodeNum += 2;
    }
    
    if (isLeapYear(year) === true) {
        if (month == "January" || month == "February") {
            monthCodeNum -= 1;
        }
    }
    let [remainder, numOf4, numOfTwelve] = getRemainderFromYear(year);
    let totalNum = numOfTwelve + remainder + numOf4 + dayInt + monthCodeNum;
    let numDayOfWeek = totalNum % 7;
    let dayOfWeek = nameDayOfWeek(numDayOfWeek);
    if (logEnable == true) {
        console.log(year, month, day);
        console.log(dayOfWeek);
    }
    return dayOfWeek;
}



function days(month) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let daysInMonth = 0;
    for (month of months) {
        if (month == months[0, 2, 4, 6, 7, 9, 11]) {
            daysInMonth = 31;
        } else if (month == months[1]) {
            daysInMonth = 28;
        } else if (month == months[3, 5, 8, 10]) {
            daysInMonth = 30;
        } 
    }
    return daysInMonth;
}

function makeCalendar() {
   let monthsInYear = 12;
   const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
   let year = "2023";
   let monthCount = 1;
   for (month in months) {
       let daysInMonth = days(month);
       if (month <= monthsInYear) {
           for (let day = 1; day <= daysInMonth; day++){
                let dayOfWeek = getDayOfTheWeek(year, months[monthCount - 1], day, false);
                console.log(`${day} - ${monthCount} - ${year} is a ${dayOfWeek}`);
            }
       monthCount += 1; 
       } else {
        monthCount = 0;
       }
   }
}

module.exports = { getDayOfTheWeek, makeCalendar };