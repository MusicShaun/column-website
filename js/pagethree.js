import {transitionTime, page1LOAD, page2LOAD, page4LOAD, blankDiv, SVGandTEXT, pageClear } from '../modules/main.mjs';
import {styleA, styleB, slide1B, slide4, slide5, slide6 } from '../modules/animations.mjs';

const container789 = document.querySelector('.container789');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');



seven.addEventListener('click', () => { 
  page3animation(styleA, seven, slide1B, 'slide1B');
  container789.appendChild(blankDiv);
  pageClear();
  SVGandTEXT();
  page4LOAD();
})

eight.addEventListener('click', () => { 
  page3animation(styleA, eight, slide4, 'slide4');
  pageClear();
  SVGandTEXT();
  page2LOAD();
})

nine.addEventListener('click', () => { 
  page3animation(styleA, nine, slide5, 'slide5');
  page3animation(styleB, eight, slide6, 'slide6');
  pageClear();
  SVGandTEXT();
  page1LOAD();

})


function page3animation(style, elementClass, slide, name) {
  style.innerHTML = slide;
  elementClass.appendChild(style);
  elementClass.style.animation = `${name} ${transitionTime}s linear 1`;
}




