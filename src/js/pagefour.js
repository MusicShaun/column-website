
import { transitionTime, page1LOAD, page2LOAD, page3LOAD, SVGandTEXT, pageClear} from '../modules/main.mjs';
import {styleA, slide7 } from '../modules/animations.mjs';

const ten = document.querySelector('.ten');
const eleven = document.querySelector('.eleven');
const twelve = document.querySelector('.twelve');



ten.addEventListener('click', () => { 
  page4animation(ten);
  pageClear();
  SVGandTEXT();
  page3LOAD();
})

eleven.addEventListener('click', () => { 
  page4animation(eleven);
  pageClear();
  SVGandTEXT();
  page2LOAD();
})

twelve.addEventListener('click', () => { 
  page4animation(twelve);
  pageClear();
  SVGandTEXT();
  page1LOAD();
})


function page4animation(elementClass) {
  styleA.innerHTML = slide7;
  elementClass.appendChild(styleA);
  elementClass.style.animation = `slide7 ${transitionTime}s linear 1`;
}



