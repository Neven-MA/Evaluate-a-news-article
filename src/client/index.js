import "./styles/style.scss";
import { checkURL } from "./js/checkURL.js";
import { handleSubmit } from "./js/formHandler.js";

alert("I EXIST");
console.log("hi");

// TODO: get the button for submit
// TODO: add event listener to it when the click to call handleSubmit function
/**
 * TODO
 *  - Get Value of the input for URL
 *  - Check if it's URL or not
 *      yes
 *          send it to the backend
 *      no
 *          show user message it's not valid URL
 */
export { checkURL, handleSubmit };
