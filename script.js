//Kontakt
const posjetioci = []; //deklarisan je niz posjetioci

function UPIS() {
  let ime = document.getElementById("ime").value; //dohvaćanje vrijednosti iz html elemanata i smještanje u varijable
  let prezime = document.getElementById("prezime").value;
  let destinacija = document.getElementById("destinacija").value;
  let fullName = {
    Ime: ime,
    Prezime: prezime,
    Destinacija: destinacija,
  }; // objekat koji prima vrijedonsti iz varijabli
  posjetioci.push(fullName); //postavljanje objekta u niz
  console.log(posjetioci); //ispis niza u konzolu
}
//Slider
var slides = document.querySelector(".slider-items").children; // dohvatanje elemenata iz html-a preko querySelectora,
var nextSlide = document.querySelector(".right-slide"); //children property vraća kolekciju child elemenata odabranog elemnta
var prevSlide = document.querySelector(".left-slide"); //varijable next i prev slide sadrze child elementi od .slider-items elemnta
var totalSlides = slides.length; //ukupan broj slajdova
var index = 0;

nextSlide.onclick = function () {
  // dodjela funkcije koja će se izvršiti klikom na element
  next("next"); //dodijela argumenta funkciji next
};
prevSlide.onclick = function () {
  next("prev");
};

function next(direction) {
  //funkcija koja će se izvršiti, prima jedan parametar direction
  if (direction == "next") {
    //ukoliko je vrijednost parametra next, index se povećava za 1
    index++;
    if (index == totalSlides) {
      //kada se dodje do kraja index se vraća na 0 tj. na prvi slajd
      index = 0;
    }
  } else {
    //u slučaju da parametra ima vrijednost koja nije next
    if (index == 0) {
      // ako smo na prvom slajdu i klikne se dugme previous
      index = totalSlides - 1; //vratit će se unazad tj. na zadnji slajd
    } else {
      //inače će se index smanjiti za 1 i vratit ćemo se jednu sliku unazad
      index--;
    }
  }

  for (i = 0; i < slides.length; i++) {
    // for petlja služi za promjenu slika
    slides[i].classList.remove("active"); //kada se slajd promijeni prvo se vrši dohvaćanje elemnat iz html-a preko classList property-a
    //zatim se preko metode remove koja prima ime klase kao argument vrši brisanje slike
  }
  slides[index].classList.add("active"); //a preko metode add se postavi nova slika
}

//Pretraga
function search() {
  //funkcija search se koristi za pretragu, u html-u je pozvana u input elementu preko onkeyup eventa
  let input = document.getElementById("searchbar").value; //dohvaćanje vrijednosti elemnta input iz html-a
  input = input.toLowerCase(); //prebacivanje u mala slova
  let x = document.getElementsByClassName("destination-list"); //dohvaćanje liste u kojoj se nalaze podaci koji se pretražuju

  for (i = 0; i < x.length; i++) {
    //for petlja za prolazak kroz listu
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      //ako lista ne uključuje vrijednost koju dobije iz input varijable
      x[i].style.display = "none"; //neće se ništa prikazati
    } else {
      //inače, ukoliko u listi postoji vrijednost
      x[i].style.display = "list-item"; //ta vrijdenost će se i prikazati
    }
  }
}
