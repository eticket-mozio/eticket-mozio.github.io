var clockElement = document.getElementById('clock');

function clock() {
  clockElement.textContent = new Date().toLocaleTimeString(); // represent on html page
}

setInterval(clock, 1000);