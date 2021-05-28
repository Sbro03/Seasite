var i;
var x = document.getElementsByClassName("image");
const image = ["url('5.jpg')",
 "url('6.jpg')", "url('8.jpg')", "url('10.jpg')", "url('7.jpg')"];
for (i = 0; i < x.length; i++) {
  x[i].style.backgroundImage = image[i];
}
x[2].style.backgroundPosition = "top center";
x[3].style.backgroundPosition = "top center";

window.addEventListener("scroll", () => {
  let scrolling = $(window).scrollTop();
  let header = document.getElementById("header");
  const logo = document.getElementById("logo");
  if (scrolling > 0) {
    header.style.backgroundColor = "rgba(255, 255, 255, 0.815)";
    header.style.transition = ".2s";
    header.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.1);"
  }
  else {
    header.style.backgroundColor = "rgba(0, 0, 0, 0)";
  }
});

window.addEventListener("load", ()=> {
  document.getElementById('loader').style.display = "none";
})

var flag = true;
const hamburger = document.getElementById("button-menu")
const sidebar = document.getElementById("menu")

hamburger.addEventListener("click", () => {
  // HAMBURGER ANIMATION
  hamburger.classList.toggle('opened');
  hamburger.setAttribute('aria-expanded', hamburger.classList.contains('opened'));

  if (flag) {
    sidebar.style.width = "60%";
    sidebar.style.marginRight = "0px";
    sidebar.style.paddingLeft = "50px";
    flag = false;
  }
  else {
    sidebar.style.marginRight = "-100px";
    sidebar.style.width = "0";
    sidebar.style.paddingLeft = "0";
    flag = true;
  }
});

const icon = document.querySelector(".icon");
const search = document.querySelector(".search");
const span = document.querySelector(".clear");
const searchInput = document.getElementById("mySearch");
icon.onclick = () => {
  search.classList.toggle("jojo");
  span.classList.toggle("active");
}

span.onclick = () => {searchInput.value = ''}
