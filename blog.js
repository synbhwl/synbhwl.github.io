/*menu*/ 
const menubtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const whole = document.querySelector(".whole");
menubtn.addEventListener("click", menuOpen);
function menuOpen(){
  menu.classList.toggle("open");
  whole.classList.toggle("open");
}