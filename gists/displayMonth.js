var dayObject = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday"
}

var monthObject = {
  0: {
        month: "January",
        lastDate: 31
    },
  1: {
        month: "February",
        lastDate: 28
    },
  2: {
        month: "March",
        lastDate: 31
    },
  3: {
        month: "April",
        lastDate: 30
    },
  4: {
        month: "May",
        lastDate: 31
    },
  5: {
        month: "June",
        lastDate: 30
    },
  6: {
        month: "July",
        lastDate: 31
    },
  7: {
        month: "August",
        lastDate: 31
    },
  8: {
        month: "September",
        lastDate: 30
    },
  9: {
        month: "October",
        lastDate: 31
    },
  10: {
        month: "November",
        lastDate: 30
    },
  11: {
        month: "December",
        lastDate: 31
    }
}

var calendar = document.querySelector("#calendar");
var month = document.getElementsByClassName("month");
var dropDownYear = document.querySelector("#dropDownYear");
var dropDownMonth = document.querySelector("#dropDownMonth");
var year = document.getElementsByClassName("year");

var today = new Date();
var todayMonth = today.getMonth();
var todayYear = today.getFullYear();
var firstDate = new Date(todayYear,todayMonth,1);
var firstDateDay = firstDate.getDay();

var displayDate = 1;
var assignDay = firstDateDay;
var weekHTML = "";
var monthHTML = "";
var yearHTML = "";
var weekCounter;

month[todayMonth].setAttribute("selected","");
checkLeapYear();

for(var i = 1970; i <= todayYear + 5; i++){
    yearHTML = yearHTML + "<option class='year'";
    if(i == todayYear) yearHTML = yearHTML + "selected";
    yearHTML =  yearHTML + ">" + i + "</option>"
}
dropDownYear.innerHTML = yearHTML;


calendar.addEventListener("click",function(){
  alert(this.value);
});

dropDownYear.addEventListener("change", function(){
  todayYear = this.value;
  weekHTML = '';
  checkLeapYear();
  var firstDate = new Date(todayYear,todayMonth,1);
  var firstDateDay = firstDate.getDay();
  displayDate = 1;
  assignDay = firstDateDay;
  for(var i = 0; i <= 5; i++){
          weekEntry();
  }
});

dropDownMonth.addEventListener("change",function(){
  todayMonth = this.value;
  weekHTML = '';
  var firstDate = new Date(todayYear,todayMonth,1);
  var firstDateDay = firstDate.getDay();
  displayDate = 1;
  assignDay = firstDateDay;
  for(var i = 0; i <= 5; i++){
          weekEntry();
  }
});

function weekEntry(){
  weekHTML = weekHTML + "<tr>";
  for(var i = 0; i <= 6; i++){
      if(displayDate <= monthObject[todayMonth]["lastDate"]){
        weekHTML = weekHTML + "<td class='day' value='" + displayDate + "'>";
        if(i == assignDay) {
          weekHTML = weekHTML + displayDate;
          assignDay ++;
          displayDate ++;
        }
        weekHTML = weekHTML + "</td>";
      }
    }
  weekHTML = weekHTML + "</tr>";
  calendar.innerHTML = weekHTML;
  assignDay = 0;
}

for(var i = 0; i <= 5; i++){
        weekEntry();
}

function checkLeapYear(){
    ((todayYear % 100 != 0) && todayYear % 4 == 0) || (todayYear % 400 == 0) ? monthObject[1]["lastDate"] = 29 : monthObject[1]["lastDate"] = 28
}

var dayObject = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday"
}

var monthObject = {
  0: {
        month: "January",
        lastDate: 31
    },
  1: {
        month: "February",
        lastDate: 28
    },
  2: {
        month: "March",
        lastDate: 31
    },
  3: {
        month: "April",
        lastDate: 30
    },
  4: {
        month: "May",
        lastDate: 31
    },
  5: {
        month: "June",
        lastDate: 30
    },
  6: {
        month: "July",
        lastDate: 31
    },
  7: {
        month: "August",
        lastDate: 31
    },
  8: {
        month: "September",
        lastDate: 30
    },
  9: {
        month: "October",
        lastDate: 31
    },
  10: {
        month: "November",
        lastDate: 30
    },
  11: {
        month: "December",
        lastDate: 31
    }
}

var calendar = document.querySelector("#calendar");
var month = document.getElementsByClassName("month");
var dropDownYear = document.querySelector("#dropDownYear");
var dropDownMonth = document.querySelector("#dropDownMonth");
var year = document.getElementsByClassName("year");

var today = new Date();
var todayMonth = today.getMonth();
var todayYear = today.getFullYear();
var firstDate = new Date(todayYear,todayMonth,1);
var firstDateDay = firstDate.getDay();

var displayDate = 1;
var assignDay = firstDateDay;
var weekHTML = "";
var monthHTML = "";
var yearHTML = "";
var weekCounter;

month[todayMonth].setAttribute("selected","");
checkLeapYear();

for(var i = 1970; i <= todayYear + 5; i++){
    yearHTML = yearHTML + "<option class='year'";
    if(i == todayYear) yearHTML = yearHTML + "selected";
    yearHTML =  yearHTML + ">" + i + "</option>"
}
dropDownYear.innerHTML = yearHTML;


calendar.addEventListener("click",function(){
  alert(this.value);
});

dropDownYear.addEventListener("change", function(){
  todayYear = this.value;
  weekHTML = '';
  checkLeapYear();
  var firstDate = new Date(todayYear,todayMonth,1);
  var firstDateDay = firstDate.getDay();
  displayDate = 1;
  assignDay = firstDateDay;
  for(var i = 0; i <= 5; i++){
          weekEntry();
  }
});

dropDownMonth.addEventListener("change",function(){
  todayMonth = this.value;
  weekHTML = '';
  var firstDate = new Date(todayYear,todayMonth,1);
  var firstDateDay = firstDate.getDay();
  displayDate = 1;
  assignDay = firstDateDay;
  for(var i = 0; i <= 5; i++){
          weekEntry();
  }
});

function weekEntry(){
  weekHTML = weekHTML + "<tr>";
  for(var i = 0; i <= 6; i++){
      if(displayDate <= monthObject[todayMonth]["lastDate"]){
        weekHTML = weekHTML + "<td class='day' value='" + displayDate + "'>";
        if(i == assignDay) {
          weekHTML = weekHTML + displayDate;
          assignDay ++;
          displayDate ++;
        }
        weekHTML = weekHTML + "</td>";
      }
    }
  weekHTML = weekHTML + "</tr>";
  calendar.innerHTML = weekHTML;
  assignDay = 0;
}

for(var i = 0; i <= 5; i++){
        weekEntry();
}

function checkLeapYear(){
    ((todayYear % 100 != 0) && todayYear % 4 == 0) || (todayYear % 400 == 0) ? monthObject[1]["lastDate"] = 29 : monthObject[1]["lastDate"] = 28
}
