let birthDate=document.querySelector("#birthdate");
let btnCheck=document.querySelector("#check");
let output=document.querySelector("#output");

btnCheck.addEventListener('click',clickHandler);

function clickHandler(){
    let bdayStr=birthDate.value;
    var listOfDate=(birthDate.value).split('-');
    

    var date={
        day   :   Number(listOfDate[2]),
        month :   Number(listOfDate[1]),
        year  :   Number(listOfDate[0])
   
   };
   

    console.log(bdayStr);
    console.log(listOfDate);
    console.log(date);
}


// function dateToStr(date){
// var dateStr={
//     day:'',month:'',year:''
// };
// if(date.day<10){
//     dateStr.day='0'+date.day;
// }
// else{
//     dateStr.day = date.day.toString();
// }
// if(date.month<10){
//     dateStr.month='0'+date.month;
// }
// else{
//     dateStr.month  =date.month.toString();

// dateStr.year=date.year.toString();
//  console.log(dateStr);

// }




// function reverseStr(dateToStr){
//     var ListOfChars= str.split('');
//     var reverseListOfChars= ListOfChars.reverse();
//     var reversedStr= reverseListOfChars.join('');
//     return reversedStr;
// }

// function isPalindrome(reverseStr){
//     let reverse=reverseStr(str);
//     return str===reverse;
     
// }


// function LeapYear(year){
//     if(year%400===0){
//         return true;
//     }
//     if(year%100===0){
//         return false;
//     }
//     if(year%4===0){
//         return true;
//     }
// return false;
// }


// function nxtPalindrome(date){
//     var day=date.day+1;
//     var month=date.month;
//     var year= date.year;
// var daysInMonth =[31,28,31,30,31,30,31,31,30,31,30,31];

// if(month===2){
// if(LeapYear(year)){
//     if(day>29){
//         day=1;
//         month++;
//     }
// }
// else{
//     if(day>daysInMonth[month-1]){
//         day=1;
//         month++;
//     }
// }
// if(month>12){
//     month=1;
//     year++;
// }
// }

// return {day: day,month: month,year: year};

// }

// }