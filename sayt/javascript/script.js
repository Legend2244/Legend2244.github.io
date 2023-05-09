const carouselContainer = document.querySelector('.carousel-container');

let translateX = 0;
let intervalId;

function autoScroll() {
  intervalId = setInterval(() => {
    translateX -= 100;
    if (translateX < -(carouselContainer.children.length - 1) * 100) {
      translateX = 0;
    }
    carouselContainer.style.transform = `translateX(${translateX}%)`;
  }, 4000);
}

autoScroll();

let mode = document.getElementById('mode');
let light = document.getElementById('light');
let dark = document.getElementById('dark');
let ls = localStorage;

light.onclick = function() {
    clr.style = "transition: .5s;";
    mode.href = "light.css";
    
    ls.setItem('lm', mode.href);
}

dark.onclick = function() {
      clr.style = "transition: .5s;";
      mode.href = "style.css";

      ls.setItem('lm', mode.href);
  }

  function colormode () {
      let clr = document.getElementById('clr');
      clr.style = "transition: 0s;";
      mode.href = ls.getItem('lm');
  }
  colormode();


let button = document.getElementById('toggle');

button.onclick = function() {
    let numpanel = document.getElementById('menu400');
    
    if (numpanel.style.display = "none") {
        numpanel.style.display = "inline-block";
    }
window.onclick = function(event) {
    if (event.target == numpanel) {
      numpanel.style.display = "none";
    }
  }
}