//Kontakt
const posjetioci = [];

function UPIS() {
  let ime = document.getElementById("ime").value;
  let prezime = document.getElementById("prezime").value;
  let destinacija = document.getElementById("destinacija").value;
  let fullName = {
    Ime: ime,
    Prezime: prezime,
    Destinacija: destinacija,
  };
  posjetioci.push(fullName);
  console.log(posjetioci);
}
//Slider
var slides = document.querySelector(".slider-items").children;
var nextSlide = document.querySelector(".right-slide");
var prevSlide = document.querySelector(".left-slide");
var totalSlides = slides.length;
var index = 0;

nextSlide.onclick = function () {
  next("next");
};
prevSlide.onclick = function () {
  next("prev");
};

function next(direction) {
  if (direction == "next") {
    index++;
    if (index == totalSlides) {
      index = 0;
    }
  } else {
    if (index == 0) {
      index = totalSlides - 1;
    } else {
      index--;
    }
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");
}

//Pretraga
function search() {
  let input = document.getElementById("searchbar").value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName("destination-list");

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "list-item";
    }
  }
}
