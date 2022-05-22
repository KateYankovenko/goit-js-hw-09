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

refs.startBtn.addEventListener('click', () => {
   timer.start() 
});

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

class Timer {
    constructor({onTick}) {
        this.intervalId = null;
        this.isActive = false;
        this.onTick = onTick;
    }
    start() {
        if (this.isActive) {
            return;
        }
        const startTime = deadline.getTime();
        // this.isActive = true;
        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const remainingTime = startTime - currentTime;
            const time = this.convertMs(remainingTime);
            
        if (remainingTime <= 0) {
            clearInterval(this.intervalId);
            return;
        }
            this.onTick(time); 
        }, 1000)
    }
// Натисканням на кнопку «Start» скрипт повинен обчислювати раз
// на секунду, скільки часу залишилось до вказаної дати, і
// оновлювати інтерфейс таймера, показуючи чотири цифри: дні,
// години, хвилини і секунди у форматі xx: xx: xx: xx.

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}