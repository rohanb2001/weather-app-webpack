import { state } from "../Model/model";
import { API_KEY } from "../config";
import { infoTxt, weatherDetails } from "../index";
import { onError } from "../View/view";

const locationBtn = document.querySelector("button");

export function requestApi(city) {
  state.api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
  fetchData();
}

function onSuccess(position) {
  const { latitude, longitude } = position.coords;
  state.api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;
  fetchData();
}

function getGeoLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  } else {
    alert("Your browser not support geolocation api");
  }
}

export function fetchData() {
  infoTxt.innerHTML = "Getting weather details...";
  infoTxt.classList.add("pending");
  fetch(state.api)
    .then((res) => res.json())
    .then((result) => weatherDetails(result))
    .catch(() => {
      infoTxt.innerHTML = "Something went wrong";
      infoTxt.classList.replace("pending", "error");
    });
}

// Event Listeners
locationBtn.addEventListener("click", getGeoLocation);
