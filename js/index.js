import { transitionTime, transitionTimeSlow, page4LOAD, page2LOAD, page3LOAD, SVGandTEXT, mainPage, ColumnWidth, pageClear } from '../modules/main.mjs';
import {styleA, styleB, styleC, slide1, columnLoad3, columnLoad2, columnLoad1 } from '../modules/animations.mjs';

const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');

window.onload = function () {
  if (!('hasCodeRunBefore' in localStorage)) {
    columnLiftOnPageLoad();
  }
};

one.addEventListener('click', () => { 
  page1animation(one);
  pageClear();
  SVGandTEXT();
  page4LOAD();
})

two.addEventListener('click', () => { 
  page1animation(two);
  pageClear();
  SVGandTEXT();
  page3LOAD();
})

three.addEventListener('click', () => { 
  page1animation(three);
  pageClear();
  SVGandTEXT();
  page2LOAD();
})


function page1animation(elementClass) {
  styleA.innerHTML = slide1;
  elementClass.appendChild(styleA);
  elementClass.style.animation = `slide1 ${transitionTime}s linear 1`;
}

// ALIGNS MAIN WINDOW WITH COLUMNS
function checkWindowSize() {
  let mediaQuery = window.matchMedia('(min-width: 1000px)');
  if (!window.location.href.includes('pageone' || 'pagetwo' || 'pagethree' || 'pagefour')) {
    if (mediaQuery.matches) {
      mainPage.style.left = `${ColumnWidth * 3}vw`;
      console.log('its moving left')
    } else {
      mainPage.style.left = '0';
      console.log('its static')
    }
  }
}
setInterval(checkWindowSize, 1000);



// Column lift up on initial page load 
function columnLiftOnPageLoad() {
  styleA.innerHTML = columnLoad1;
  one.appendChild(styleA);
  one.style.animation = `columnLoad1 ${transitionTimeSlow}s linear 1`;
  styleB.innerHTML = columnLoad2;
  two.appendChild(styleB);
  two.style.animation = `columnLoad2 ${transitionTimeSlow}s linear 1`;
  styleC.innerHTML = columnLoad3;
  three.appendChild(styleC);
  three.style.animation = `columnLoad3 ${transitionTimeSlow}s linear 1`;
}


