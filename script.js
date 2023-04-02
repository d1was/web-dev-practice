let submitButton = document.getElementById("submitButton");

let errors = {};

submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  let signupForm = document.forms["signupForm"];
  let firstNameInput = signupForm.firstName;
  let lastNameInput = signupForm.lastName;
  let passwordInput = signupForm.password;

  if (firstNameInput.value == "") {
    errors.firstName = "Firstname Should not be empty";
  }
  if (lastNameInput.value == "") {
    errors.lastName = "Lastname should not be empty";
  }

  if (passwordInput.value == "") {
    errors.password = "Password should not be empty";
  }

  if (passwordInput.value.length <= 5) {
    errors.password = "Minimum 6 characters are needed";
  }

  console.log(errors);

  for (let error in errors) {
    let lastNameGroup = document.getElementById(`${error}Group`);
    let lastNameMessage = document.querySelector(`#${error}Group .message`);
    lastNameGroup.classList.add("error");
    lastNameMessage.textContent = errors[error];
  }

  if (Object.keys(errors).length == 0) {
    signupForm.submit();
  }
});
