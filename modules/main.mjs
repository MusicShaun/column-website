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
const mobileNav = document.querySelector('.nav-menu-icon');

// PAGE LOAD DELAY
export function page1LOAD() {
  setTimeout(() =>{
    window.location.href = "http://127.0.0.1:5500/static/index.html";
  }, hrefDly);
}
export function page2LOAD() {
  setTimeout(() =>{
    window.location.href = "http://127.0.0.1:5500/static/pagetwo.html";
  }, hrefDly);
}
export function page3LOAD() {
  setTimeout(() =>{
    window.location.href = "http://127.0.0.1:5500/static/pagethree.html";
  }, hrefDly);
}
export function page4LOAD() {
  setTimeout(() =>{
    window.location.href = "http://127.0.0.1:5500/static/pagefour.html";
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
const scrollButtonImg = document.createElement('img');
scrollButton.classList.add('autoScrollButton');
mainPage.appendChild(scrollButton);
scrollButtonImg.classList.add('autoScrollButton__img');
scrollButton.appendChild(scrollButtonImg);
let ScrollYdistance = window.innerHeight ;
scrollButtonImg.addEventListener('click', function() {
  window.scrollBy(0, ScrollYdistance);
})  
if (window.location.href.includes('pagetwo')) {
  scrollButton.style.right = `${ColumnWidth}vw`;
} else if (window.location.href.includes('pagethree')) {
  scrollButton.style.right = `${ColumnWidth * 2}vw`;
} else if (window.location.href.includes('pagefour')) {
  scrollButton.style.right = `${ColumnWidth * 3}vw`;
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

// mobile navigation menu 
let mNav = false; 
mobileNav.addEventListener('click', function insertMobileNav() {
  const mobileNavComp = document.createElement('nav-component');

  if (!mNav){
    mainPage.appendChild(mobileNavComp);
    nav.classList.add('highZ');
    mNav = !mNav;
  } else {
    let element = document.getElementById('nav-menu');
    element.parentNode.removeChild(element);
    nav.classList.remove('highZ');
    mNav = !mNav;
  }
});


