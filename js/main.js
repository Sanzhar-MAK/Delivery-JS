const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const buttonOut = document.querySelector('.button-out');
const userName = document.querySelector('.user-name');
const modalDialogAuth = document.querySelector('.modal-dialog-auth');

const logInForm = document.getElementById('logInForm');
const inputLogin = document.getElementById('login');
const inputPassword = document.getElementById('password');

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
        localStorage.setItem('user', JSON.stringify(user));
        login(user);
    } else {
        alert('Введите логин!');
    }
});

if (localStorage.getItem('user')) {
    login(JSON.parse(localStorage.getItem('user')));
}