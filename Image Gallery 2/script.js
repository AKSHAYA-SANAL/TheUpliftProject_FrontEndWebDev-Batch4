function openNav(){
    document.getElementById("sidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
function closeNav(){
    document.getElementById("sidenav").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px";
}

// Open the Modal
function openModal() {
    document.getElementById("modal").style.display = "block";
}
  
// Close the Modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
}
  
var slideIndex = 1;
showSlides(slideIndex);
  
// Next/previous controls
function plusSlide(n) {
    showSlides(slideIndex += n);
}
  
// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}
  
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("demo");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
  
