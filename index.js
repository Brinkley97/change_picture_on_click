
//check to see if liked to html correctly
alert("Hello")
// array of pictures
var pictures = [
  "img/fam.jpg",  //0
  "img/rCadeJ.jpg",
  "img/r3.jpg",
  "img/big3.jpg",
  "img/big3Tired.jpg",
  "img/broFromAnoMom.jpg",
  "img/bigFam.jpg",
  "img/hsCrew.jpg",
  "img/kay_shy.jpg",
  "img/kay_ko.jpg",
  "img/kay.jpg",
  "img/r3Lip.jpg",
  "img/r3OnPhone.jpg",
  "img/r3Tired.jpg",
  "img/sil.jpg",
  "img/berto_me.jpg", //15
  "img/broWedding.jpg",
  "img/dadSide.jpg",
  "img/darian.jpg",
  "img/dv.jpg",
  "img/jar_LA.jpg",
  "img/papaWithUs.jpg",
  // "img.jpg",
]
//it will search the document and look for button; assigned to btn
var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function() {
  ///it will search the document and look for button; assigned to btn
  // alert("Clicked");
  // alert(img.src);
//this will change only once
  // img.src = "img/r3.jpg";
  if (counter === 22) {
    counter = 0;
  }
  img.src = pictures[counter]
  counter = counter + 1;
  // img.src = pictures[1]

});
