let birthDate=document.querySelector("#birthdate");
let btnCheck=document.querySelector("#check");
let output=document.querySelector("#output");
var date={ day=5,month=12,year=2010
};

btnCheck.addEventListener('click',)

function dateToStr(date){
var dateStr={
    day:'',month:'',year:''
}
if(date.day<10){
    dateStr.day='0'+date.day;
}
else{
    dateStr.day=date.day.toString();
}
if(date.month<10){
    dateStr.month='0'+date.month;
}
else{
    dateStr.month  =date.month.toString();
}
dateStr.year=date.year.toString();
return dateStr;

}




function reverseStr(dateToStr){
    var ListOfChars= str.split('');
    var reverseListOfChars= ListOfChars.reverse();
    var reversedStr= reverseListOfChars.join('');
    return reversedStr;
}

function isPalindrome(reverseStr){
    let reverse=reverseStr(str);
    return str===reverse;
     
}


function LeapYear(year){
    if(year%400===0){
        return true;
    }
    if(year%100===0){
        return false;
    }
    if(year%4===0){
        return true;
    }
return false;
}


function nxtPalindrome(date){
    var day=date.day+1;
    var month=date.month;
    var year= date.year;
var daysInMonth =[31,28,31,30,31,30,31,31,30,31,30,31];

if(month===2){
if(LeapYear(year)){
    if(day>29){
        day=1;
        month++;
    }
}
else{
    if(day>daysInMonth[month-1]){
        day=1;
        month++;
    }
}
if(month>12){
    month=1;
    year++;
}
}

return {day: day,month: month,year: year};

}




