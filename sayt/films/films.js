let mode = document.getElementById('mode');
let light = document.getElementById('light');
let dark = document.getElementById('dark');
let ls = localStorage;

light.onclick = function() {
    clr.style = "transition: .5s;";
    mode.href = "/STReamFlix/films/films-style-light.css";
}

dark.onclick = function() {
      clr.style = "transition: .5s;";
      mode.href = "/STReamFlix/films/films-style.css";
  }

  function colormode () {
      let clr = document.getElementById('clr');
      clr.style = "transition: 0s;";
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