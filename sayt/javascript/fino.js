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

  const dino = document.getElementById('dino');
  const cactus = document.getElementById('cactus');

  document.addEventListener('keydown', function(event) {
    jump();
  })

  function jump () {
    if (dino.classList != "jump") {
        dino.classList.add('jump')
    }
    setTimeout(function() {
        dino.classList.remove('jump')
    }, 300)
  }

  let isalive = setInterval(function() {
    let dinotop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusleft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusleft < 50 && cactusleft > 0 && dinotop >= 140) {
        alert("Game Ower!!")
    }
  }, 10)