const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = upperCase.toLowerCase();
const numbers = '0123456789';
const symbols = '~`!@#$%^&*()_-+={[}]:;"<,>.?';

const allChars = upperCase + lowerCase + numbers + symbols;

const randomPassword = document.querySelector('.random-password');

function passwordGenerator() {
    let password = '';
    const passwordLength = 14;

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (password.length < passwordLength) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    randomPassword.textContent = password;
    randomPassword.style.color = 'black';
}

const addBtn = document.querySelector('.add-btn');

addBtn.addEventListener('click', () => {
    passwordGenerator();
    popup.style.display = 'none';
});

const popup = document.querySelector('#popup');

function copyPassword() {
    navigator.clipboard.writeText(randomPassword.textContent)
        .then(() => {
            popup.style.display = 'block';

            setTimeout(() => {
                popup.style.display = 'none';
            }, 3000);
        }) 
        .catch(err => {
            console.error('Failed to copy', err);
        })
}

const copyBtn = document.querySelector('.copy-img');

copyBtn.addEventListener('click', () => {
    if(randomPassword.textContent !== 'Password')
        copyPassword();
})