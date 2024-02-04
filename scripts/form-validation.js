const form = document.getElementById("form");
const fullName = document.getElementById("fname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const company = document.getElementById("company");
const hrElements = document.querySelectorAll("hr");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const fullNameValue = fullName.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const companyValue = company.value.trim();

  if (fullNameValue === "") {
    setError(fullName, hrElements[0]);
  } else {
    success(fullName, hrElements[0]);
  }

  if (emailValue === "") {
    setError(email, hrElements[1]);
  } else if (!isEmail(emailValue)) {
    setError(email, hrElements[1]);
  } else {
    success(email, hrElements[1]);
  }

  if (phoneValue === "") {
    setError(phone, hrElements[3]);
  } else if (!isValidPhoneNumber(phoneValue)) {
    setError(phone, hrElements[3]);
  } else {
    success(phone, hrElements[3]);
  }

  if (companyValue === "") {
    setError(company, hrElements[4]);
  } else {
    success(company, hrElements[4]);
  }
}

function setError(input, hrElement) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  hrElement.classList.add("error");
}

function success(input, hrElement) {
  const formControl = input.parentElement;
  formControl.className = "form-control";
  hrElement.classList.remove("error");
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function isValidPhoneNumber(phoneNumber) {
  const phoneRegex = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
  return phoneRegex.test(phoneNumber);
}
