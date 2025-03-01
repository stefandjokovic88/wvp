document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const firstname = document.getElementById("firstname");
  const lastname = document.getElementById("lastname");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  //show input error messages
  function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
  }

  //error placeholders
  function errorPlaceholder() {
    if (firstname.value === "") {
      firstname.placeholder = "";
    }
    if (lastname.value === "") {
      lastname.placeholder = "";
    }
    if (email.value === "") {
      email.placeholder = "email@example/com";
      email.classList.add("error");
    }
    if (password.value === "") {
      password.placeholder = "";
    }
  }

  //show success colour
  function showSucces(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
  }

  //check email is valid
  function checkEmail(input) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
      showSucces(input);
    } else {
      showError(input, "Looks like this is not an email");
    }
  }

  //checkRequired fields
  function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
      if (input.value.trim() === "") {
        showError(input, `${getFieldName(input)} cannot be empty`);
      } else {
        showSucces(input);
      }
    });
  }

  //get FieldName
  function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
  }

  //Event Listeners
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    errorPlaceholder();
    checkRequired([firstname, lastname, email, password]);
    checkEmail(email);
  });
});
