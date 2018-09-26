popup = function() {
  if (confirm('Venez voir notre site de livraison de saucisson !')) {
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  }
}
window.setTimeout(popup, 10000);

var linker = document.querySelector('link');
var PsyButton = document.querySelector('button');

PsyButton.onclick = function() {
  var style = linker.getAttribute('href');
    if(style === 'style.css') {
      linker.setAttribute ('href','PsyStyle.css');
      PsyButton.textContent = ('Go back to normal')
    } else {
      linker.setAttribute ('href','style.css');
      PsyButton.textContent = ('Go Psychedelic')
    }
}
