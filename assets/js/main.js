document.addEventListener("DOMContentLoaded", () => {
  // console.log("Listener doc");

  document.querySelector("#connection-button").addEventListener("click", () => {
    // console.log("Connectez-vous");
    document.querySelector(".modal").classList.toggle("hidden");
  });
  document.querySelector(".modal").addEventListener("submit", async (e) => {
    e.preventDefault();
    // console.log("submit listener");

    // Retrieve form values
    const user = {
      firstname: document.querySelector("#firstname").value,
      lastname: document.querySelector("#lastname").value,
      email: document.querySelector("#email").value,
      message: document.querySelector("#message").value,
    };
    document.querySelector(".modal").classList.toggle("hidden");
    const response = await axios.post("http://localhost:3000/form", user);
    console.log(response.data);
  });
});
