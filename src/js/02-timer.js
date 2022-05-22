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


//options object from flatpickr lib
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
// функція flatpickr(selector, options)
flatpickr("#datetime-picker", options);