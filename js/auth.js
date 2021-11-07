const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const buttonOut = document.querySelector('.button-out');
const userName = document.querySelector('.user-name');
const logInForm = document.getElementById('logInForm');
const inputLogin = document.getElementById('login');
const inputPassword = document.getElementById('password');

const TestLogin = (login) => {
    if (/^[a-zA-Z1-9]+$/.test(login) === false) {
        alert('В логине должны быть только латинские буквы');
        return false;
    }
    if (login.length < 4 || login.length > 20) {
        alert('В логине должны быть символы от 4 до 20');
        return false;
    }
    if (parseInt(login.substr(0, 1))) {
        alert('Логин должен начинаться с буквы');
        return false;
    }
    return true;
}


const login = (user) => {
    buttonAuth.style.display = 'none';
    buttonOut.style.display = 'flex';
    userName.style.display = 'flex';
    userName.textContent = user.login;
    modalAuth.style.display = 'none';
}

const logout = () => {
    buttonAuth.style.display = 'flex';
    buttonOut.style.display = 'none';
    userName.style.display = 'none';
    userName.textContent = '';
    localStorage.removeItem('user');
}


buttonOut.addEventListener('click', () => {
    logout();
});

modalAuth.addEventListener('click', (event) => {
    let target = event.target;
    if (target === modalAuth) {
        modalAuth.style.display = 'none';
    }
});

buttonAuth.addEventListener('click', () => {
    modalAuth.style.display = 'flex';
});

closeAuth.addEventListener('click', () => {
    modalAuth.style.display = 'none';
})

logInForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const user = {
        login: inputLogin.value,
        password: inputPassword.value
    }
    let str = user.login.trim();
    if (str != '') {
        if (TestLogin(str)) {
            localStorage.setItem('user', JSON.stringify(user));
            login(user);
        }
    } else {
        alert('Введите логин!');
    }
});

if (localStorage.getItem('user')) {
    login(JSON.parse(localStorage.getItem('user')));
}