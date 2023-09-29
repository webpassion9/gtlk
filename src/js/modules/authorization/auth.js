// auth.js

export function initializeAuthFields() {

  const authFields = document.querySelectorAll('.auth__field');

  if (authFields.length > 0) {
    authFields.forEach(authField => {
      const inputField = authField.querySelector('.auth__field-input');
      const errorElement = authField.querySelector('.auth__field-error');

      inputField.addEventListener('focus', () => {
        inputField.classList.add('is-active');

          const inputParent = inputField.closest('.input');
          if (inputParent) {
            inputParent.querySelector('.input__heading').classList.add('is-active');
          }
      });

      inputField.addEventListener('blur', () => {
        if (inputField.value.trim() === '') {
          inputField.classList.remove('is-active');
            const inputParent = inputField.closest('.input');
            if (inputParent) {
              inputParent.querySelector('.btn-show-pass').classList.remove('is-active');
            }
        }
      });

      inputField.addEventListener('input', () => {
        if (inputField.value.trim() === '') {
          inputField.classList.remove('is-active');
            const inputParent = inputField.closest('.input');
            if (inputParent) {
              inputParent.querySelector('.btn-show-pass').classList.remove('is-active');
            }
        }
      });

      // создана простая проверка для демонстрации ошибки
      inputField.addEventListener('input', () => {
        if (inputField.value.length < 2) {
          inputField.classList.add('is-error');
          errorElement.classList.add('is-visible');
        } else {
          inputField.classList.remove('is-error');
          errorElement.classList.remove('is-visible');
        }
        if (inputField.value.length === 0) {
          inputField.classList.remove('is-error');
          errorElement.classList.remove('is-visible');
        }
      });
        
    });

    const passwordField = document.querySelector('.auth__field-input--password');
    const btnShowPass = document.querySelector('.btn-show-pass');

    passwordField.addEventListener('input', () => {
      if (passwordField.value.length > 0) {
        btnShowPass.classList.add('is-visible');
      } else {
        btnShowPass.classList.remove('is-visible');
      }
    });

    btnShowPass.addEventListener('click', () => {
      if (passwordField.type === 'password') {
        passwordField.type = 'text';
      } else {
        passwordField.type = 'password';
      }

      btnShowPass.classList.toggle('is-active');
    });
  }
}
