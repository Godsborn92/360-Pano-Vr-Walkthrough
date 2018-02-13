var slideIndex2 = 1;
showSlides2(slideIndex2);

// Next/previous controls
function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

// Thumbnail image controls
function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  var i;
  var slides2 = document.getElementsByClassName("mySlides2");
  var circle = document.getElementsByClassName("circle");
  if (n > slides2.length) {slideIndex2 = 1} 
  if (n < 1) {slideIndex2 = slides2.length}
  for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none"; 
  }
  for (i = 0; i < circle.length; i++) {
      circle[i].className = circle[i].className.replace(" active", "");
  }
  slides2[slideIndex2-1].style.display = "block"; 
  circle[slideIndex2-1].className += " active";
}

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