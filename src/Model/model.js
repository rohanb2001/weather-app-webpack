import { requestApi } from "../services/service";

export const inputField = document.querySelector("input");

export const state = {
  api: ``,
  inputValue: "",
};

export function getInputValues(e) {
  if (e.key === "Enter" && inputField.value !== "") {
    state.inputValue = inputField.value;
    requestApi(state.inputValue);
  }
}

// Event Listeners
inputField.addEventListener("keyup", getInputValues);
