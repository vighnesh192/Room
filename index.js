let homeText = document.getElementsByClassName("home__text")[0];
let heroImgList = document.getElementsByClassName("home__hero__img");
let activeImg = document.getElementsByClassName("home__hero__img")[0];

let divArrowsParent = document.createElement('div');
let divWithLeftArrow = document.createElement('div');
let divWithRightArrow = document.createElement('div');

const createArrows = (homeText, fromButtonClick) => {
    // console.log('HOME TEXT ARROW:----', homeText)
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

    // Set Image:-
    let newImage = activeImg;
    activeImg.style.display = "none";
    if(newImage.previousElementSibling.classList.contains('home__hero__img')) {
        newImage.previousElementSibling.style.display = 'block'
        activeImg = newImage.previousElementSibling;
    } 
    else {
        document.getElementById('home__hero__img3').style.display = 'block';
        activeImg = document.getElementById('home__hero__img3');
    }


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

    // Set Image:-
    let newImage = activeImg;
    activeImg.style.display = "none";
    if(newImage.nextElementSibling != null && newImage.nextElementSibling.classList.contains('home__hero__img')) {
        newImage.nextElementSibling.style.display = 'block'
        activeImg = newImage.nextElementSibling;
    } 
    else {
        document.getElementById('home__hero__img1').style.display = 'block';
        activeImg = document.getElementById('home__hero__img1');
    }

    createArrows(newHomeText, true);
}