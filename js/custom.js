// init fullpage navigation
new fullpage("#fullpage", {
  //options here
  menu: "#menu",
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  anchors: ["firstPage", "secondPage", "3rdPage", "4thPage", "lastPage"],
  responsiveWidth: 1100,
  verticalCentered: true,
  lazyLoad: true,
  slidesNavigation: true,
});

// init lightbox
var lightboxDescription = GLightbox({
  selector: ".glightbox2",
});

// hamburger icon animation
let icon = document.querySelector(".nav-icon1");
icon.addEventListener("click", function () {
  this.classList.toggle("open");
});

// dynamic underline
let links = Array.from(document.querySelectorAll(".nav-item"));
let line = document.querySelector(".line");
let activeLink = document.querySelector(".navbar-nav li.active");

function setActiveUnderline(activeLink, line) {
  if (window.innerWidth > 1200) {
    line.style.left = activeLink.firstElementChild.offsetLeft + "px";
    line.style.width = activeLink.firstElementChild.offsetWidth + "px";
  }
}
setActiveUnderline(activeLink, line);

// toggle active class
function clickActive(e) {
  // loop on all the links
  for (let i = 0; i < links.length; i++) {
    // delete active class from them
    links[i].classList.remove("active");
  }
  // add active class to the target link
  e.target.parentNode.classList.add("active");
  activeLink = document.querySelector(".navbar-nav li.active");
  line = document.querySelector(".line");

  setActiveUnderline(activeLink, line);
}
links.forEach((link) => {
  link.addEventListener("click", clickActive);
});
// make the line position dynamically
function dynamicUnderline() {
  let linksWidth = 0;
  let left = 0;
  // loop over the links to create a dynamic width and position
  for (let i = 0; i < links.length; i++) {
    linksWidth = this.clientWidth;
    left = this.offsetLeft;
    compuStyle = window.getComputedStyle(this).getPropertyValue("padding-left");
    padding = parseInt(compuStyle) * 2;
  }

  line.style.width = `${linksWidth - padding}px`;
  line.style.left = `${left + padding / 2}px`;
}
// on hover function
links.forEach((link) => {
  link.addEventListener("mouseover", dynamicUnderline);
});
// on leaving function
links.forEach((link) => {
  link.addEventListener("mouseout", function () {
    let compuStyle = window
      .getComputedStyle(activeLink)
      .getPropertyValue("padding-left");
    let padding = parseInt(compuStyle) * 2;

    line.style.left = `${activeLink.offsetLeft + padding / 2}px`;
    line.style.width = `${activeLink.clientWidth - padding}px`;
  });
});

// typewriter effect
let message = ["i'm marwan elsayed"];
let textPosition = 0;
let speed = 100;

function typewriter() {
  let title = document.querySelector(".display-2--intro");
  title.innerHTML =
    message[0].substring(0, textPosition) + `<span>&#124</span>`;
  if (textPosition++ != message[0].length) {
    setTimeout(typewriter, speed);
  }
}

window.addEventListener("load", typewriter);
