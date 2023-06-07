var modal = document.getElementById("zatemnenie");
var btn = document.getElementById("modalbtn");
var span = document.getElementById("modalclose");

btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
    if (event.target == modal2) {
      modal2.style.display = "none";
    }
  }

var modal2 = document.getElementById("zatemnenie2");
var btn2 = document.getElementById("modalbtn2");
var span2 = document.getElementById("close");

btn2.onclick = function() {
    modal2.style.display = "block";
    modal.style.display = "none";
}
span2.onclick = function() {
    modal2.style.display = "none";
}
