let homeText = document.getElementsByClassName("home__text")[0];
let divArrowsParent = document.createElement('div');
let divWithLeftArrow = document.createElement('div');
let divWithRightArrow = document.createElement('div');

// console.log(document.getElementsByClassName("home__text"));

const createArrows = (homeText, fromButtonClick) => {
    console.log('HOME TEXT ARROW:----', homeText)
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
    console.log(homeText.previousElementSibling);
    let newHomeText = homeText;
    // homeText.lastChild.style.display = "none";
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
    createArrows(newHomeText, true);
}

divWithRightArrow.onclick = () => {
    // console.log(homeText.nextElementSibling);
    // console.log(document.getElementById(homeText.id));
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
    createArrows(newHomeText, true);
}