console.log("Script Loaded");

//DOM elements collection
const mainContainer = document.querySelector(".container-main-1");
const navbar = document.querySelector(".navbar-container");

//-----------------------

// Nav bar sticky logic

const navHeight = navbar.getBoundingClientRect().height;

const navIntersect = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    navbar.classList.add("navbar-sticky");
    navbar.classList.remove("navbar-move-up");
  } else {
    navbar.classList.remove("navbar-sticky");
  }
};

const navbarObserver = new IntersectionObserver(navIntersect, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight + 200}px`,
});

navbarObserver.observe(mainContainer);

// navbar drop down logic
const aboutContainer = document.querySelector("#section-about");

// const initalCord = aboutContainer.getBoundingClientRect();
// window.addEventListener("scroll", function () {
//   if (window.scrollY > initalCord.top - (navHeight + 200)) {
//     navbar.style.transform = "translateY(-100px)";
//     navbar.style.translate = "all 1s";
//   }
//   if (window.scrollY > initalCord.top - (navHeight + 100)) {
//     navbar.style.transform = "translateY(0px)";
//   }
//   if (window.scrollY < initalCord.top - (navHeight + 200)) {
//     navbar.style.transform = "translateY(0px)";
//   }
// });

//---------------------------------------------------------------

//Experience section animation effect

const experiences = document.querySelectorAll(".item-experience");
const expSection = document.querySelector("#section-experience");
experiences.forEach((el) => {
  // el.style.transform = `translateX(${el.dataset.offset}px)`;
});

const setOffset = function (entries, observer) {
  const [entry] = entries;
  if (screen.width > 992) {
    if (entry.isIntersecting) {
      experiences.forEach((el, i) => {
        el.style.transform = `translateX(${-el.dataset.offset}px)`;
        el.style.transition = `all 1s`;
        if ((i + 1) % 2 === 0) {
          if (screen.width >= 993 && screen.width <= 1200)
            el.style.transform = `translateX(${-el.dataset.offset - 100}px)`;
        }
      });
      // console.log("setted");
    } else {
      experiences.forEach((el) => {
        el.style.transform = `translateX(${el.dataset.initial}px)`;
        el.style.transition = `all 1s`;
      });
      // console.log("re-setted");
    }
  }
};

const expObserver = new IntersectionObserver(setOffset, {
  root: null,
  threshold: 0.5,
});

expObserver.observe(expSection);

//---------------------------------------------------------------

//Portfolio item animation

const secExperience = document.querySelector("#section-experience");
const items = document.querySelectorAll(".items-portfolio");

const portMarginSet = function (entries, observer) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    items.forEach((el) => {
      el.classList.remove("item-margin");
    });
  } else {
    items.forEach((el) => {
      el.classList.add("item-margin");
    });
  }
};

const portObserver = new IntersectionObserver(portMarginSet, {
  root: null,
  threshold: 0.3,
});

portObserver.observe(secExperience);

//----------------------------------------------------------------

//Cat hover effect

const cat_img = document.querySelector(".about-me-image");
const back_border = document.querySelector("#cat-border-back");

cat_img.addEventListener("mouseover", (e) => {
  back_border.style.top = "0.5rem";
  back_border.style.left = "0.5rem";
});

cat_img.addEventListener("mouseout", (e) => {
  back_border.style.top = "1rem";
  back_border.style.left = "1rem";
});

//----------------------------------------------------------------
