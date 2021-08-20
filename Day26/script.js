/*------------------------------SWITCH--------------------------------*/

/*EXAMPLE-1
var flower = "rose1";

switch (flower) {
    case "jasmine" :    // if (flower === "jasmine")
        document.write("Jasmine");
        break;
    case "rose":
        document.write("rose");
        break;
    case "marigold":
        document.write("marigold");
        break;
    default:
        document.write("Flower not in list");
}*/
/*Example-2
var num = 200;

switch (true) {
    case num < 20:
        document.write("Number is out of scope");
        break;
    case num < 50:
        document.write("Number is less than 50");
        break;
    case num < 75:
        document.write("Number is less than 75");
        break;
    case num < 100:
        document.write("Number is less than 100");
        break;
    case num > 100:
        document.write("Number is out of scope");
        break;
    default:
        document.write("Number is too large");
}*/
/*EXAMPLE-3
var num = 200;

switch (true) {
    case num < 20:
    case num > 100:
        document.write("Number is out of scope");
        break;
    case num < 50:
        document.write("Number is less than 50");
        break;
    case num < 75:
        document.write("Number is less than 75");
        break;
    case num < 100:
        document.write("Number is less than 100");
        break;
    default:
        document.write("Number is too large");
}*/

/*-----------------------------------LOOP-----------------------------*/
/*FOR   FOR-IN  FOR-OF  WHILE   DO_WHILE*/
var arr = ["hello ", "world ", "! ", "How ", "are ", "you ", "?"];
var out = " ";
/*out += arr[0];   //out = out + arr[0]("hello") ==> out = " " + hello
out += arr[1];
out += arr[2];
out += arr[3];
out += arr[4];
out += arr[5];
out += arr[6];*/
/*---------------------------FOR------------------------
for (let i = 0; i < arr.length ; i++) {
    out += arr[i];
}*/

/*---------------------------FOR_IN-------------------
for (x in arr){
    out += arr[x];
}*/

/*---------------------------Array.forEach()-------------------

x = arr.forEach(func);

function func(value, index, array) {
    out += value;
}*/

/*-----------------------FOR_OF-----------------------*/
for (x of arr) {
    out += x;
}


document.write(out);
