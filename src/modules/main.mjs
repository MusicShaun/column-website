//GLOBAL
const body = document.querySelector('body');
export const transitionTime = 1.6;
export const transitionTimeSlow = 2.6;
export const hrefDly = 1500; //1500
export const blankDiv = document.createElement('div');
blankDiv.classList.add('blankDiv'); 
export let URLstring = window.location.href;
export const SVG = document.querySelectorAll('.column__data-svg');

export const columnText = document.querySelectorAll('.column__data-text')
export const nav = document.querySelector('nav');
export const mainContainer = document.querySelector('.main__container');
export const ColumnWidth = '9'; // must change config column width before this

export const mainPage = document.querySelector('main');
export const mainPageExceptNav = document.querySelector('.main__container');

const footer = body.querySelector('footer');
const footerContainer = document.querySelector('.footer-container');

const hamburger = document.querySelector('.hamburger');
const hamburgerLine1 = document.querySelector('.hamburger__line-1');
const hamburgerLine2 = document.querySelector('.hamburger__line-2');
const hamburgerLine3 = document.querySelector('.hamburger__line-3');

let mediaQuery = window.matchMedia('(min-width: 1024px)');


// PAGE LOAD DELAY
export function page1LOAD() {
  setTimeout(() =>{
    location.href = "/";
  }, hrefDly);
}
export function page2LOAD() {
  setTimeout(() =>{
    location.href = "pagetwo.html";
  }, hrefDly);
}
export function page3LOAD() {
  setTimeout(() =>{
    location.href = "pagethree.html";
  }, hrefDly);
}
export function page4LOAD() {
  setTimeout(() =>{
    location.href = "pagefour.html";
  }, hrefDly);
}


// COLUMN DATA EFFECTs
export function SVGandTEXT() {
  for (const i of SVG) {
    i.classList.add('column__data-shrink');
    i.classList.add('column__data-spinner') ; 
  }
  for (const i of columnText) {
    i.classList.add('column__data-slide');
  }
}
export function pageClear() {
  nav.style.opacity = '0';
  mainContainer.style.opacity = '0'; 
  footer.style.opacity = '0';
  scrollButton.style.opacity = '0';
}



// PAGE SCROLL BUTTON
const scrollButton = document.createElement('button');
const scrollButtonImg = document.createElement('div');
scrollButton.classList.add('autoScrollButton');
mainPage.appendChild(scrollButton);
scrollButtonImg.classList.add('autoScrollButton__img');
scrollButton.appendChild(scrollButtonImg);
let ScrollYdistance = window.innerHeight ;
scrollButtonImg.addEventListener('click', function() {
  window.scrollBy(0, ScrollYdistance);
})  

if (window.location.href.includes('pagetwo') && mediaQuery.matches) {
  scrollButton.style.right = `${ColumnWidth * 1.3}vw`;
} else if (window.location.href.includes('pagethree') && mediaQuery.matches) {
  scrollButton.style.right = `${ColumnWidth * 2.3}vw`;
} else if (window.location.href.includes('pagefour') && mediaQuery.matches) {
  scrollButton.style.right = `${ColumnWidth * 3.3}vw`;
} 




//FOOTER 3D   SCROLL
let lastKnownScrollPosition = 0;
let ticking = false;
function scrollFooter(Yposition) {
  footerContainer.style.transform = `translate3d(0px, ${Yposition}px, 0px)`;
}
document.addEventListener('scroll', function(e) {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      lastKnownScrollPosition = lastKnownScrollPosition;
      ticking = false;
    });
    ticking = true;
  }
  let inversePosition = (lastKnownScrollPosition / 2) + (-window.innerHeight); 
  scrollFooter(inversePosition);
});



// mobile navigation hamburger
let mNav = false; 
hamburger.addEventListener('click', function insertMobileNav() {
  const mobileNavComp = document.createElement('nav-component');

  if (!mNav){
    mainPage.appendChild(mobileNavComp);
    nav.classList.add('highZ');

    hamburgerLine1.style.transform = 'rotate(45deg)';
    hamburgerLine1.style.top = '22.5px';
    hamburgerLine2.style.transform = 'rotate(-45deg)';
    hamburgerLine2.style.bottom = '22.5px';
    hamburgerLine3.style.opacity = '0';
    mNav = !mNav;
    console.log('nav-component added ')
  } else {
    let element = document.getElementById('nav-menu');
    element.parentNode.removeChild(element);
    nav.classList.remove('highZ');

    hamburgerLine1.style.transform = 'rotate(0deg)';
    hamburgerLine1.style.top = '10px';
    hamburgerLine2.style.transform = 'rotate(-0deg)';
    hamburgerLine2.style.bottom = '10px';
    hamburgerLine3.style.opacity = '1';
    mNav = !mNav;
  }
});



//MOVE COLUMNS ON PAGE LOAD 
function checkIndexLeft() { 
  if (mediaQuery.matches){
    if (!URLstring.includes('page')) {
      mainPage.style.left = `${ColumnWidth * 3}vw`;
      console.log('ccccc')
    } else     if (URLstring.includes('pagetwo')) {
      mainPage.style.left = `${ColumnWidth * 2}vw`;

    } else if (URLstring.includes('pagethree')) {
      mainPage.style.left = `${ColumnWidth * 1}vw`;

    } else if (URLstring.includes('pagefour')) {
      mainPage.style.left = `0vw`;
    }
  }
}
checkIndexLeft();




// CHECK IF RESIZING WINDOW
window.addEventListener('resize', function() {
  console.log('resizing')
  if (!mediaQuery.matches) {
    mainPage.style.left = '0';
    console.log('mediaQuery 1024px ')

  } 
   else if (URLstring.includes('two')) {
    mainPage.style.left = `${ColumnWidth * 2}vw`;

  } else if (URLstring.includes('three')) {
    mainPage.style.left = `${ColumnWidth}vw`;

  } else if (URLstring.includes('four')) {
    mainPage.style.left = `0vw`;
  } 
  else if(!URLstring.includes('two' || 'three' || 'four')) {
    mainPage.style.left = `${ColumnWidth * 3}vw`}
});





// Hide page until loaded // This excludes the columns
function onReady(callback) {
  let intervalId = window.setInterval(function() {
    if (document.getElementsByTagName('main')[0] !== undefined) {
      window.clearInterval(intervalId);
      callback.call(this);
    }
  }, 0);
}
function setVisible(selector, visible) {
  document.querySelector(selector).style.display = visible ? 'block' : 'none';
}
onReady(function() {
  setVisible('.page', true);
  setVisible('#loading', false);
});




