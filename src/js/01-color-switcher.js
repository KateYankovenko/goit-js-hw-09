const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");
const body = document.querySelector("body");
// One second after clicking the startBtn, 
// body color changes bcz of the setTimeout callback will appear.
startBtn.addEventListener("click", onClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onClick = () => {
  setTimeout(() => {
    body;
  }, 1000);
};
// const timerId = setTimeout(callback, delay, arg1, arg2);






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