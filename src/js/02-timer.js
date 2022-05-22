// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
//replacing of standart alert log usage
import Notiflix from 'notiflix';
//notification module
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
    dataPicker: document.querySelector("#datetime-picker"),
    startBtn: document.querySelector("[data-start]"),
    days: document.querySelector("[data-days]"),
    hours: document.querySelector("[data-hours]"),
    minutes: document.querySelector("[data-minutes]"),
    seconds: document.querySelector("[data-seconds]"),
}

let deadline = null;

//options object from flatpickr lib
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    //   Notify(selectedDates[0]);
       if(selectedDates[0].getTime() < Date.now()) {
          Notify.failure("Please choose a date in the future!");
          refs.startBtn.disabled = true;
       } else {
           deadline = selectedDates[0];
           refs.startBtn.disabled = false;
      }
    },  
};
// функція flatpickr(selector, options)
flatpickr("#datetime-picker", options);

// Натисканням на кнопку «Start» скрипт повинен обчислювати раз
// на секунду, скільки часу залишилось до вказаної дати, і
// оновлювати інтерфейс таймера, показуючи чотири цифри: дні,
// години, хвилини і секунди у форматі xx: xx: xx: xx.

const dataTimePick = () => {
    onStartBtnPress(() => {
        
    }, 1000)
}