import { CountUp } from "./lib/countUp.min.js";
import { CountUp } from "./lib/swiper_bundle.min.7.4.1.js";

let onready = () => {
  // headerSet();

  mainPageHeaderStyleSet();

  countUpSet();

  swiperSetup();
};

window.addEventListener("DOMContentLoaded", onready);

const options = {
  startVal: 10,
  suffix: "+",
};

function countUpSet() {
  let countTargetList = document.querySelectorAll(".count-target");
  if (countTargetList === null) return;

  countTargetList.forEach((item, index) => {
    //아이디 부여
    let id = "countTargetId" + (index + 1).toString();
    item.id = id;
    let countNum = parseInt(item.innerText);
    console.dir(countNum);

    let countTarget = new CountUp(id, countNum, options);
    if (!countTarget.error) {
      countTarget.start();
    } else {
      console.error(countTarget.error);
    }
  });
}

function headerSet() {
  let header = document.querySelector(".header");

  if (header === null) return;

  header.classList.add("header-pos-absolute");
}

function mainPageHeaderStyleSet() {
  let header = document.querySelector(".header");

  if (header === null) return;

  header.classList.add("header-style-main");
}

function swiperSetup() {
  const swiper = new Swiper(".swiper-intro-slide", {
    slidesPerView: 1,
    breakpoints: {
      900: {
        slidesPerView: 3,
      },
    },
  });
}
