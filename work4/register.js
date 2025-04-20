const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = registerForm.email.value.trim();
  const password = registerForm.password.value;

  const users = JSON.parse(localStorage.getItem('users')) || {};
  if (users[email]) {
    alert('Пользователь уже зарегистрирован!');
  } else {
    users[email] = password;
    localStorage.setItem('users', JSON.stringify(users));
    console.log(`Зарегистрирован: ${email}`);
    alert('Регистрация прошла успешно!');
    registerForm.reset();
  }
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = loginForm.loginEmail.value.trim();
  const password = loginForm.loginPassword.value;

  const users = JSON.parse(localStorage.getItem('users')) || {};
  if (users[email] && users[email] === password) {
    console.log(`Вход выполнен: ${email}`);
    alert('Успешный вход!');
  } else {
    alert('Неверный email или пароль!');
  }
});