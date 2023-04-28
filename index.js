const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const conf_password = document.getElementById("confirm-password");


// Show input error message
showError = (input, message) => {
    const formControl = input.parentElement;
    formControl.className = "control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}

// Show submit Success message
showSuccess = (input) => {
    const formControl = input.parentElement;
    formControl.className = 'control success';
}

// check email is valid
isValidEmail = (email) => {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    //   return re.test(String(email).toLowerCase());
    if (re.test(email.value.trim())) {
        showSuccess(email);
    } else {
        showError(email, 'Email is not valid');
    }
}

// Get field Name
getFieldName = (input) => {
    const name = input.id;
    // const firstLetter = name.substr(0, 1).toUpperCase();
    // return firstLetter + name.slice(1);
    //or
    return name.charAt(0).toUpperCase() + name.slice(1);
}

// Checked Required fields
checkRequired = (inputArr) => {

    inputArr.forEach((input) => {
        if (input.value.trim() === "") {
            showError(input, `${getFieldName(input)} is Required`);   // you can use 'input.id' , 'input.type' , 'input.type' or 'input.placeholder'
        } else {
            showSuccess(input);
        }
    })
}

// check input length
checkLength = (input, min, max) => {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at list ${min} characters`);
    }
    else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} should not be greater then ${max} characters`);
    } else {
        showSuccess(input);
    }
}

// event Listeners
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const array = [username, email, password, conf_password];
    checkRequired(array);
    checkLength(array[0], 3, 15);
    checkLength(array[2], 6, 25);
    isValidEmail(array[1]);
    passwordCheck(array[2], array[3]);
});


// Password should match
passwordCheck = (val1, val2) => {
    if (val1.value !== val2.value) {
        showError(val2, 'Password must match')
    }
}
    // if (username.value === "") {
    //     showError(username, 'Username is Required');
    // } else {
    //     showSuccess(username);
    // }

    // if (email.value === "") {

    //     showError(email, 'Email is Required');
    // }
    // else if(!isValidEmail(email.value)){
        
    //     showError(email, 'Email is not valid');
    // } 
    // else {
    //     showSuccess(email);
    // }


    // if (password.value === "") {

    //     showError(password, 'Password is Required');
    // } else {
    //     showSuccess(password);
    // }

    // if (conf_password.value === "") {

    //     showError(conf_password, 'Password a is Required');
    // } else {
    //     showSuccess(conf_password);
    // }

