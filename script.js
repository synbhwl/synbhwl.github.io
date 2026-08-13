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


// lets code the design showcase lessgo

// we gon hardcode the file names
const designs = ["designs/theBearPoster.jpg", "designs/depression.jpg"]
const photos = [
  "photos/colourfulSunset.jpg",
  "photos/distantFields.jpg",
  "photos/ngnHills.jpg",
  "photos/twoHillsHighway.jpg",
  "photos/water.jpg",
  "photos/riverSide.jpg",
  "photos/infiniteFields.jpg",
  "photos/tuitionTree.jpg",
  "photos/distantHills.jpg",
  "photos/sunsetOpposite.jpg",
  "photos/highwaySunset.jpg",
  "photos/villagePinkTree.jpg",
  "photos/windowSunrise.jpg",
  "photos/nightTown.jpg",
  "photos/nagalandHillsGlgt.jpg"
];

//for designs
// getting the img showcase div

const imgshow1 = document.getElementById("imgshow1")

//getting the buttons
const leftbtn1 = document.getElementById("leftbtn1")
const rightbtn1 = document.getElementById("rightbtn1")

let designNum = 0

rightbtn1.addEventListener("click", function(){
  if(designNum < designs.length - 1){
    designNum++
  }
  imgshow1.innerHTML = `<img src="${designs[designNum]}" alt="">`

})

leftbtn1.addEventListener("click", function(){
  if(designNum > 0){
    designNum--
  }
  imgshow1.innerHTML = `<img src="${designs[designNum]}" alt="">`
})

//for designs
// getting the img showcase div

const imgshow2 = document.getElementById("imgshow2")

//getting the buttons
const leftbtn2 = document.getElementById("leftbtn2")
const rightbtn2 = document.getElementById("rightbtn2")

let photoNum = 0

rightbtn2.addEventListener("click", function(){
  if(photoNum < photos.length - 1){
    photoNum++
  }
  imgshow2.innerHTML = `<img src="${photos[photoNum]}" alt="">`

})

leftbtn2.addEventListener("click", function(){
  if(photoNum > 0){
    photoNum--
  }
  imgshow2.innerHTML = `<img src="${photos[photoNum]}" alt="">`
})





// last
imgshow1.innerHTML = `<img src="${designs[designNum]}" alt="">`
imgshow2.innerHTML = `<img src="${photos[photoNum]}" alt="">`