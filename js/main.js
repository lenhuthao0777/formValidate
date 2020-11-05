const form = document.querySelector("#form");
const name = document.querySelector("#input-name");
const email = document.querySelector("#input-email");
const password = document.querySelector("#input-password");
const passwordCheck = document.querySelector("#input-password-check");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput();
});

function checkInput() {
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const passwordCheckValue = passwordCheck.value.trim();

  if (nameValue === "") {
    setErrorFor(name, "Name can not empty!");
  } else {
    setSuccessFor(name);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email can not empty!");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not value!");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password can not empty!");
  } else {
    setSuccessFor(password);
  }
  if (passwordCheckValue === "") {
    setErrorFor(passwordCheck, "Password can not empty!");
  } else if (passwordValue !== passwordCheckValue) {
    setErrorFor(passwordCheck, "Password Check do not match!");
  } else {
    setSuccessFor(passwordCheck);
  }
}
function setErrorFor(input, msg) {
  const formGroup = input.parentElement; //get form-group
  const small = formGroup.querySelector("small");
  small.innerText = msg;
  formGroup.className = "form-group error";
}
function setSuccessFor(input) {
  const formGroup = input.parentElement; //get form-group
  const small = formGroup.querySelector("small");
  small.innerText = "";
  formGroup.className = "form-group success";
}
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
