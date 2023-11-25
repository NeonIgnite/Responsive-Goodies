AOS.init({
    duration: 3000,
    once: true,
});

let Co1 = document.getElementById('company1');
let Co2 = document.getElementById('company2');
let Co3 = document.getElementById('company3');
let Co4 = document.getElementById('company4');
let text = document.getElementById('text');
window.addEventListener('scroll', () => {

    let value = window.scrollY;

    // text.style.marginTop= -value*.2 +'px'

    Co1.style.right = value * 0.9 + 'px';
    Co2.style.right = value * 0.7 + 'px';
    Co3.style.right = value * 0.5 + 'px';
    Co4.style.right = value * 0.3 + 'px';
})
        
let slideIndex = 1;
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
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}