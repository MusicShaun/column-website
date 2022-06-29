import { ColumnWidth } from '../modules/main.mjs';

export let styleA = document.createElement('style');
export let styleB = document.createElement('style');
export let styleC = document.createElement('style');


export let slide1 = 
`@keyframes slide1 { 
  0% {
    flex: 0;
  } 25%, 50% {
    flex: 1;
  } 85% { 
    flex: 0;
    margin-left: auto;
  } 100% {
    margin-left: auto;
  }
}`;
export let slide1B = 
`@keyframes slide1B { 
  0% {
    flex: 0;
  } 25%, 50% {
    flex: 1;
  } 85% { 
    flex: 0;
    margin-left: auto;
    margin-right: ${ColumnWidth*2}vw;
  } 100% {
    margin-left: auto;
    margin-right: ${ColumnWidth*2}vw;
  }
}`;
export let slide2 = 
`@keyframes slide2 {
  0% {
    flex: 1;
  } 25%, 50% {
    flex: 1;
  } 80%, 100% {
    flex: 0;
  } 
}`;
export let slide3 = 
`@keyframes slide3 {
  0% {
    width: ${100 - (ColumnWidth*3)}vw;
  } 30%, 100% {
    width: 0%;
  } 
}`;
export let slide4 = 
`@keyframes slide4 { 
0% {
    width: ${ColumnWidth}vw;
  } 25%, 50% { 
    width:  ${100 - (ColumnWidth*2)}vw;
    right: ${ColumnWidth}vw;
  } 70%, 100% {
    width: ${ColumnWidth}vw;
    right: ${100 - (ColumnWidth*2)}vw;
  }
}`;

export let slide5 = 
`@keyframes slide5 { 
  0% {
    left: ${100 - ColumnWidth}vw; 
  } 25% {
    width: ${100 - (ColumnWidth*2)}vw;
    left: ${ColumnWidth*2}vw;
  } 40%{ 
    width: ${100 - (ColumnWidth*2)}vw;
  } 70% {
    width: ${ColumnWidth}vw;
  } 100% {
    left: ${ColumnWidth * 2}vw;
  }
}`;

export let slide6 = 
`@keyframes slide6 { 
  0% {
    right: ${ColumnWidth}vw; 
  } 25%, 100% {
    right: ${100 - (ColumnWidth*2)}vw;
  }
}`;

export let slide7 = 
`@keyframes slide7  { 
  0% {
    flex: 0;
  } 25%, 40% {
    flex: 1;
  } 75% { 
    flex: 0;
    margin-right: auto;
  } 100% {
    margin-right: auto;
  }
}`;




export const columnLoad1 =
` @keyframes columnLoad1 {
    0% {
      margin-top: 100vh; 
    } 25% {
      margin-top: 0vh;
    }
  }`; 
export const columnLoad2 =
` @keyframes columnLoad2 {
    0% {
      margin-top: 100vh; 
    } 35% {
      margin-top: 0vh;
    }
  }`; 
export const columnLoad3 =
` @keyframes columnLoad3 {
    0% {
      margin-top: 100vh; 
    } 45% {
      margin-top: 0vh;
    }
  }`; 



