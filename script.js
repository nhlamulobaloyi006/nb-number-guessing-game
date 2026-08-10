const userValue = document.getElementById('userValue');
const randomNum = document.getElementById('randomNum');
const range = document.getElementById('range');
const submitBtn = document.getElementById('submitBtn');
const chosenNum = document.getElementById('chosenNum');
const attempts = document.getElementById('attempts');
const wins = document.getElementById('wins');


let isWin = false;
let attempted = 0;
let winnigs = 0;

let getRange = []
let targetValue = []

function generateRange() {
    let randomizeNumbers = Math.floor(Math.random() * 99 + 1);
    getRange = [randomizeNumbers];

    range.textContent = `Number is between: ${Math.ceil(randomizeNumbers - 7)} - ${randomizeNumbers + 7}`;
    console.log(randomizeNumbers);
    console.log(getRange);
}



submitBtn.disabled = true;

userValue.addEventListener('input', (e) => {
    const value = e.target.value;
    targetValue = [value];

    if (value.length > 0 && !isNaN(value)) {
        submitBtn.disabled = false;
    }
    else {
        submitBtn.disabled = true;
    }
});

userValue.addEventListener('click', function(){
    generateRange();
});

submitBtn.addEventListener('click', () => {
    attempted++
    const clearField = document.getElementById('userValue');
    const getRangeValue = getRange[0];
    const user = userValue.value;
    console.log(typeof num);

    const getTargetValue = targetValue[0];

    if (Number(getRangeValue) === Number(getTargetValue)) {
        isWin = true;
        alert("You got it");
    }

    if (Number(getRangeValue) !== Number(getTargetValue)) {
        isWin = false;
    }

    if (isWin === true) {
        winnigs++
        wins.textContent = `Wins: ${winnigs}`;
    }

    if (isWin === false) {
        wins.textContent = `Wins: ${winnigs}`;
    }

    randomNum.textContent = getRange[0];
    attempts.textContent = `Attempts: ${attempted}`;
    chosenNum.textContent = ` Chosen no: ${targetValue[0]}`;

    clearField.value = '';
});