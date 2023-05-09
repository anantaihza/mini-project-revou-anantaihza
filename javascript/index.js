const theBody = document.querySelector("body");
const openNav = document.querySelector(".menu-bar button");
const closeNav = document.querySelector(".close-nav button");
const Navbar = document.querySelector(".navbar");
let slideIndex = 1;

function bodyScroll() {
  if (Navbar.classList.contains("show")) {
    theBody.classList.add("hide-scroll");
  } else if (theBody.classList.contains("hide-scroll")) {
    theBody.classList.remove("hide-scroll");
  }
}

function showHide() {
  Navbar.classList.toggle("show");
  bodyScroll();
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

openNav.onclick = showHide;
closeNav.onclick = showHide;

showSlides(slideIndex);

function formValidate() {
    let name = document.forms["form-contact-us"]["fname"].value;
    let email = document.forms["form-contact-us"]["femail"].value;
    let interest = document.forms["form-contact-us"]["finterested"].value;
    

    if (name == "") {
        alert("Anda belum mengisi nama");
    }
    if (email == "") {
        alert("Email masih kosong, Isi email anda");
    }
    if (interest == "") {
        alert("Anda belum memilik ketertarikan");
    }
    return false;
}
