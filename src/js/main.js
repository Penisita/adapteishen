const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const navBtnimg = document.querySelector("#nav-btn-img");

navBtn.onclick = () => {
  if (nav.classList.toggle("open")) {
    navBtnimg.src = "./vector/nav-close.svg";
  } else {
    navBtnimg.src = "./vector/nav.svg";
  }
};
