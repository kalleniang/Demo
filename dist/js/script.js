let home = document.querySelector("#section1");
let about = document.querySelector("#about");
let contact = document.querySelector("#contact");
let project = document.querySelector("#projects");
let homeBtn = document.querySelector(".home");
let aboutBtn = document.querySelector(".about");
let contactBtn = document.querySelector(".contact");
let projectBtn = document.querySelector(".project");
let container = document.querySelector(".container");

projectBtn.addEventListener("click", function (e) {
  e.preventDefault();

  container.childNodes[1].style.display = "none";
  home.style.display = "none";
  about.style.display = "none";
  contact.style.display = "none";
  project.style.display = "initial";
  container.style.background = "white";
  container.style.borderRadius = "10px";

  aboutBtn.style.display = "none";
  contactBtn.style.display = "none";
});

let newH3 = document.createElement("h3");
let el = project.appendChild(newH3);
el.appendChild(document.createTextNode("Now go home, You're drunk!"));

let show = false;
let nav = document.querySelector(".main-nav");
let toggle = document.querySelector(".toggle-collapse");
let navItems = document.querySelector(".nav-items");

toggle.addEventListener("click", function (e) {
  e.preventDefault();
  if (show == false) {
    // nav.style.height = "13rem";
    nav.style.overflow = "initial";
    nav.style.transition = "ease-in-out 2s";
    navItems.style.display = "flex";
    // navItems.style.flexDirection = "column";
    show = true;
  } else if (show == true) {
    // nav.style.height = "0";
    nav.style.overflow = "hidden";
    navItems.style.display = "none";
    show = false;
  }
});
