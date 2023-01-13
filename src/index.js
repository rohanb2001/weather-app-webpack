import "./css/style.css";
const wrapper = document.querySelector(".wrapper");
const inputPart = document.querySelector("input-part");
const infoTxt = document.querySelector(".info-txt");
const inputField = document.querySelector("input");
const locationBtn = document.querySelector("button");
const weatherPart = document.querySelector("weather-part");
const wIcon = document.querySelector("img");
const arrorBack = document.querySelector("header i");

// Variables
let api;
let API_KEY = "c6c351625df31807b6e3c66fb3910fcf";

// Functions
function getInputValues(e) {
  if (e.key == "Enter" && inputField.value != "") {
    requestApi(inputField.value);
  }
}

function requestApi(city) {
  api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
  fetchData();
}
// weatherDetails(result)
function fetchData() {
  infoTxt.innerHTML = "Getting weather details...";
  infoTxt.classList.add("pending");
  fetch(api)
    .then((res) => res.json())
    .then((result) => console.log(result))
    .catch(() => {
      infoTxt.innerHTML = "Something went wrong";
      infoTxt.classList.replace("pending", "error");
    });
}

// Add Event listeners
inputField.addEventListener("keyup", getInputValues);
