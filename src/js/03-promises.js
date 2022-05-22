//replacing of standart alert log usage
import Notiflix from 'notiflix';
//all modules
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
form.addEventListener("submit", onSubmit);


function onSubmit(e) {
  e.preventDefault();
  const { elements: { amount, delay, step } } = e.currentTarget;
  let amountValue = Number(amount.value);
  let delayValue = Number(delay.value);
  let stepValue = Number(step.value);
  
  for (let i = 1; i <= amountValue; i += 1){
    createPromise(2, 1500)
    .then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
  }
}


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
      // Fulfill
        resolve({position, delay});
      } else {
        // Reject
        reject({position, delay});
      }
    }, delay)
  })

}


