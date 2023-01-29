
let teraz = document.getElementById('gen')
for (let i = 1; i < 51; i++) {
    let numer = i
    let span = document.createElement('span')
    span.innerHTML =  "<span class='numer'>"+numer+"</span>"
    parent = document.getElementById('gen')
    parent.appendChild(span)
}