const createUserForm = document.querySelector("#createForm");
const loginForm = document.querySelector("#loginForm");

console.log(createUserForm, loginForm);
createUserForm?.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (createUserForm) {
    const formData = new FormData(createUserForm);

    const data = Object.fromEntries(formData.entries());
    console.log(data);

    const res = await fetch("http://localhost:720/api/v1/users/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    console.log(result);
  }
});

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(loginForm);

  const data = Object.fromEntries(formData.entries());
  console.log(data);

  const res = await fetch("http://localhost:720/api/v1/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const loginResult = await res.json();
  console.log(loginResult);
});
