// Sign-up Form


//for email validation

// There are many ways to pick a DOM node; here we get the form itself and the email
// input box, as well as the span element into which we will place the error message.
const form = document.getElementsByTagName('form')[0];

const email = document.getElementById('mail');
const error = document.getElementById('error');
const emailError = document.querySelector('#mail + span.error');

email.addEventListener('input', function (event) {
	// Each time the user types something, we check if the
	// form fields are valid.

	error.style.display = 'block';
	// If the email field is empty, show the error message

	if (email.validity.valid) {
		// In case there is an error message visible, if the field
		// is valid, we remove the error message.
		emailError.innerHTML = ''; // Reset the content of the message
		emailError.className = 'error'; // Reset the visual state of the message
	} else {
		// If there is still an error, show the correct error
		showError();
	}
});

form.addEventListener('submit', function (event) {
	// if the form contains valid data, we let it submit

	if (!email.validity.valid) {
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

}