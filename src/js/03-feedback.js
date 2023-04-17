import throttle from 'lodash.throttle'; 

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const saveState = throttle(() => {
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(state));
}, 500);

const restoreState = () => {
  const state = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (state) {
    emailInput.value = state.email;
    messageInput.value = state.message;
  }
};

emailInput.addEventListener('input', saveState);
messageInput.addEventListener('input', saveState);

document.addEventListener('DOMContentLoaded', restoreState);

form.addEventListener('submit', event => {
  event.preventDefault();
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(state);
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
});
