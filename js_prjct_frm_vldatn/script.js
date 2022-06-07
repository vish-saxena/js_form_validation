'use strict'

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

const inputArr = [username, email, password, confirmPassword];

//In Event listner preventDefault is very imp used to prevent passing of data via url
// It also prevent the refreshing of the page

const showError = function (input, message) {
    let formControl = input.parentElement;
    formControl.classList = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
};

const showSucess = function (input) {
    let formControl = input.parentElement;
    formControl.classList = 'form-control sucess';
};

const checkRequired = function (inputArr) {
    inputArr.forEach((input) => {
        if (input.value.trim() === '') {
            showError(input, `${message(input)} is required`);
        } else {
            showSucess(input);
        }
    });
};

//check lenght func
const checkLength = function(input, min, max){
    if (input.value.trim().length < min){
        showError(input, `${message(input)} must be atleast ${min} characters`);
    }else if (input.value.trim().length > max) {
        showError(input, `${message(input)} must be less than ${max} characters`);
    }else {
        showSucess(input);
    };
    };

// Check Password    
const checkPasswordMatch = function(input1, input2){
    if (input1.value.trim() !== '' && input2.value.trim() !== '') {
        if(input1.value.trim() !== input2.value.trim()) {
            showError(input2, 'Password not matched');
        }else {
            showSucess(input1);
            showSucess(input2);
        }
    }
    }

//Regex for Email
const checkEmail = function(input) {
    const re =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(re.test(String(input.value).toLowerCase().trim())) {
        showSucess(input);
    } else {
        showError(input, 'E-mail is not valid');
    }
}; 

//regex for messege display with first letter capital
const message = function(input){
    const errorMessage = input.name.replace(/-p/, ' P');
    return errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1);
};


//Event
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkRequired(inputArr); 
    checkLength(username, 5, 12);
    checkLength(password, 5, 10);
    checkEmail(email);
    checkPasswordMatch(password, confirmPassword);
});

//form.addEventListener('submit', function (e) {
  //  e.preventDefault();

    //if(username.value.trim() === '') {
        //parent element of formControl
      //  let formControl = username.parentElement;
        ///changing class name
        //formControl.classList = 'form-control error';
        //selecting small
        //const small = formControl.querySelector('small');
        //small.innerText = 'Username is required';
    //} 
//}); 

//at advance level
//add mobile no and check indian pattrn using regex
//txtare a showing live charcount max300char