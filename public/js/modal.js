const footer = document.querySelector('#admin');
const { authorization } = document.forms;
const closeUs = document.querySelector('#closeAvt');

footer.addEventListener('click', (e) => {
  if (e.target.innerText === 'Admin') {
    authorization.classList.toggle('formAvt');
  }
});
closeUs.addEventListener('click', (e) => {
  authorization.classList.toggle('formAvt');
});
// authorization.addEventListener('submit', (e) => {
//   e.preventDefault();
//   authorization.classList.toggle('formAvt');
// });

// const navBar = document.querySelector('.btn-group');
// const { registration } = document.forms;
// const closeReg = document.querySelector('#closeReg');
// navBar.addEventListener('click', (e) => {
//   if (e.target.innerText === 'Регистрация') {
//     registration.classList.toggle('formReg');
//   }
// });
// closeReg.addEventListener('click', (e) => {
//   console.log('====>');
//   registration.classList.toggle('formReg');
// });
// registration.addEventListener('submit', (e) => {
//   e.preventDefault();
//   registration.classList.toggle('formReg');
// });

/// ///////// ФОРМА ОБРАТНОЙ СВЯЗИ////////
const navBarForm = document.querySelector('#btng');
const { formaUser } = document.forms;
const closeForm = document.querySelector('#closeUsers');
console.log('------->', navBarForm);
navBarForm.addEventListener('click', (e) => {
  if (e.target.innerText === 'Обратная связь') {
    formaUser.classList.toggle('formUsers');
  }
});
closeForm.addEventListener('click', (e) => {
  formaUser.classList.toggle('formUsers');
});
// formaUser.addEventListener('submit', (e) => {
//   e.preventDefault();
//   formaUser.classList.toggle('formUsers');
// });
