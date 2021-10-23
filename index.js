let homeText = document.getElementsByClassName("home__text")[0];
let homeCarousel = document.getElementsByClassName("home__carousel")[0];
let heroImgList = document.getElementsByClassName("home__hero__img");
let activeImg = document.getElementsByClassName("home__hero__img")[0];
const homeCarouselImags = document.getElementsByClassName("home__carousel__images")[0];
const homeTextHeading = document.getElementById("home__text1__heading");
const homeTextPara = document.getElementById("home__text1__para");
const lastClone = document.getElementById("lastClone");
const homeHeroImg1 = document.getElementById("home__hero__img1");
const homeHeroImg2 = document.getElementById("home__hero__img2");
const homeHeroImg3 = document.getElementById("home__hero__img3");
const firstClone = document.getElementById("firstClone");
const closeIcon = document.getElementById("close__icon");
const hamIcon = document.getElementById("home__carousel__nav__hamburger");
const nav = document.getElementById("home__carousel__nav__links");

// Menu
hamIcon.addEventListener('click', (e) => {
    console.log("HERE", e)
    nav.style.animation = "nav__fade__in 0.5s forwards";
})

closeIcon.addEventListener('click', (e) => {
    console.log("THERE", e)
    nav.style.animation = "nav__fade__out 0.5s";
})

// Carousel Selectors
const carouselSlide = document.querySelector('.home__carousel__images'); 
const carouselImages = document.querySelectorAll('.home__hero__img');
let counter = 1;
const size = homeCarousel.clientWidth;
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

let divArrowsParent = document.createElement('div');
let divWithLeftArrow = document.createElement('div');
let divWithRightArrow = document.createElement('div');

const createArrows = (homeText, fromButtonClick) => {
    let leftArrowImage = document.createElement('img');
    leftArrowImage.setAttribute('src', './images/icon-angle-left.svg');
    leftArrowImage.setAttribute('id', 'left__arrow');

    let rightArrowImage = document.createElement('img');
    rightArrowImage.setAttribute('src', './images/icon-angle-right.svg');
    rightArrowImage.setAttribute('id', 'right__arrow');

    if(!fromButtonClick) {
        divWithLeftArrow.appendChild(leftArrowImage);
        divWithRightArrow.appendChild(rightArrowImage);
    }

    divArrowsParent.appendChild(divWithLeftArrow);
    divArrowsParent.appendChild(divWithRightArrow);

    homeText.appendChild(divArrowsParent);

    divArrowsParent.setAttribute('class', 'home__text__arrows__parent');
    divWithLeftArrow.setAttribute('class', 'home__text__left__arrow');
    divWithRightArrow.setAttribute('class', 'home__text__right__arrow');
}

createArrows(homeText, false);

const fadeIn = (el) => {
    el.style.animation = "home__text__fade__in 0.8s forwards";
}

// Click Handler:-
divWithLeftArrow.onclick = () => {
    let newHomeText = homeText;
    homeText.style.display = "none";
    if(homeText.previousElementSibling.className == 'home__carousel') {
        document.getElementById('home__text3').style.display = 'block';
        newHomeText = document.getElementById('home__text3')
    }
    else {
        newHomeText.previousElementSibling.style.display = 'block';
        newHomeText = newHomeText.previousElementSibling;
    }
    homeText.display = 'block';
    homeText = newHomeText;
    fadeIn(homeText)

    // // Set Image:-
    // let newImage = activeImg;
    // activeImg.style.display = "none";
    // if(newImage.previousElementSibling.classList.contains('home__hero__img')) {
    //     newImage.previousElementSibling.style.display = 'block'
    //     activeImg = newImage.previousElementSibling;
    // } 
    // else {
    //     document.getElementById('home__hero__img3').style.display = 'block';
    //     activeImg = document.getElementById('home__hero__img3');
    // }

    // Carousel:-
    if(counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';


    createArrows(newHomeText, true);
}

divWithRightArrow.onclick = () => {
    let newHomeText = homeText;
    document.getElementById(homeText.id).style.display = "none";
    if(homeText.nextElementSibling.className == 'home__about__img1') {
        document.getElementById('home__text1').style.display = 'block';
        newHomeText = document.getElementById('home__text1')
    }
    else {
        newHomeText.nextElementSibling.style.display = 'block';
        newHomeText = newHomeText.nextElementSibling;
    }
    homeText = newHomeText;
    fadeIn(homeText)
    // // Set Image:-
    // let newImage = activeImg;
    // console.log(document.getElementById(newImage.id).style)
    // console.log(activeImg.clientWidth)
    // activeImg.animate([
    //     // keyframes
    //     { transform: 'translateX(0px)' },
    //     { transform: `translateX(-${newImage.clientWidth}px)` }
    //   ], {
    //     // timing options
    //     duration: 2000,
    //     iterations: 1
    // });
    // activeImg.style.display = "none";
    // if(newImage.nextElementSibling != null && newImage.nextElementSibling.classList.contains('home__hero__img')) {
    //     newImage.nextElementSibling.style.display = 'block'
    //     activeImg = newImage.nextElementSibling;
    // } 
    // else {
    //     document.getElementById('home__hero__img1').style.display = 'block';
    //     activeImg = document.getElementById('home__hero__img1');
    // }

    // Carousel:-
    if(counter > carouselImages.length) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    createArrows(newHomeText, true);
}

carouselSlide.addEventListener('transitionend', () => {
    if(carouselImages[counter].id == 'lastClone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(carouselImages[counter].id == 'firstClone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})

function myFunction(x) {
    if (x.matches) { // If media query matches
      lastClone.setAttribute('src', "images\\mobile-image-hero-3.jpg")
      homeHeroImg1.setAttribute('src', "images\\mobile-image-hero-1.jpg")
      homeHeroImg2.setAttribute('src', "images\\mobile-image-hero-2.jpg")
      homeHeroImg3.setAttribute('src', "images\\mobile-image-hero-3.jpg")
      firstClone.setAttribute('src', "images\\mobile-image-hero-1.jpg")
      divArrowsParent.style.top = `-${divArrowsParent.clientHeight}px`;
    }
  }
  
  var x = window.matchMedia("(max-width: 480px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes