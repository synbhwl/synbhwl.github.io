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

function updateTime(){
  const timeString = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
  
  const clock = document.querySelector(".clock")
  clock.innerHTML = `<b>${timeString}</b>`
}

updateTime();

setInterval(updateTime, 1000);
