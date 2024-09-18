const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  if (!form.elements.email.value || !form.elements.password.value) {
    alert("All form fields must be filled in");
    return;
  }
  const formInput = {
    email: form.elements.email.value.trim(),
    password: form.elements.password.value.trim(),
  };
  console.log(formInput);
  form.reset();
}
