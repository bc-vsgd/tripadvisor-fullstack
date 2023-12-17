const serverUrl = "https://site--tripadvisor-backend--r6xgg7xm7vcz.code.run";
// const serverUrl = "http://localhost:3000";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded");
  // Display modal
  document.querySelector("#connection-button").addEventListener("click", () => {
    console.log("Connexion");
    document.querySelector(".modal-div").classList.toggle("hidden");
  });

  // Submit event
  document
    .querySelector(".modal form")
    .addEventListener("submit", async (e) => {
      e.preventDefault();
      // Retrieve form values
      const user = {
        firstname: document.querySelector("#firstname").value,
        lastname: document.querySelector("#lastname").value,
        email: document.querySelector("#email").value,
        message: document.querySelector("#message").value,
      };
      // Close modal
      document.querySelector(".modal-div").classList.toggle("hidden");
      // Send data to server
      const response = await axios.post(`${serverUrl}/form`, user);
      console.log(`${serverUrl}/form`);
      console.log(response.data);
    });

  //Close modal
  document.querySelector(".modal .icon-times").addEventListener("click", () => {
    console.log("Fermer");
    document.querySelector(".modal-div").classList.toggle("hidden");
  });
  // Dernière accolade + parenthèse
});
