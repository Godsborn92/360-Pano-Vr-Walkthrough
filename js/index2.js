var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dot = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dot.length; i++) {
      dot[i].className = dot[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dot[slideIndex-1].className += " active";
  //setTimeout(showSlides, 8000); //Change image every 8 seconds
}

//Automatic Slideshow may be used later
//var slideIndex = 0;
//showSlides();

//function showSlides() {
//    var i;
//    var slides = document.getElementsByClassName("mySlides");
//    var dots = document.getElementsByClassName("dot");
//    for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//    }
//    slideIndex++;
//    if (slideIndex > slides.length) {slideIndex = 1}    
//    for (i = 0; i < dots.length; i++) {
//        dots[i].className = dots[i].className.replace(" active", "");
//    }
//    slides[slideIndex-1].style.display = "block";  
//    dots[slideIndex-1].className += " active";
//    setTimeout(showSlides, 6000); // Change image every 6 seconds
//}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropDownList1() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function dropDownList2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {

  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
      }
     }
    }
  }
    