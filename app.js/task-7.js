const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
let newLogin;
const isLoginValid = function(login) {
  if (addLogin >= 4 && addLogin <= 16) {
    return true;
  } else {
      alert('Ошибка! Логин должен быть больше 4 и меньше 16 символов!');
  }
};

const isLoginUnique = function(allLogins, login) {
  for (const login of logins) {
      if (newLogin !== login) {
          return true;
      } else {
          alert('Такой логин уже сущуствует');
      }
  }
};

const addLogin = function(allLogins, login) {
    if (isLoginValid === true && isLoginUnique === true) {
        logins.push(newLogins);
        console.log('Логин успешнь добавлен!');
    }
  
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'