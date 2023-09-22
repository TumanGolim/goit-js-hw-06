const registerForm = document.querySelector("form.login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const email = form.elements.email.value.trim(); 
  const password = form.elements.password.value.trim(); 

  let hasError = false;

  if (email === "" || password === "") {
    alert("Please fill in all the fields!");
    hasError = true;
  }

  if (!hasError) {
    const formData = {
      email: email,
      password: password,
    };
    console.log(formData);
    form.reset();
  }
}
