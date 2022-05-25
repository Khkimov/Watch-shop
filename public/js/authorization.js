// console.log('FORMSCRIPT', document.forms);
// console.log(authorization);

const formauth = document.forms.authorization;
const btn = document.getElementById('liveToastAut');
// const divErr = document.querySelector('.mb-3');
formauth.addEventListener('submit', async (e) => {
  e.preventDefault();
  const DataForm = Object.fromEntries(new FormData(formauth));
  console.log(DataForm);
  const response = await fetch('/admin/signin', {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(DataForm),
  });
  if (response.ok) {
    window.location.href = '/';
  } else if (response.status === 400) {
    console.log('Не правильное имя пользователя или пароль');
    const toast = new bootstrap.Toast(toastLiveExample);
    toast.show();
  } else {
    autForm.classList.toggle('inputErr');
    console.log('Не все поля заполненны');
  }
});
