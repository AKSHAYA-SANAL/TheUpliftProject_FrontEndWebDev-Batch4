//const date = new Date();  // current date
//const date = new Date(2025, 11);    //(year, month)
//const date = new Date(2025, 10, 24);    //(year, month, date)
//const date = new Date(2025, 10, 24, 20);    //(year, month, date, hour)
//const date = new Date(2025, 10, 24, 20, 12);    //(year, month, date, hour, minute)
//const date = new Date(2025, 14, 24, 200, 12, 90);    //(year, month, date, hour, minute, second)
//const date = new Date(25, 9, 24, 200, 12, 90);    //(year(19xx), month, date, hour, minute, second)
//let date = new Date(2024);    //(millisecond)
//let date = new Date("2024");    //("year")
//date = new Date("08/18/2021");    //("MM/DD/YYYY")
//date = date.toISOString();
let date = new Date();

/*-------------------GET METHODS------------------*/
//date = date.getFullYear();
//date = date.getMonth();
//date = date.getDate();
//date = date.getDay();
//date = date.getHours();
//date = date.getMinutes();
//date = date.getSeconds();
//date = date.getMilliseconds();

/*-----------------------SET METHOD---------------*/
date.setFullYear(2025);
date.setFullYear(2025, 10, 23);
date1 = new Date();
date1.setFullYear(2005, 11, 12);

let age = date-date1;
var curr_age = new Date(age);

curr_age = curr_age.getFullYear() - 1970;
//date = date.getMonth();
//date = date.getDate();
//date = date.getDay();
//date = date.getHours();
//date = date.getMinutes();
//date = date.getSeconds();
//date = date.getMilliseconds();
//document.write(curr_age);


/*--------------------------CONDITION STATEMENTS----------------------------*/

/*_------------------------------IF-----------------------------------------
var num = 10;
if (num === 10) {
    document.write("Number is 10");
}
document.write("<br> Program excecuted");*/

/*_------------------------------IF-ELSE-----------------------------------------
var num = 10;
if (num === 10) {
    document.write("Number is 10");
} else {
    document.write("Number is not 10");
}
document.write("<br> Program excecuted");*/

/*_------------------------------ELSE IF-----------------------------------------*/
var num = 15;
if (num/2 == 3) {
    document.write("Number is 6");
} else if (num/3 == 5){
    document.write("Number is 15");
} else {
    document.write("Number is not 10");
}
document.write("<br> Program excecuted");
