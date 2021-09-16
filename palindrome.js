let birthDate=document.querySelector("#birthdate");
let btnCheck=document.querySelector("#check");
let output=document.querySelector("#output");

btnCheck.addEventListener('click',clickHandler);

function clickHandler(){
    let bdayStr=birthDate.value;
    if(bdayStr!==''){
    var listOfDate=bdayStr.split('-');
    var date={
        day   :   Number(listOfDate[2]),
        month :   Number(listOfDate[1]),
        year  :   Number(listOfDate[0])
   
   };
   var rev=checkPalindromeForAllDateFormats(date);

   if(rev){
output.innerText="WOW! Your Birthday is a Palindrome";
   }
   else{
       var [count,nextDate]=getNextPalindromeDate(date);
       output.innerText="oh! your Birthday is not a Palindrome And the next date is "+nextDate.day+'-'+nextDate.month+'-'+nextDate.year+" and you missed it by "+count+" days";
   }}
   else{
       output.innerText="please enter Your Birth-Date"
   }

   
}


function dateToStr(date){
var dateStr={
    day:'',month:'',year:''
};
if(date.day<10){
    dateStr.day='0'+date.day;
}
else{
    dateStr.day = date.day.toString();
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




function reverseStr(str){
    var ListOfChars= str.split('');
    var reverseListOfChars= ListOfChars.reverse();
    var reversedStr= reverseListOfChars.join('');
    return reversedStr;
}

function isPalindrome(str){
    let reverse=reverseStr(str);
    return str===reverse;
     
}
function getAllDateFormats(date) {
    var dateStr = dateToStr(date);
  
    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
    var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;
  
    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
  }
  function checkPalindromeForAllDateFormats(date){
    var listOfPalindromes = getAllDateFormats(date);
  
    var flag = false;
  
    for(var i=0; i < listOfPalindromes.length; i++){
      if(isPalindrome(listOfPalindromes[i])){
        flag = true;
        break;
      }
    }
    
    return flag;
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


function nxtDate(date){
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


return {day: day,month: month,year: year};

}

function getNextPalindromeDate(date){
    var count = 0;
    var nextDate = nxtDate(date);
  
    while(1){
      count++;
      var isPalindrome = checkPalindromeForAllDateFormats(nextDate);
      if(isPalindrome){
        break;
      }
      nextDate = nxtDate(nextDate);
    }
   
    
    return [count, nextDate];

  }

 