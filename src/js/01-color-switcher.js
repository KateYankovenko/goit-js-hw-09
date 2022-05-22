const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");

let timerId = null;
const INTERVAL_DELAY = 1000;


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


startBtn.addEventListener("click", () => {
    timerId = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
  }, INTERVAL_DELAY);
    startBtn.disabled = true;
});


stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
    startBtn.disabled = false;
    console.log(`Color changing was stopped!`);
});


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