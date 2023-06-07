var btn = document.getElementById("burger");
var menu = document.getElementById("zatemnenie3");
var close = document.getElementById("closebtn")
var link = document.getElementById("yakor");

btn.onclick = function() {
    menu.style.display = "block";
}
close.onclick = function() {
    menu.style.display = "none";
}
link.onclick = function() {
    menu.style.display = "none";
}
