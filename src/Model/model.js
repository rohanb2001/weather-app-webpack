import { requestApi } from "../services/service";

const inputField = document.querySelector("input");

export let API_KEY = "c6c351625df31807b6e3c66fb3910fcf";

export const state = {
  api: ``,
  inputValue: "",
};

export function getInputValues(e) {
  if (e.key === "Enter" && inputField.value !== "") {
    // state.inputValue = inputField.value;
    requestApi(inputField.value);
  }
}

inputField.addEventListener("keyup", getInputValues);
