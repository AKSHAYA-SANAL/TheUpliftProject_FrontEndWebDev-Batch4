var arr1 = [1, 2, 3, 4]; 
var arr2 = [5, 6, 7, 8, 9];
var type = typeof(arr);
var b = "123";
//document.getElementById("para").innerHTML = type;
//document.getElementById("para").innerHTML = arr instanceof String;
//document.getElementById("para").innerHTML = Array.isArray(arr);

//toString()
/*
document.getElementById("para").innerHTML = arr.toString();
console.log(arr.toString());
*/

//join()
/*document.getElementById("para").innerHTML = arr.join("+");
*/

/*pop() ==> remove last element
var x = arr.pop();
document.getElementById("para").innerHTML = arr;*/

/*push() ==> adds element to last position
arr.push(5);
document.getElementById("para").innerHTML = arr;

function addElem(){
    arr.push(5);
    document.getElementById("para").innerHTML = arr;
}*/

/*shift()   ==> remove first elem
arr.shift();
document.getElementById("para").innerHTML = arr;*/

/*unshift() ==> add elem to first position
arr.unshift("hello");
document.getElementById("para").innerHTML = arr;*/

/*delete
delete arr[1];

console.log(arr);*/

/*splice    ==> remove by splicing
arr.splice(2, 1);

splice  ==> add by splicing
arr.splice(2, 0, "hello");*/

/*concat()
var arr = arr1.concat(arr2, arr2);
arr = arr.concat("hello");*/

var arr = arr2.slice(1, 3);

var num = ["apple"];
num.reverse()
document.getElementById("para").innerHTML = num;
