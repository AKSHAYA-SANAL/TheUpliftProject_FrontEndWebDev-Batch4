/*------------addEventListener------------

document.getElementById("img1").addEventListener("mouseover", function() {
    document.getElementById("bg-img").style.backgroundImage = "url(https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80)"
});

document.getElementById("img1").addEventListener("mouseout", function() {
    document.getElementById("bg-img").style.backgroundImage = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_PxLCGiziatDvotJ1OpIclPydDFDe-aqTzQ&usqp=CAU)"
});*/

//elem.style.property = "value"

function newbg(image) {             //image ==> this ==> img1/img2
    var link = image.src;
    document.getElementById("bg-img").style.backgroundImage = "url('"+link+"')";
}

function oldbg(){
    document.getElementById("bg-img").style.backgroundImage = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_PxLCGiziatDvotJ1OpIclPydDFDe-aqTzQ&usqp=CAU)"
} 


/*----------------------------------------Modal----------------------------------------*/
var btn = document.getElementById("myBtn");

var modal = document.getElementById("modal");

//---------------------To display the Modal--------------------
btn.onclick = function() {
    modal.style.display = "block";
}

var cross = document.getElementsByClassName("close")[0];

//---------------------To hide the Modal when clicked on cross----------------------------
cross.onclick = function() {
    modal.style.display = "none";
}

//---------------------To hide the modal when clicked anywhere out--------------------------
window.onclick = function(event) {
    if (event.target == modal){
    modal.style.display = "none";
    }
}
