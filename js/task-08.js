const registerForm = document.querySelector("form.login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const email = form.elements.login.value;
  const password = form.elements.password.value;
  
  if (email === "" || password === "") {
    return console.log("Please fill in all the fields!");
  }

    const formData = {
        email: email,
        password: password,
    };
    console.log(formData);
    form.reset();
};