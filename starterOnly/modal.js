function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");
const submitBtn = document.querySelector(".btn-submit");
const form = document.getElementById("reserve");
const closeBtnRed = document.getElementById("closeBtnRed");
const confirmationMsg = document.getElementById("confirmationMsg");

// DOM Elements for each input and error
const first = document.getElementById("first");
const firstError = document.getElementById("firstError");

const last = document.getElementById("last");
const lastError = document.getElementById("lastError");

const email = document.getElementById("email");
const emailError = document.getElementById("emailError");

const birthdate = document.getElementById("birthdate");
const birthdateError = document.getElementById("birthdateError");

const quantity = document.getElementById("quantity");
const quantityError = document.getElementById("quantityError");

const location2 = document.getElementsByName("location");
const locationError = document.getElementById("locationError");

const conditions = document.getElementById("checkbox1");
const conditionsError = document.getElementById("conditionsError");

const heroSection = document.querySelector(".hero-section");

// variable mobile media query
let mediaQueryMobile = window.matchMedia("(max-width: 540px)");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  // if mobile screen, heroSection doesn't appear
  if (mediaQueryMobile.matches) {
    heroSection.style.display = "none";
  }
}

// close modal event
closeBtn.addEventListener("click", closeModal);
// close modal form
function closeModal() {
  modalbg.style.display = "none";
  if (mediaQueryMobile.matches) {
    heroSection.style.display = "block";
  }
  // button close and confirmation message not displayed
  closeBtnRed.style.display = "none";
  confirmationMsg.style.display = "none";

  form.style.display = "block";
  submitBtn.style.display = "block";
  form.reset();
  first.value = "";
}

// button close and confirmation message not displayed
closeBtnRed.style.display = "none";
confirmationMsg.style.display = "none";

// inputs check + error message and its style
function checkInputs() {
  let formOk = true;
  // if first.value is empty and doesn't respect regex name, or first.length is less than 2 characters
  // then error message is displayed
  if (first.value.length < 2) {
    firstError.style.display = "block";
    firstError.textContent = "Veuillez entrer 2 caractères minimum";
    firstError.style.color = "red";
    firstError.style.fontSize = "10px";
    first.style.borderColor = "red";
    first.style.borderWidth = "2px";
    formOk = false;
  } else {
    firstError.style.display = "none";
    first.style = "default";
  }

  if (last.value.length < 2) {
    lastError.style.display = "block";
    lastError.textContent = "Veuillez entrer 2 caractères minimum";
    lastError.style.color = "red";
    lastError.style.fontSize = "10px";
    last.style.borderColor = "red";
    last.style.borderWidth = "2px";
    formOk = false;
  } else {
    lastError.style.display = "none";
    last.style = "default";
  }

  // if email doesn't correspond to regex => error
  let verifEmail =
    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,12})$/;
  if (verifEmail.exec(email.value) === null) {
    emailError.style.display = "block";
    emailError.textContent = "Veuillez renseigner votre adresse mail";
    emailError.style.color = "red";
    emailError.style.fontSize = "10px";
    email.style.borderColor = "red";
    email.style.borderWidth = "2px";
    formOk = false;
  } else {
    emailError.style.display = "none";
    email.style = "default";
  }

  if (!birthdate.value) {
    birthdateError.style.display = "block";
    birthdateError.textContent = "Veuillez entrer votre date de naissance";
    birthdateError.style.color = "red";
    birthdateError.style.fontSize = "10px";
    birthdate.style.borderColor = "red";
    birthdate.style.borderWidth = "2px";
    formOk = false;
  } else {
    birthdateError.style.display = "none";
    birthdate.style = "default";
  }

  // if quantity.value is empty or its value is not a number => error
  if (quantity.value === "" || isNaN(quantity.value)) {
    quantityError.style.display = "block";
    quantityError.textContent = "Veuillez renseigner ce champ";
    quantityError.style.color = "red";
    quantityError.style.fontSize = "10px";
    quantity.style.borderColor = "red";
    quantity.style.borderWidth = "2px";
    formOk = false;
  } else {
    quantityError.style.display = "none";
    quantity.style = "default";
  }

  //if one of the option is not checked => error
  if (
    !(
      location2[0].checked ||
      location2[1].checked ||
      location2[2].checked ||
      location2[3].checked ||
      location2[4].checked ||
      location2[5].checked
    )
  ) {
    locationError.style.display = "block";
    locationError.textContent = "Veuillez choisir une option";
    locationError.style.color = "red";
    locationError.style.fontSize = "10px";
    formOk = false;
  } else {
    locationError.style.display = "none";
    location2.style = "default";
  }

  if (!conditions.checked) {
    conditionsError.style.display = "block";
    conditionsError.textContent =
      "Veuillez vérifier que vous avez accepté les termes et conditions";
    conditionsError.style.color = "red";
    conditionsError.style.fontSize = "10px";
    conditions.style.borderColor = "red";
    conditions.style.borderWidth = "2px";
    formOk = false;
  } else {
    conditionsError.style.display = "none";
    conditions.style = "default";
  }
  return formOk;
}

/* focus on next input when key 13 pressed
document.querySelectorAll('input').forEach( input => {
  input.addEventListener('keypress', e => {
      if(e.keypress === 13) {
          let nextEl = input.nextElementSibling;
          console.log(nextEl)
          if(nextEl.nodeName === 'input') {
              nextEl.focus();
          }
      }
  });
}); */

// function called at form submit event
function validate(event) {
  // default behavior of submit event is avoided
  event.preventDefault();

  // all inputs must be true so the form can be submitted correctly
  // if so, confirmation message and red close button are displayed
  if (checkInputs()) {
    form.style.display = "none";
    confirmationMsg.style.fontSize = "30px";
    confirmationMsg.style.textAlign = "center";
    confirmationMsg.style.margin = "20px";

    closeBtnRed.style.display = "block";
    closeBtnRed.style.marginBottom = "10px";

    submitBtn.style.display = "none";
    confirmationMsg.style.display = "flex";
    closeBtnRed.addEventListener("click", closeModal);
    return true;
  }
}

// listening submit event on form element so function validate is run
form.addEventListener("submit", validate);
