window.onscroll = function(){
    const topBtn = document.querySelector(".topBtn");

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
      } else {
        topBtn.style.display = "none";
      }
}

const topBtn = document.querySelector(".topBtn");

topBtn.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
})