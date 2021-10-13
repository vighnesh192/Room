let homeText = document.getElementsByClassName("home__text")[0];

let divArrowsParent = document.createElement('div');

let divWithLeftArrow = document.createElement('div');
let divWithRightArrow = document.createElement('div');

let leftArrowImage = document.createElement('img');
leftArrowImage.setAttribute('src', './images/icon-angle-left.svg');

let rightArrowImage = document.createElement('img');
rightArrowImage.setAttribute('src', './images/icon-angle-right.svg');

divWithLeftArrow.appendChild(leftArrowImage);
divWithRightArrow.appendChild(rightArrowImage);

divArrowsParent.appendChild(divWithLeftArrow);
divArrowsParent.appendChild(divWithRightArrow);

homeText.appendChild(divArrowsParent);

divArrowsParent.setAttribute('class', 'home__text__arrows__parent');
divWithLeftArrow.setAttribute('class', 'home__text__left__arrow');
divWithRightArrow.setAttribute('class', 'home__text__right__arrow');

console.log(document.getElementsByClassName("home__text"));