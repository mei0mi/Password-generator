//SELECTORS 

const pw = document.getElementById('password');
const copyBtn = document.querySelector('.copy-btn');
const generatorBtn = document.querySelector('.password-btn');
const upperCase = document.querySelector('.upperLetterBox');
const lowerCase = document.querySelector('.lowerLetterBox');
const numberBox = document.querySelector('.numberBox');
const symbolBox = document.querySelector('.symbolBox');
const passwordLength = document.querySelector('.passwordLength')

//CONSTANT
const lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const upperCaseLetters = [...Array(26)].map((_, index) => String.fromCharCode(65 + index));
const NUMBERS = [...Array(10)].map((_, index) => 0 + index)
const SYMBOLS = ['!', '@', '#', '$', '%', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', '\\', ':', ';', '"', '\'', '<', '>', ',', '.', '?', '/', '~'];

//FUNCTIONS


function getLowercase() {
    return lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
}

function getUppercase() {
    return upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
}

function getNumbers() {
    return NUMBERS[Math.floor(Math.random() * NUMBERS.length)];
}

function getSymbols() {
    return SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
}

function generatePassword(e) {
    e.preventDefault()
    
    if(!upperCase.checked && !lowerCase.checked && !numberBox.checked && !symbolBox.checked) {
        alert('Please specify(check) what type of password you want')
    } 

    let password = '';

    if(upperCase.checked){
        password += getUppercase();
    
    }

    if(lowerCase.checked){
        password += getLowercase()
    }
    
    if(numberBox.checked){
        password += getNumbers();
  
    }

    if(symbolBox.checked){
        password += getSymbols();
    } 

    for(let i = password.length; i < passwordLength.value; i++){
        let x = generateX();
        password += x 
    }


    pw.innerHTML = password


}

generatorBtn.addEventListener('click', generatePassword)


function generateX() {
    const xs = [];

    if(upperCase.checked) {
        xs.push(getUppercase())
    }

    if(lowerCase.checked) {
        xs.push(getLowercase())
    }

    if(numberBox.checked) {
        xs.push(getNumbers())
    }

    if(symbolBox.checked) {
        xs.push(getSymbols())
    }

    if(xs.length === 0 ) {
        return '';
    }
    return xs[Math.floor(Math.random() * xs.length)]
}

copyBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const passwordText = pw.innerHTML;
    navigator.clipboard.writeText(passwordText)
    .then(() => {
        alert('Copied password successfully')
    })
    .catch((error) => {
        console.error('Failed to copy password', error)
    })
  });