const enquire_button = document.getElementById("enquire-button");
const submit_button = document.getElementById("submit-button");
const form = document.getElementById("popup-form-div");
const success_message = document.getElementById("success-message");

enquire_button.addEventListener("click", displayForm);

function displayForm() {
    form.style.display = "block";
}

submit_button.addEventListener("click", displaySuccess);

function displaySuccess(event) {
    event.preventDefault();
    success_message.style.display = "block";
    form.style.display = "none";
}
