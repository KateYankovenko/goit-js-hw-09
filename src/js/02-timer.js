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
refs.startBtn.disabled = true;
refs.startBtn.addEventListener('click', () => {
    timer.start(); 
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
    constructor({ onTick }) {
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
    convertMs(ms) {
        function addFirstZero(number) {
            return String(number).padStart(2, '0');
        }
  // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = addFirstZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addFirstZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addFirstZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addFirstZero(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
    }
}
//a new timer from the class
const timer = new Timer({
    onTick: updTimer,
});

 function updTimer({days, hours, minutes, seconds}) {
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.minutes.textContent = `${minutes}`;
    refs.seconds.textContent = `${seconds}`;
 }
// Натисканням на кнопку «Start» скрипт повинен обчислювати раз
// на секунду, скільки часу залишилось до вказаної дати, і
// оновлювати інтерфейс таймера, показуючи чотири цифри: дні,
// години, хвилини і секунди у форматі xx: xx: xx: xx.

