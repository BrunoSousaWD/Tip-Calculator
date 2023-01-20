let cardHolderName = document.getElementById('cardName');
let inpCardName = document.getElementById('ch-name');

let cardHolderNum = document.getElementById('cardNumb');
let inpCardNum = document.getElementById('c-number');


let month = document.getElementById('mth');
let inpMonth = document.getElementById('month');
let year = document.getElementById('yr');
let inpYear = document.getElementById('year');

let inpCvc = document.getElementById('cvc');
let cvc = document.getElementById('cvc-display');



function updateCardName(e) {
    cardHolderName.textContent = e.target.value;
}

function updateCardNum(e) {
    cardHolderNum.textContent = e.target.value.replace(/(.{4})/g, '$1 ').trim();
}

function updateMonth(e) {
    mth.textContent = e.target.value;

}

function updateYear(e) {
    if (e.target.value > 21 & e.target.value < 33 || e.target.value == ! ' ') {
        yr.textContent = e.target.value;
        errorDate.style.display = 'none';
        inpYear.style.border = '';
    }
    else {
        errorDate.style.display = 'block';
        inpYear.style.border = '1px solid red';
    }
}

function updateCvc(e) {
    if (e.target.value > 0 & e.target.value <= 999) {
        cvc.textContent = e.target.value;
        if (e.target.value < 10) {
            cvc.textContent = '00' + e.target.value;
        }
        else if (e.target.value < 100) {
            cvc.textContent = '0' + e.target.value;
        }
        else if (e.target.value === '') {
            inpCvc.style.border = '1px solid red';
        }
    }
    else {
        cvc.textContent = '000';
    }
}


//ERRORs
let errName = document.getElementById('errorName');
let errNum = document.getElementById('errorNum');
//verify if is letter
function validate() {
    let regEx = /^[A-Za-z' ']+$/;

    if (cardHolderName.textContent.match(regEx)) {
        errName.style.display = 'none';
        inpCardName.style.border = '';
    }
    else {
        errName.style.display = 'block';
        inpCardName.style.border = '1px solid red';
        cardHolderName.textContent = '';
    }
}

//verify if numb or space

function validateNum() {
    let num = /^[0-9' ']+$/;
    if (cardHolderNum.textContent.match(num)) {
        errNum.style.display = 'none';
        inpCardNum.style.border = '';
    }

    else {
        errNum.style.display = 'block';
        inpCardNum.style.border = '1px solid red';
    }
}

//set max number
function maxNum() {
    if (mth.textContent > 12) {
        mth.textContent = 12;
        errorDate.style.display = 'block';
        inpMonth.style.border = '1px solid red';
    }
    else if (mth.textContent <= 0) {
        mth.textContent = '01';
        errorDate.style.display = 'none';
    }
    else {
        errorDate.style.display = 'none';
        inpMonth.style.border = '';
    }
}

//set max num length
document.querySelectorAll('input[type="number"]').forEach(input => {
    input.oninput = () => {
        if (input.value.length > input.maxLength) {
            input.value = input.value.slice(0, input.maxLength);
        }

    };
});


//Submit
function validateForm() {
    let errorCvc = document.getElementById('errorCvc');
    let notLetter = "^[0-9*#+]+$";

    if (inpCardName.value === "" || inpCardName.value.match(notLetter)) {
        errName.style.display = 'block';
        inpCardName.style.border = '1px solid red';
    }
    else if (inpCardNum.value === '' || inpCardNum.value.length < 16) {
        errNum.style.display = 'block';
        inpCardNum.style.border = '1px solid red';
    }
    else if (inpMonth.value === '') {
        errorShow.style.display = 'block';
        inpMonth.style.border = '1px solid red';

    }
    else if (inpYear.value === '' || inpYear.value > 32 || inpYear.value < 20) {
        error.style.display = 'block';
        inpYear.style.border = '1px solid red';
    }
    else if (inpCvc.value === '') {
        inpCvc.style.border = '1px solid red';
        errorCvc.style.display = 'block';
    }
    else {
        complete.style.display = 'block';
        form.style.display = ' none';
    }
}

document.getElementById('sub-btn').addEventListener('click', function (e) {
    e.preventDefault();
    validateForm();
})



inpCardName.addEventListener('input', updateCardName);
inpCardName.addEventListener('input', validate);

inpCardNum.addEventListener('input', updateCardNum);
inpCardNum.addEventListener('input', validateNum);

inpMonth.addEventListener('input', updateMonth);
inpMonth.addEventListener('input', maxNum);
inpYear.addEventListener('input', updateYear);

inpCvc.addEventListener('input', updateCvc);


//Reload Page
function reload() {
    location.reload();
}
