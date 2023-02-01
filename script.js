
let teraz = document.getElementById('gen')
for (let i = 1; i < 40; i++) {
    let numer = i
    let span = document.createElement('span')
    span.innerHTML =  "<span class='numer'>"+numer+"</span>"
    parent = document.getElementById('gen')
    parent.appendChild(span)
}
var i = 0;
var txt = 'Ernest Sapijaszko CV';
var speed = 150;
    function typeWriter() {
      if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
