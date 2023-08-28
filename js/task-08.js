const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    alert("Please fill in all the fields!");
    return;
  }

  const person = {
    email: email,
    password: password,
  };

  console.log(person);
  formEl.reset();
}
