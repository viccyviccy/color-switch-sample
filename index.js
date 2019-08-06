// import './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];


// const getElementId = colors.map((e) => {
//   const indexEl = colors.indexOf(e);
//   return indexEl;
// });

// console.log(getElementId)

const body = document.querySelector('body');
const buttonStart = document.querySelector('[data-action="start"]');
const buttonStop = document.querySelector('[data-action="stop"]');
// set Interval with 1s, to change colors

// const firstElement = getElementId[0];
// console.log(firstElement);

let timerID = null;

buttonStart.onclick = function() {
  buttonStart.disabled = true;
  buttonStart.classList.remove('button01');
  buttonStart.classList.add('button');
  timerID = setInterval(() => {document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)]}, 1000); //to add a style with color
}

buttonStop.onclick = function() {
  buttonStart.disabled = false;
  buttonStart.classList.add('button01');
  clearInterval(timerID);
}


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};




