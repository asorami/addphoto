function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("morebtn");
    var arrow = document.getElementById("arrow");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Подробнее"; 
      moreText.style.display = "none";
      arrow.style.transform = "rotate(0deg)"
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Скрыть"; 
      moreText.style.display = "inline";
      arrow.style.transform = "rotate(180deg)"
    }
}
function myFunction2() {
    var dots2 = document.getElementById("dots2");
    var moreText2 = document.getElementById("more2");
    var btnText2 = document.getElementById("morebtn2");
    var arrow2 = document.getElementById("arrow2");
  
    if (dots2.style.display === "none") {
      dots2.style.display = "inline";
      btnText2.innerHTML = "Подробнее"; 
      moreText2.style.display = "none";
      arrow2.style.transform = "rotate(0deg)"
    } else {
      dots2.style.display = "none";
      btnText2.innerHTML = "Скрыть"; 
      moreText2.style.display = "inline";
      arrow2.style.transform = "rotate(180deg)"
    }
}
