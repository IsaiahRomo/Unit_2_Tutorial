"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Tutorial Case

   Author: Isaiah Romo
   Date:  1/27/2020

   Filename:   lht_calendar.js  

   Function List:
   createCalendar(calDate)
      Creates the calendar table for the month specified in the
      calDate parameter. The current date is highlighted in 
      the table.

   calCaption(calDate)
      Writes the caption of the calendar table

   calWeekdayRow()
      Writes the weekday title rows in the calendar table

   daysInMonth(calDate)
      Returns the number of days in the month from calDate

   calDays(calDate)
      Writes the daily rows in the calendar table, highlighting calDate
	
*/

var thisDay = new Date("August 24, 2018");

document.getElementById("calendar").innerHTML = createCalendar(thisDay);

function createCalendar(calDate){
   var calendarHTML = "<table id='calendar_table'>";
   calendarHTML += calCaption(calDate);
   calendarHTML += calWeekdayRow();
   calendarHTML += calDays(calDate);
   calendarHTML += "</table>";
   return calendarHTML;
}

// example
// var food = new Array("chicken", "bread", "soup");
// var food = ["chicken", "bread", "soup"]
// food[0]; //chicken
// food[2]; //soup
// food[3]; //undefined
// food[3] = "taco";
// food[3] //taco

// write captions on the calendar
function calCaption(calDate){
   // array contains the list of the names of the months
   var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
   var thisMonth = calDate.getMonth();
   var thisYear = calDate.getFullYear();

   return "<caption>" + monthName[thisMonth] + " " + thisYear + "</caption>";
}


// var array = new Array(1, 3, 5, 1, 7, 4, 9, 3, 2, 1, 0, 9, 5, 6, 9, 3, 1);

// for(var i = 0; i < array.length; i + 1){
//    output.innerHTML += array[i];
// }
// for(var i = 2; i < array.length; i + 2){
//    output.innerHTML += array[i];
// }
// for(var i = 4; i < array.length; i + 5){
//    var added = 0
//    added += array[i]
//    output.innerHTML += added;
// }
// for(var i = 3; i < array.length / 2; i + 1){
//    var added = 0
//    added += array[i]
//    output.innerHTML += added;
// }

// function ascending(a, b){
//    array.reverse()
// }
// function sort(up){
//    array.reverse()
// }

// loop1:
// while(x == true){
//    loop2:
//    while(y == true){
//       if(x === y) {
//          continue loop1;
//       }
//    }
// }

//function that calculates the number of days in each month
function daysInMonth(calDate){
   //array of days in each month
   var dayCount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

   //finds the current month
   var thisMonth = calDate.getMonth();

   //to account for leap years
   var thisYear = calDate.getFullYear();
   if(thisYear % 4 === 0){
      if(thisYear % 100 !== 0 || thisYear % 400 === 0){
         dayCount[1] = 29;
      }
   }

   //returns the number of days for the current month
   return dayCount[thisMonth];
}

// function to write a table row of weekdays abbreviations
function calWeekdayRow(){
   //arrat of weekday abbr.
   var dayName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
   var rowHTML = "<tr>";

   // look through the dayName array and place them across the top
   for(var i = 0; i < dayName.length; i++){
      rowHTML += "<th class='calendar_weekdays'>" + dayName[i] + "</th>";
   }
   rowHTML += "</tr>";
   return rowHTML;
}

function calDays(calDate){
   // determine the starting day
   var day = new Date(calDate.getFullYear(), calDate.getMonth(), 1)
   var firstDay = day.getDay();
   // write blank spaces on the days before the first day
   var htmlCode = "<tr>";
   for(var i = 0; i < firstDay; i++){
      htmlCode += "<td></td>";
   }

   // write cells for each day of the month
   var totalDays = daysInMonth(calDate);
   for(var i = 1; i < totalDays; i++){
      day.setDate(i);
      firstDay = day.getDay();
      if(firstDay === 0){
         htmlCode += "<tr>";
      }
      htmlCode += "<td class='calendar_dates'>" + i + "</td>";
      if(firstDay === 6){
         htmlCode += "</tr>";
      }
   }
   return htmlCode;
}