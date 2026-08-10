const userValue = document.getElementById('userValue');
const randomNum = document.getElementById('randomNum');
const range = document.getElementById('range');
const submitBtn = document.getElementById('submitBtn');
const chosenNum = document.getElementById('chosenNum');
const attempts = document.getElementById('attempts');
const wins = document.getElementById('wins');


let isWin = false;
let count = 0;
let winnigs = 0;

let getRange = []

function generateRange() {
    let randomizeNumbers = Math.floor(Math.random() * 99 + 1);
    getRange = [randomizeNumbers];

    range.textContent = `Guessing range: 0 - ${randomizeNumbers}`;
    console.log(randomizeNumbers);
    console.log(getRange);
}

generateRange();

submitBtn.disabled = false;

userValue.addEventListener('input', (e) => {
    const value = e.target.value;

    if (value.length > 0 && !isNaN(value)) {
        submitBtn.disabled = false;
    }
    else {
        submitBtn.disabled = true;
    }
});

submitBtn.addEventListener('click', () => {
    let randomizeNumbers = Math.floor(Math.random() * 99 + 1);
    getRange = [randomizeNumbers];


    
    randomNum.textContent = randomizeNumbers;
});