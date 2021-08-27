/*--------------------------Find HTML Elements--------------------
document.getElementById()
document.getElementsByClassName()
document.getElementsByTagName()
querySelectorAll()

document.getElementById("Head").innerHTML = "Head - ID";
var x = document.getElementsByClassName("p");
document.getElementById("Head").innerHTML = "Head - ID"+ x[1].innerHTML;
document.getElementByTagName("blockquote");
document.getElementById("Head").innerHTML = "Head - ID"+ x[1].innerHTML;


var x = document.querySelectorAll("h1#Head");
document.getElementById("Head").innerHTML = "Head - ID"+ x[0].innerHTML;

var x = document.querySelectorAll("p.para");
document.getElementById("Head").innerHTML = "Head - ID"+ x[0].innerHTML;*/

/*-------------------------Changing HTML Content--------------------
innerHTML
document.write()
*/

/*-----------------------Change Attributes----------------*/

document.getElementById("link").href = "https://www.cowin.gov.in/";
document.getElementById(" ").src = " ";
document.getElementById(" ").alt = " ";
