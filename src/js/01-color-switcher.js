const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");
const body = document.querySelector("body");
let timerId = null;
// One second after clicking the startBtn, 
// body color changes bcz of the setTimeout callback will appear.


const randomClr = function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


startBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
    console.log(`I love async JS!  ${Math.random()}`);
  }, 1000);
});


stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  console.log(`Interval with id ${timerId} has stopped!`);
});

// const onClick = () => {
//   setTimeout(() => {
//     console.log("set time");
//   }, 1000);
// };
// startBtn.addEventListener("click", onClick);







// Напиши скрипт, який після натискання кнопки «Start», раз на 
// секунду змінює колір фону < body > на випадкове значення,
// використовуючи інлайн стиль.Натисканням на кнопку «Stop» 
// зміна кольору фону повинна зупинятися.
// Враховуй, що на кнопку «Start» можна натиснути нескінченну 
// кількість разів.Зроби так, щоб доки зміна теми запущена,
// кнопка «Start» була неактивною(disabled).

// setTimeout(() => {
//   console.log("");
// }, 2000);