// Sign-up Form

const submit = document.getElementById('submitBtn');
submit.disabled = true;
// get all input elements
const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
	input.addEventListener('keyup', (a) => {
		enableSubmit();
	});
});


//if all input is valid, enable submit button
function enableSubmit() {
	if (firstName.validity.valid && lastName.validity.valid && phone.validity.valid && pass.validity.valid && email.validity.valid && confirmPass.validity.valid) {
		submit.disabled = false;
	} else {
		submit.disabled = true;
	}
}



//for email validation

// There are many ways to pick a DOM node; here we get the form itself and the email
// input box, as well as the span element into which we will place the error message.
const form = document.getElementsByTagName('form')[0];

const email = document.getElementById('mail');
const error = document.getElementById('error');
const emailError = document.querySelector('#mail + span.error');

error.innerText = email.validationMessage;
error.classList.add('invalid');
error.classList.remove('valid');

email.addEventListener('input', function (event) {
	// Each time the user types something, we check if the
	// form fields are valid.

	// If the email field is empty, show the error message

	if (email.validity.valid) {
		// In case there is an error message visible, if the field
		// is valid, we remove the error message.
		// emailError.innerText = email.validationMessage; // Reset the content of the message
		// emailError.className = 'error'; // Reset the visual state of the message
		error.innerText = "Valid E-mail Address";
		error.classList.remove('invalid');
		error.classList.add('valid');

	} else {
		// If there is still an error, show the correct error
		showError();
	}
});

form.addEventListener('submit', function (event) {
	// if the form contains valid data, we let it submit
	event.preventDefault();

	if (!email.validity.valid) {
		submit.disabled = true;
		// If it isn't, we display an appropriate error message
		showError();
		// Then we prevent the form from being sent by canceling the event
		event.preventDefault();
	}
});

function showError() {
	if (email.validity.valueMissing) {
		// If the field is empty
		// display the following error message.
		emailError.textContent = 'You need to enter an e-mail address.';
	} else if (email.validity.typeMismatch) {
		// If the field doesn't contain an email address
		// display the following error message.
		emailError.textContent = 'Entered value needs to be an e-mail address.';
	} else if (email.validity.tooShort) {
		// If the data is too short
		// display the following error message.
		emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
	}

	// Set the styling appropriately
	emailError.className = 'error active';
	error.classList.add('invalid');
	error.classList.remove('valid');
	

}


// for password validation
const myInput = document.getElementById("user_password");
const letter = document.getElementById("letter");
const capital = document.getElementById("capital");
const number = document.getElementById("number");
const length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function () {
	document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function () {
	document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function () {
	// Validate lowercase letters
	let lowerCaseLetters = /[a-z]/g;
	if (myInput.value.match(lowerCaseLetters)) {
		letter.classList.remove("invalid");
		letter.classList.add("valid");
	} else {
		letter.classList.remove("valid");
		letter.classList.add("invalid");
	}

	// Validate capital letters
	let upperCaseLetters = /[A-Z]/g;
	if (myInput.value.match(upperCaseLetters)) {
		capital.classList.remove("invalid");
		capital.classList.add("valid");
	} else {
		capital.classList.remove("valid");
		capital.classList.add("invalid");
	}

	// Validate numbers
	let numbers = /[0-9]/g;
	if (myInput.value.match(numbers)) {
		number.classList.remove("invalid");
		number.classList.add("valid");
	} else {
		number.classList.remove("valid");
		number.classList.add("invalid");
	}

	// Validate length
	if (myInput.value.length >= 8) {
		length.classList.remove("invalid");
		length.classList.add("valid");
	} else {
		length.classList.remove("valid");
		length.classList.add("invalid");
	}

}


// for password confirmation validation
const pass = document.getElementById("user_password");
const divCheckPassword = document.getElementById('divCheckPassword');
const confirmPass = document.getElementById('user_password_confirm');

confirmPass.addEventListener('keyup', (e) => {
    let password = pass.value;
    let confirmPassword = confirmPass.value;

    if (password != confirmPassword) {
        divCheckPassword.innerHTML = "Passwords do not match!";
		divCheckPassword.classList.remove("valid");
		divCheckPassword.classList.add("invalid");
		submit.disabled = true;
    } else {
        divCheckPassword.innerHTML = "Passwords match.";
		divCheckPassword.classList.remove("invalid");
		divCheckPassword.classList.add("valid");
    }
});



//for first name, last name and phone validation 
const firstName = document.getElementById('first_name');
const firstNameVal = document.getElementById('firstNameVal');
const lastName = document.getElementById('last_name');
const lastNameVal = document.getElementById('lastNameVal');
const phone = document.getElementById('phone_number');
const phoneNumberVal = document.getElementById('phoneNumberVal');

function validateForm() {
	

	firstNameVal.innerText = firstName.validationMessage;
	firstNameVal.classList.remove("valid");
	firstNameVal.classList.add("invalid");

	lastNameVal.innerText = lastName.validationMessage;
	lastNameVal.classList.remove("valid");
	lastNameVal.classList.add("invalid");

	phoneNumberVal.innerText = phone.validationMessage;
	phoneNumberVal.classList.remove("valid");
	phoneNumberVal.classList.add("invalid");

	firstName.addEventListener('input', function (event) {
		// Each time the user types something, we check if the
		// form fields are valid.

		if (firstName.validity.valid) {
			// In case there is an error message visible, if the field
			// is valid, we remove the error message.
			firstNameVal.innerHTML = 'Valid First Name'; // Reset the content of the message
			firstNameVal.classList.remove("invalid");
			firstNameVal.classList.add("valid");
			firstNameVal.style.color = 'green';
		} else {
			// If there is still an error, show the correct error
			firstNameVal.innerHTML = firstName.validationMessage;
			firstNameVal.classList.remove("valid");
			firstNameVal.classList.add("invalid");
			firstNameVal.style.color = 'rgb(185, 1, 1)';
			submit.disabled = true;
		}
	});

	lastName.addEventListener('input', function (event) {
		// Each time the user types something, we check if the
		// form fields are valid.

		if (lastName.validity.valid) {
			// In case there is an error message visible, if the field
			// is valid, we remove the error message.
			lastNameVal.innerHTML = 'Valid Last Name'; // Reset the content of the message
			lastNameVal.classList.remove("invalid");
			lastNameVal.classList.add("valid");
			lastNameVal.style.color = 'green';

		} else {
			// If there is still an error, show the correct error
			lastNameVal.innerHTML = lastName.validationMessage;
			lastNameVal.classList.remove("valid");
			lastNameVal.classList.add("invalid");
			lastNameVal.style.color = 'rgb(185, 1, 1)';
			submit.disabled = true;
		}
	});

	phone.addEventListener('input', function (event) {
		// Each time the user types something, we check if the
		// form fields are valid.

		if (phone.validity.valid) {
			// In case there is an error message visible, if the field
			// is valid, we remove the error message.
			phoneNumberVal.innerHTML = 'Valid Phone Number'; // Reset the content of the message
			phoneNumberVal.classList.remove("invalid");
			phoneNumberVal.classList.add("valid");
			phoneNumberVal.style.color = 'green';

		} else {
			// If there is still an error, show the correct error
			phoneNumberVal.innerHTML = phone.validationMessage;
			phoneNumberVal.classList.remove("valid");
			phoneNumberVal.classList.add("invalid");
			phoneNumberVal.style.color = 'rgb(185, 1, 1)';
			submit.disabled = true;
		}
	});
}

validateForm();
