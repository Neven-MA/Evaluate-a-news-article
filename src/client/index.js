import "./styles/style.scss";
import { checkURL } from "./js/checkURL.js";
import { handleSubmit } from "./js/formHandler.js";


document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("btn-submit");
  button.addEventListener("click", () => {
    handleSubmit();
  });
});

export { checkURL, handleSubmit };
