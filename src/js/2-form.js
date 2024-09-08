const form = document.querySelector('.feedback-form');
const formData = {
  email: '',
  message: '',
};
const savedData = localStorage.getItem('feedback-form-state');

if (savedData) {
  const parsedData = JSON.parse(savedData);

  formData.email = parsedData.email;
  formData.message = parsedData.message;

  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener('input', handlerInput);
form.addEventListener('submit', handlerSubmit);

function handlerInput(event) {
  formData.email = form.elements.email.value;
  formData.message = form.elements.message.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function handlerSubmit(event) {
  event.preventDefault();
  if (formData.email.trim() === '' || formData.message.trim() === '') {
    alert('Fill please all fields');
    return;
  }

  console.log('Form submitted:', formData);

  localStorage.removeItem('feedback-form-state');
  form.reset();

  formData.email = '';
  formData.message = '';
}
