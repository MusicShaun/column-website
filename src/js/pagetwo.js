import {  transitionTime, page1LOAD, page3LOAD, page4LOAD, blankDiv, SVGandTEXT, pageClear} from '../modules/main.mjs';
import {styleA, styleB, slide1, slide2, slide3 } from '../modules/animations.mjs';

const container456 = document.querySelector('.container456');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const hiddenDiv = document.querySelector('.hiddenDiv');


four.addEventListener('click', () => { 
  page2animation(four, slide1, 'slide1');
  container456.appendChild(blankDiv);
  pageClear();
  SVGandTEXT();
  page4LOAD();
})

five.addEventListener('click', () => { 
  page2animation(five, slide1, 'slide1');
  container456.appendChild(blankDiv);
  pageClear();
  SVGandTEXT();
  page3LOAD();
})

six.addEventListener('click', () => { 
  page2DIV()
  page2animation(six, slide2, 'slide2');
  pageClear();
  SVGandTEXT();
  page1LOAD();
})

function page2animation(elementClass, slide, name) {
  styleA.innerHTML = slide;
  elementClass.appendChild(styleA);
  elementClass.style.animation = `${name} ${transitionTime}s linear 1`;
}
function page2DIV() {
  styleB.innerHTML = slide3;
  hiddenDiv.appendChild(styleB);
  hiddenDiv.style.animation = `slide3 ${transitionTime}s linear 1`;
}



